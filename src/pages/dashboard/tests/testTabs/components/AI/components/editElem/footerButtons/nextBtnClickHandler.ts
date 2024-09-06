import { Results } from "@mediapipe/holistic";
import JSZip from "jszip";
import SectionNames from "../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../store/AIStore";
import useFormStore from "../../../../../../store/formStore";

async function nextBtnClickHandler(
   photoData: Results,
   nextSectionName: SectionNames | undefined,
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
) {
   const { currentSection, setCurrentSection, getOrSetZipFile } = useAIStore.getState();
   const { updateFormData, setValue } = useFormStore.getState();

   // Update current section & hide canvas
   setCurrentSection(nextSectionName);
   setShowCanvas(false);

   // Add base64 string of image & landmarks to store
   const zip = new JSZip();

   const jsonLandmarks = JSON.stringify(photoData.poseLandmarks);
   zip.file('landmarks.json', jsonLandmarks);

   // To generate "Blob" from "photoData.image", we need to
   // draw it on canvas first, then we use "toBlob" function to get "Blob" of image
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

         if (currentSection?.name) getOrSetZipFile(currentSection.name, base64);
      }
   }

   // Call "photoFn" function to evalutate based on "photoData.poseLandmarks"
   // Update form data using "getValues" function
   if (photoData.poseLandmarks?.length && currentSection && setValue) {
      currentSection.AI.photoFn(photoData.poseLandmarks, setValue);
      updateFormData()
   }
}

export default nextBtnClickHandler;