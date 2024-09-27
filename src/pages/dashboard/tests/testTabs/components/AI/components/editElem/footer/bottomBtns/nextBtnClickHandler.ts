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

   if (image && videoSize) {
      const img = new Image();
      img.src = image;
      img.onload = async () => {
         const canvas = document.createElement("canvas");
         const ctx = canvas.getContext("2d");
         const name = currentSection?.name.toLowerCase();

         if (ctx) {
            let left = landmarks[20].x * videoSize.width;
            let top = landmarks[6].y * videoSize.height;
            let width = (landmarks[19].x - landmarks[20].x) * videoSize.width;
            let height = (landmarks[32].y - landmarks[6].y) * videoSize.height;

            if (name?.includes("back")) {
               left = landmarks[19].x * videoSize.width;
               width = (landmarks[20].x - landmarks[19].x) * videoSize.width;
            }

            left -= 20;
            top -= 50;
            width += 80;
            height += 100;

            if (name?.includes("side")) {
               let isEven = true;
               if (landmarks[11].z < landmarks[12].z) isEven = false;

               left = (isEven ? landmarks[30].x : landmarks[29].x) * videoSize.width;
               width = ((isEven ? landmarks[20].x : landmarks[19].x) - (isEven ? landmarks[30].x : landmarks[29].x)) * videoSize.width;
               left -= 50;
               width += 120;
            }

            canvas.style.margin = "auto";
            canvas.width = 200;
            canvas.height = 400;
            ctx.drawImage(img, left, top, width, height, 0, 0, 200, 400);

            // document.getElementById("root")!.appendChild(canvas);
         }

         const landmarksJson = JSON.stringify(landmarks);
         zip.file('landmarks.json', landmarksJson);
   
         const imageSizeJson = JSON.stringify(videoSize);
         zip.file('imageSize.json', imageSizeJson);
   
         zip.file('image.jpeg', image);
         const base64 = await zip.generateAsync({ type: 'base64' });
   
         if (currentSection?.name) getOrSetZipFile(currentSection.name, base64);
      }
   }

   // Call "photoFn" function to evalutate based on "landmarks"
   // Update form data using "getValues" function
   if (currentSection && setValue) {
      const resultObj = currentSection.photoFn(landmarks, userHeight);
      Object.entries(resultObj).forEach(([key, value]) => {
         setValue(key, value);
      })
      
      updateFormData()
   }

   // Update current section & hide canvas
   setCurrentSection(nextSectionName);
   removePhoto();
}

export default nextBtnClickHandler;