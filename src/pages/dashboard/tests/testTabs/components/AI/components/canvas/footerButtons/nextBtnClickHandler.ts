import { Results } from "@mediapipe/holistic";
import AIContextType from "../../../../../../../../../types/AIContextType";
import { dynamicType } from "../../../../../../data/testsData/dynamic";
import { nahanjariHaType } from "../../../../../../data/testsData/nahanjariHa";
import JSZip from "jszip";
import { addImageZip } from "../../../../../../../../../utils/AIFuncs";

async function nextBtnClickHandler(
   photoData: Results,
   AIData: AIContextType | null,
   setAIData: React.Dispatch<React.SetStateAction<AIContextType | null>>,
   nextImageState: nahanjariHaType[0] | dynamicType[0] | undefined,
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
) {
   // Go for next imageState
   setAIData(prevValue => {
      if (nextImageState) return {
         ...prevValue,
         imageState: {
            name: nextImageState.name,
            nameFA: nextImageState.nameFA,
            sampleImageSrc: nextImageState.AI.sampleImageSrc,
            sampleImageLandmarks: nextImageState.AI.sampleImageLandmarks,
            photoFn: nextImageState.AI.photoFn,
            videoFn: "videoFn" in nextImageState.AI ? nextImageState.AI.videoFn : undefined
         }
      }

      return {
         ...prevValue,
         imageState: undefined
      }
   })
   setShowCanvas(false);

   // Add image to context
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
      AIData?.imageState?.photoFn(photoData.poseLandmarks, AIData.setValue!);
      setAIData(prevValue => ({
         ...prevValue,
         formData: AIData?.getValues!()
      }))
   }
}

export default nextBtnClickHandler;