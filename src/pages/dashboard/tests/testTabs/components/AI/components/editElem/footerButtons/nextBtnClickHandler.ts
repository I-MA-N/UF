import JSZip from "jszip";
import SectionNames from "../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../store/AIStore";
import useFormStore from "../../../../../../store/formStore";
import usePhotoStore from "../../../../../../store/photoStore";
import PhotoLandmarksType from "../../../../../../../../../types/PhotoLandmarksType";

async function nextBtnClickHandler(
   landmarks: PhotoLandmarksType,
   nextSectionName: SectionNames | undefined,
) {
   const { currentSection, setCurrentSection, getOrSetZipFile } = useAIStore.getState();
   const { updateFormData, setValue } = useFormStore.getState();
   const { image, removePhoto, videoSize } = usePhotoStore.getState();

   // Update current section & hide canvas
   setCurrentSection(nextSectionName);
   removePhoto();

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
      currentSection.AI.photoFn(landmarks, setValue);
      updateFormData()
   }
}

export default nextBtnClickHandler;