import { Results } from "@mediapipe/holistic";
import { useEffect, useMemo, useRef, useState } from "react";
import { addImageZip, canvasClick, canvasMouseMove, drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import SampleCanvas from "./SampleCanvas";
import { useAIContext } from "../../../../context/AIContextProvider";
import JSZip from 'jszip';

type CanvasElemProps = {
   photoData: Results,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null>>
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

function CanvasElem({ photoData, setPhotoData, setShowCanvas }: CanvasElemProps) {
   const [AIData, setAIData] = useAIContext();
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const landmarks = useMemo(() => photoData.poseLandmarks, [photoData])
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      drawOnCanvas(canvasRef.current, photoData.image, photoData.poseLandmarks);
   }, [canvasRef.current, photoData, selectedLandmark])

   return (
      <>
         <SampleCanvas selectedLandmark={selectedLandmark} />
         <div className="relative">
            <canvas
               ref={canvasRef}
               onClick={(e) => landmarks?.length &&
                  canvasClick(
                     e,
                     canvasRef.current,
                     selectedLandmark,
                     setSelectedLandmark,
                     landmarks,
                     setPhotoData
                  )
               }
               onMouseMove={() => canvasMouseMove(selectedLandmark)}
               width={AIData?.videoSize?.width}
               height={AIData?.videoSize?.height}
               className="mx-auto"
            />
         </div>
         {!landmarks?.length && <p>نقطه ای در عکس یافت نشد!</p>}
         <div className="flex gap-4 absolute bottom-10 left-1/2 -translate-x-1/2">
            <button
               type="button"
               onClick={() => setShowCanvas(false)}
            >
               برگشت
            </button>
            <button
               type="button"
               onClick={async () => {
                  // Go for next imageState
                  setAIData(prevValue => {
                     const imageStateName = prevValue?.imageState?.name;
                     const testData = AIData?.testData;
                     const imageStateIndex = testData?.findIndex(state => state.name === imageStateName);

                     if (testData && typeof imageStateIndex === "number") {
                        const nextImageState = testData[imageStateIndex + 1];

                        if (!nextImageState) return {
                           ...prevValue,
                           imageState: undefined
                        }
                        
                        return {
                           ...prevValue,
                           imageState: {
                              name: nextImageState.name,
                              nameFA: nextImageState.nameFA,
                              sampleImageSrc: nextImageState.AI.sampleImageSrc,
                              sampleImageLandmarks: nextImageState.AI.sampleImageLandmarks,
                              evaluateFn: nextImageState.AI.evaluateFn
                           }
                        }
                     }

                     return {
                        ...prevValue
                     }
                  })
                  setShowCanvas(false);

                  // Send image to save in database
                  const zip = new JSZip();

                  const jsonLandmarks = JSON.stringify(photoData.poseLandmarks);
                  zip.file('landmarks.json', jsonLandmarks);

                  // To generate "Blob" from "photoData.image", we need to draw it on canvas,
                  // after that we use "toBlob" function to get "Blob" of image
                  const canvas = document.createElement("canvas");
                  const ctx = canvas.getContext("2d");
                  if (canvas && ctx) {
                     ctx.clearRect(0, 0, canvas.width, canvas.height);
                     ctx.drawImage(photoData.image, 0, 0, canvas.width, canvas.height);
                     const blob = await new Promise<Blob | null>((resolve) => {
                        canvas.toBlob(resolve, 'image/jpeg'); // Change format if needed
                     });

                     if (blob) {
                        zip.file('image.jpeg', blob);

                        const base64 = await zip.generateAsync({ type: 'base64' });
                        // Add new image to context
                        const newObject = {
                           key: AIData?.imageState?.name!,
                           value: base64
                        };
                        addImageZip(newObject, setAIData);
                     }
                  }

                  // Evaluate function should be called here
                  if (photoData.poseLandmarks?.length) {
                     AIData?.imageState?.evaluateFn(photoData.poseLandmarks, AIData.setValue!);
                     setAIData(prevValue => ({
                        ...prevValue,
                        formData: AIData?.getValues!()
                     }))
                  }
               }}
            >
               تایید
            </button>
         </div>
      </>
   );
};

export default CanvasElem;