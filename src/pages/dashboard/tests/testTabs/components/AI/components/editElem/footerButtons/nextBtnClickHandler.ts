import JSZip from "jszip";
import SectionNames from "../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../store/AIStore";
import useFormStore from "../../../../../../store/formStore";
import usePhotoStore from "../../../../../../store/photoStore";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

async function nextBtnClickHandler(
   landmarks: NormalizedLandmark[],
   nextSectionName: SectionNames | undefined,
) {
   const { currentSection, setCurrentSection, getOrSetZipFile } = useAIStore.getState();
   const { updateFormData, setValue } = useFormStore.getState();
   const { image, removePhoto } = usePhotoStore.getState();

   // Update current section & hide canvas
   setCurrentSection(nextSectionName);
   removePhoto();

   // Add base64 string of image & landmarks to store
   const zip = new JSZip();

   const jsonLandmarks = JSON.stringify(landmarks);
   zip.file('landmarks.json', jsonLandmarks);

   // To generate "Blob" from "image", we need to
   // draw it on canvas first, then we use "toBlob" function to get "Blob" of image
   const canvas = document.createElement("canvas");
   const ctx = canvas.getContext("2d");
   if (canvas && ctx && image) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob | null>((resolve) => {
         canvas.toBlob(resolve, 'image/jpeg'); // Change format if needed
      });

      if (blob) {
         zip.file('image.jpeg', blob);
         const base64 = await zip.generateAsync({ type: 'base64' });

         if (currentSection?.name) getOrSetZipFile(currentSection.name, base64);
      }
   }

   // Call "photoFn" function to evalutate based on "landmarks"
   // Update form data using "getValues" function
   if (currentSection && setValue) {
      currentSection.AI.photoFn(landmarks, setValue);
      updateFormData()
   }
}

export default nextBtnClickHandler;