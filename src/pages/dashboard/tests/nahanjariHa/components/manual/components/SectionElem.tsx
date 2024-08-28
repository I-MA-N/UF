import ManualInput from "./ManualInput";
import GImage from "../../../../../../../api/common/GImage";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";
import { useAIContext } from "../../../../context/AIContextProvider";
import { addImageZip, drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import { NormalizedLandmarkList } from "@mediapipe/holistic";
import Loading from "../../../../../../common/Loading";
import ErrorText from "./ErrorText";
import { dynamicType } from "../../../../data/testsData/dynamic";
import { nahanjariHaType } from "../../../../data/testsData/nahanjariHa";
import ImageInput from "./ImageInput";

type SectionElemProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   section: nahanjariHaType[0] | dynamicType[0],
   formData: any,
}

function SectionElem({ setIsAIMethod, section, formData }: SectionElemProps) {
   const [AIData, setAIData] = useAIContext();
   const imgFile = useMemo(() => (
      AIData?.imagesToSave?.find(image => image.key === section.name)
   ), [AIData?.imagesToSave]);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   const { formname, username } = useParams();
   const { data, isPending, isError } = GImage(username, formname, section.name);

   const [width, setWidth] = useState(384);

   useEffect(() => {
      if (data?.result && !imgFile) {
         // Add new image to context
         const newObject = {
            key: section.name,
            value: data?.result
         };
         addImageZip(newObject, setAIData);
      }
   }, [data?.result, imgFile])

   useEffect(() => {
      const resizeHandler = (e: UIEvent) => {
         // @ts-ignore
         const width = e.target.outerWidth;
         if (width < 384) setWidth(width)

      }
      window.addEventListener("resize", resizeHandler);

      return () => {
         window.removeEventListener("resize", resizeHandler);
      }
   }, [])

   useEffect(() => {
      if (imgFile) {
         const extractZip = async () => {
            const zip = new JSZip();
            await zip.loadAsync(imgFile?.value, { base64: true });
            const blob = await zip.file("image.jpeg")?.async("blob");
            const json = await zip.file("landmarks.json")?.async("string");
            const canvas = canvasRef.current;

            if (blob && canvas) {
               if (json) {
                  const imageBitmap = await createImageBitmap(blob);

                  const landmarks: NormalizedLandmarkList = JSON.parse(json);
                  drawOnCanvas(canvas, imageBitmap, landmarks);
               } else {
                  const imageBitmap = await createImageBitmap(blob);

                  drawOnCanvas(canvas, imageBitmap, []);
               }
            }
         }

         extractZip();
      }
   }, [imgFile, width])

   if (isPending) return (
      <div className="pb-8">
         <Loading fullHeight={false} />
      </div>
   )

   if (isError) return <ErrorText text="دریافت اطلاعات این قسمت با مشکل مواجه شد!" />

   return (
      <div className="py-10" key={section.name}>
         {
            imgFile ?
               <canvas
                  ref={canvasRef}
                  width={width}
                  height={width / 0.8}
                  className="max-w-full"
               /> :
               <button
                  type="button"
                  onClick={() => {
                     setAIData(prevValue => ({
                        ...prevValue,
                        nameFromManualTab: section.name
                     }))
                     setIsAIMethod(true);
                  }}
               >
                  Add image
               </button>
         }
         <h3 className="mb-3 text-center text-sm lg:text-base">{section.nameFA}</h3>
         <div className="flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap">
            {
               section.questions.map(input => {
                  const defaultValue = formData?.[input.title];

                  if ("keys" in input) return (
                     <ManualInput
                        key={input.title}
                        title={input.title}
                        keys={input.keys}
                        values={input.values}
                        index={input.id}
                        setValue={AIData?.setValue!}
                        defaultValue={Number(defaultValue)}
                     />
                  )

                  return (
                     <ImageInput
                        key={input.id}
                        title={input.title}
                        image={input.src}
                        direction={input.direction}
                        setValue={AIData?.setValue!}
                        defaultValue={Number(defaultValue) || 0}
                     />
                  )
               })
            }
         </div>
      </div>
   );
};

export default SectionElem;