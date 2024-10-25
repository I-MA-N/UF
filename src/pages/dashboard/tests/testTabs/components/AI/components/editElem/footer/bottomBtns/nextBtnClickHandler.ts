import JSZip from "jszip";
import SectionNames from "../../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../../store/photoStore";
import { DrawingUtils, NormalizedLandmark } from "@mediapipe/tasks-vision";
import DistanceType from "../../../../../../../../../../types/DistanceType";
import { drawDegree, drawDegreeDistance, drawDistance } from "../../../../../../../../../../utils/AIFuncs";
import DegreeDistanceType from "../../../../../../../../../../types/DegreeDistanceType";
import DegreeType from "../../../../../../../../../../types/DegreeType";
import useFormDataStore from "../../../../../../../store/formDataStore";

function nextBtnClickHandler(
   landmarks: NormalizedLandmark[],
   nextSectionName: SectionNames | undefined,
) {
   const { currentSection, setCurrentSection, userHeight } = useAIStore.getState();
   const { image, removePhoto } = usePhotoStore.getState();

   if (image && currentSection) {
      const img = new Image();
      img.onload = async () => {
         const editCanvas = document.getElementById("editCanvas") as HTMLCanvasElement;
         const photoResult = currentSection.photoFn(landmarks, userHeight, { width: editCanvas.clientWidth, height: editCanvas.clientHeight });

         const canvas = document.createElement("canvas");
         const finalCanvas = document.createElement("canvas");
         const isDynamicEvaluation = "src" in currentSection.questions[0];

         setInputValues(photoResult.values, currentSection.nameFA, isDynamicEvaluation);

         drawResultsOnCanvas(canvas, img, photoResult, isDynamicEvaluation, landmarks);

         cropCanvas(landmarks, finalCanvas, canvas);

         finalCanvasToBase64(finalCanvas, imageBase64 => {
            createAndSetZipFile(imageBase64, image, photoResult.values, landmarks, currentSection.name);
         });

         setCurrentSection(nextSectionName);
         removePhoto();
      }
      img.src = image;
   }
}

function setInputValues(
   values: { [k: string]: string },
   sectionNameFA: string,
   isDynamicEvaluation: boolean
) {
   const setAIValues = useFormDataStore.getState().setAIValues;

   setAIValues(values, sectionNameFA, isDynamicEvaluation);
}

function drawResultsOnCanvas(
   canvas: HTMLCanvasElement,
   img: HTMLImageElement,
   result: {
      values: {};
      degrees: DegreeType[];
   },
   isDynamicEvaluation: boolean,
   landmarks: NormalizedLandmark[]
) {
   const ctx = canvas.getContext("2d");

   if (ctx) {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const drawingUtils = new DrawingUtils(ctx);

      result.degrees.forEach(degree => drawDegree(landmarks, degree, drawingUtils, ctx, canvas.width, canvas.height, isDynamicEvaluation));
      if ("distances" in result) {
         const distances = result.distances as DistanceType[];
         distances.forEach(distance => drawDistance(landmarks, distance, drawingUtils, ctx, canvas.width, canvas.height, isDynamicEvaluation));
      }
      if ("degreesDistances" in result) {
         const degreesDistances = result.degreesDistances as DegreeDistanceType[];
         degreesDistances.forEach(degreeDistance => drawDegreeDistance(landmarks, degreeDistance, drawingUtils, ctx, canvas.width, canvas.height, isDynamicEvaluation));
      }
   }

}

function cropCanvas(
   landmarks: NormalizedLandmark[],
   finalCanvas: HTMLCanvasElement,
   canvas: HTMLCanvasElement,
) {
   const currentSection = useAIStore.getState().currentSection;
   const videoSize = usePhotoStore.getState().videoSize;

   if (videoSize) {
      const { result: { left, width, top, height } } = currentSection!.cropFn(landmarks, videoSize);

      const finalCtx = finalCanvas.getContext("2d");

      if (finalCtx) {
         finalCanvas.width = width;
         finalCanvas.height = height;
         finalCtx.drawImage(canvas, left, top, width, height, 0, 0, width, height);
      }
   }
}

function finalCanvasToBase64(
   finalCanvas: HTMLCanvasElement,
   callback: (base64: string) => void
) {
   finalCanvas.toBlob(blob => {
      if (blob) {
         const reader = new FileReader();
         reader.onload = async () => {
            if (typeof reader.result === "string") callback(reader.result);
         };
         reader.readAsDataURL(blob);
      }
   })
}

async function createAndSetZipFile(
   imageBase64: string,
   image: string,
   values: {},
   landmarks: NormalizedLandmark[],
   currentSectionName: SectionNames
) {
   const videoSize = usePhotoStore.getState().videoSize;

   if (videoSize) {
      const getOrSetZipFile = useAIStore.getState().getOrSetZipFile;

      const zip = new JSZip();

      zip.file('modifiedImage.png', imageBase64);

      zip.file('pureImage.png', image);

      const valuesJson = JSON.stringify(values);
      zip.file('values.json', valuesJson);

      const landmarksJson = JSON.stringify(landmarks);
      zip.file('landmarks.json', landmarksJson);

      const imageSizeJson = JSON.stringify(videoSize);
      zip.file('imageSize.json', imageSizeJson);

      const base64 = await zip.generateAsync({ type: 'base64' });
      getOrSetZipFile(currentSectionName, base64);
   }
}

export default nextBtnClickHandler;