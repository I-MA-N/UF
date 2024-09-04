import { Results } from "@mediapipe/holistic";
import AIContextType from "../../../../../../../../../types/AIContextType";
import { dynamicEvaluationType } from "../../../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../../../data/testsData/staticEvaluation";
import JSZip from "jszip";

async function nextBtnClickHandler(
   photoData: Results,
   AIData: AIContextType | null,
   setAIData: React.Dispatch<React.SetStateAction<AIContextType | null>>,
   nextSection: staticEvaluationType[0] | dynamicEvaluationType[0] | undefined,
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
) {
   // Go for next section
   setAIData(prevValue => {
      if (nextSection) return {
         ...prevValue,
         currentSection: prevValue?.activeTestData?.find(section => section.name === nextSection.name)
      }

      return {
         ...prevValue,
         currentSection: undefined
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
         setAIData(prevValue => {
            const activeTestData = prevValue?.activeTestData;
            const currentSectionIndex = activeTestData?.findIndex(section => section.name === AIData?.currentSection?.name);
            
            if (activeTestData && currentSectionIndex !== undefined && currentSectionIndex > -1) {
               activeTestData[currentSectionIndex].zipFile = base64;
            }
            
            return {
               ...prevValue,
               activeTestData
            }
         })
      }
   }

   // Evaluate function should be called here
   if (photoData.poseLandmarks?.length && AIData?.currentSection && "videoFn" in AIData.currentSection.AI) {
      AIData.currentSection.AI.photoFn(photoData.poseLandmarks, AIData.setValue!);
      setAIData(prevValue => ({
         ...prevValue,
         formData: AIData?.getValues!()
      }))
   }
}

export default nextBtnClickHandler;