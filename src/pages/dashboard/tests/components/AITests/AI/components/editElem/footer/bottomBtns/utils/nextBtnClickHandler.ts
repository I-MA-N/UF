import JSZip from "jszip";
import SectionNames from "../../../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../../../store/photoStore";
import { DrawingUtils, NormalizedLandmark } from "@mediapipe/tasks-vision";
import DistanceType from "../../../../../../../../../../../types/DistanceType";
import { filterLandmarks } from "../../../../../../../../../../../utils/AIFuncs";
import DegreeDistanceType from "../../../../../../../../../../../types/DegreeDistanceType";
import DegreeType from "../../../../../../../../../../../types/DegreeType";
import useFormDataStore from "../../../../../../../../store/formDataStore";
import { staticEvaluationType } from "../../../../../../../../data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../../../../../../../../data/testsData/dynamicEvaluation";
import drawOnFinalImage from "./drawOnFinalImage";
import { drawDegree, drawDegreeDistance, drawDistance } from "./drawDegress&Distances";

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

         const videoSize = usePhotoStore.getState().videoSize!;
         const { result: { left, width, top, height } } = currentSection!.cropFn(landmarks, videoSize);

         const zip = new JSZip();

         {
            const { croppedCanvas } = generateCroppedCanvas(img, width, height, left, top);

            const croppedCanvasBase64 = await canvasToBase64(croppedCanvas);
            zip.file('croppedImage.png', croppedCanvasBase64);
         }

         {
            const drawnCanvas = generateDrawnCanvas(img, currentSection, landmarks, photoResult, width, height, left, top, false);

            const drawnCanvasBase64 = await canvasToBase64(drawnCanvas);
            zip.file('drawnImage.png', drawnCanvasBase64);
         }

         {
            const blurredDrawnCanvas = generateDrawnCanvas(img, currentSection, landmarks, photoResult, width, height, left, top, true);

            const blurredDrawnCanvasBase64 = await canvasToBase64(blurredDrawnCanvas);
            zip.file('blurredDrawnImage.png', blurredDrawnCanvasBase64);
         }

         createAndSetZipFile(zip, photoResult.values, landmarks, currentSection.name);

         setInputValues(photoResult.values);

         setCurrentSection(nextSectionName);
         removePhoto();
      }
      img.src = image;
   }
}

function generateCroppedCanvas(
   img: HTMLImageElement,
   width: number, height: number,
   left: number, top: number
) {
   const croppedCanvas = document.createElement("canvas");
   const croppedCtx = croppedCanvas.getContext("2d");

   if (croppedCtx) {
      croppedCanvas.width = width;
      croppedCanvas.height = height;
      croppedCtx.drawImage(img, left, top, width, height, 0, 0, width, height);
   }

   return { croppedCanvas, croppedCtx };
}

function generateDrawnCanvas(
   img: HTMLImageElement,
   currentSection: staticEvaluationType[0][0] | dynamicEvaluationType[0][0],
   landmarks: NormalizedLandmark[],
   photoResult: {
      values: {};
      degrees: DegreeType[];
   },
   width: number, height: number,
   left: number, top: number,
   withBlur: boolean
) {
   const drawnCanvas = document.createElement("canvas");
   const drawnCtx = drawnCanvas.getContext("2d");

   if (drawnCtx) {
      // Draw 'image' on canvas(with/without blur)
      {
         drawnCtx.clearRect(0, 0, img.width, img.height);
         drawnCanvas.width = img.width;
         drawnCanvas.height = img.height;

         if (withBlur) drawnCtx.filter = "blur(6px)";
         drawnCtx.drawImage(img, 0, 0, img.width, img.height);
         drawnCtx.filter = "none";
      }

      // Draw 'landmarks' on canvas
      {
         const { drawableLandmarks } = filterLandmarks(currentSection, landmarks);
         drawOnFinalImage(drawnCanvas, landmarks, drawableLandmarks);
      }

      // Draw 'degrees', 'distances' & 'degreesDistances' on canvas 
      {
         const isDynamicEvaluation = "src" in currentSection.questions[0];
         const drawingUtils = new DrawingUtils(drawnCtx);

         photoResult.degrees.forEach(degree => {
            drawDegree(landmarks, degree, drawingUtils, drawnCtx, img.width, img.height, isDynamicEvaluation);
         });
         if ("distances" in photoResult) {
            const distances = photoResult.distances as DistanceType[];
            distances.forEach(distance => {
               drawDistance(landmarks, distance, drawingUtils, drawnCtx, img.width, img.height, isDynamicEvaluation);
            });
         }
         if ("degreesDistances" in photoResult) {
            const degreesDistances = photoResult.degreesDistances as DegreeDistanceType[];
            degreesDistances.forEach(degreeDistance => {
               drawDegreeDistance(landmarks, degreeDistance, drawingUtils, drawnCtx, img.width, img.height, isDynamicEvaluation);
            });
         }
      }
   }

   const { croppedCtx, croppedCanvas } = generateCroppedCanvas(img, width, height, left, top);
   if (croppedCtx) {
      croppedCtx.drawImage(drawnCanvas, left, top, width, height, 0, 0, width, height);
   }

   return croppedCanvas;
}

async function canvasToBase64(
   canvas: HTMLCanvasElement
) {
   const promise = new Promise<string>((resolve, reject) => {
      canvas.toBlob(blob => {
         if (blob) {
            const reader = new FileReader();
            reader.onload = () => {
               if (typeof reader.result === "string") {
                  resolve(reader.result);
               } else {
                  reject();
               }
            };
            reader.readAsDataURL(blob);
         }
      })
   })

   return promise;
}

async function createAndSetZipFile(
   zip: JSZip,
   values: {},
   landmarks: NormalizedLandmark[],
   currentSectionName: SectionNames
) {
   const setZipFile = useAIStore.getState().setZipFile;

   const valuesJson = JSON.stringify(values);
   zip.file('values.json', valuesJson);

   const landmarksJson = JSON.stringify(landmarks);
   zip.file('landmarks.json', landmarksJson);

   const isSavedJson = JSON.stringify({ isSaved: false });
   zip.file('isSaved.json', isSavedJson);

   const base64 = await zip.generateAsync({ type: 'base64' });
   setZipFile(currentSectionName, base64);
}

function setInputValues(
   values: { [k: string]: string }
) {
   const setAIValues = useFormDataStore.getState().setAIValues;

   setAIValues(values);
}

export default nextBtnClickHandler;