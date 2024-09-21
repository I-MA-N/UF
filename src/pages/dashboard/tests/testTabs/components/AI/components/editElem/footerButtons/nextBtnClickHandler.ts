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
   const { currentSection, setCurrentSection, getOrSetZipFile, userHeight } = useAIStore.getState();
   const { updateFormData, setValue } = useFormStore.getState();
   const { image, removePhoto, videoSize } = usePhotoStore.getState();

   // Add "landmarks" & "imageSize" string & "image" base64 to store
   const zip = new JSZip();

   if (image) {
      const landmarksJson = JSON.stringify(landmarks);
      zip.file('landmarks.json', landmarksJson);

      const imageSizeJson = JSON.stringify(videoSize);
      zip.file('imageSize.json', imageSizeJson);

      zip.file('image.jpeg', image);
      const base64 = await zip.generateAsync({ type: 'base64' });

      if (currentSection?.name) getOrSetZipFile(currentSection.name, base64);
   }

   // Call "photoFn" function to evalutate based on "landmarks"
   // Update form data using "getValues" function
   if (currentSection && setValue) {
      const resultObj = currentSection.AI.photoFn(landmarks, userHeight);
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