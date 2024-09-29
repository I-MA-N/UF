import JSZip from "jszip";
import SectionNames from "../../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../../store/AIStore";
import useFormStore from "../../../../../../../store/formStore";
import usePhotoStore from "../../../../../../../store/photoStore";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function nextBtnClickHandler(
   landmarks: NormalizedLandmark[],
   nextSectionName: SectionNames | undefined,
) {
   const { currentSection, setCurrentSection, getOrSetZipFile, userHeight } = useAIStore.getState();
   const { updateFormData, setValue } = useFormStore.getState();
   const { image, removePhoto, videoSize } = usePhotoStore.getState();

   // Add "landmarks" & "imageSize" string & "image" base64 to store
   const zip = new JSZip();

   if (image && currentSection && videoSize && setValue) {
      const img = new Image();
      img.src = image;
      img.onload = async () => {
         const canvas = document.createElement("canvas");
         const ctx = canvas.getContext("2d");

         if (ctx) {
            const { left, top, width, height } = currentSection.cropFn(landmarks, videoSize);

            canvas.style.margin = "auto";
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, left, top, width, height, 0, 0, width, height);

            const imageBase64 = canvas.toDataURL("image/png");
            zip.file('image.jpeg', imageBase64);

            const landmarksJson = JSON.stringify(landmarks);
            zip.file('landmarks.json', landmarksJson);

            const imageSizeJson = JSON.stringify(videoSize);
            zip.file('imageSize.json', imageSizeJson);

            const base64 = await zip.generateAsync({ type: 'base64' });
            getOrSetZipFile(currentSection.name, base64);

            // Call "photoFn" function to evalutate based on "landmarks"
            const resultObj = currentSection.photoFn(landmarks, userHeight);
            Object.entries(resultObj).forEach(([key, value]) => {
               setValue(key, value);
            })

            updateFormData();

            // Update current section & hide canvas
            setCurrentSection(nextSectionName);
            removePhoto();
         }

      }
   }
}

export default nextBtnClickHandler;