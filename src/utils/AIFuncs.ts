import JSZip from "jszip";
import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";
import useAIStore from "../pages/dashboard/tests/store/AIStore";

export const addExtraLandmarks = (
   landmarks: NormalizedLandmark[],
) => {
   // Direction of coordinates on side images have differences, so 'x' coordinate should be changed
   const currentSection = useAIStore.getState().currentSection;
   const isFromSide = currentSection?.name.toLowerCase().includes("side");

   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   if (isFromSide) {
      // C7
      landmarks[33] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2) - (isEven ? 0.03 : -0.03),
         y: landmarks[11].y - (30 * (landmarks[11].y - landmarks[7].y)) / 100,
         z: landmarks[11].z,
         visibility: landmarks[11].visibility,
      }

      // T12
      landmarks[34] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2) - (isEven ? 0.03 : -0.03),
         y: ((landmarks[11].y + landmarks[23].y) / 2) + 0.05,
         z: landmarks[11].z,
         visibility: landmarks[11].visibility,
      }

      // L5
      landmarks[35] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2) - (isEven ? 0.03 : -0.03),
         y: ((landmarks[23].y + landmarks[24].y) / 2) - 0.02,
         z: landmarks[11].z,
         visibility: landmarks[11].visibility,
      }

      // H1
      landmarks[36] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2) - (isEven ? 0.05 : -0.05),
         y: ((landmarks[11].y + landmarks[23].y) / 2) - 0.05,
         z: landmarks[11].z,
         visibility: landmarks[11].visibility,
      }

      // H2
      landmarks[37] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2) - (isEven ? 0.05 : -0.05),
         y: ((landmarks[11].y + landmarks[23].y) / 2) + 0.05,
         z: landmarks[11].z,
         visibility: landmarks[11].visibility,
      }
   }

   // const isSide = currentSection?.name === "side";
   // if (isSide) {
   //    landmarks[38] = {
   //       x: isEven ? landmarks[28].x : landmarks[27].x,
   //       y: (landmarks[3].y + landmarks[6].y) / 2 - 0.03,
   //       z: isEven ? landmarks[28].z : landmarks[27].z,
   //       visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
   //    }

   //    landmarks[39] = {
   //       x: isEven ? landmarks[28].x : landmarks[27].x,
   //       y: isEven ? landmarks[30].y : landmarks[29].y,
   //       z: isEven ? landmarks[28].z : landmarks[27].z,
   //       visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
   //    }
   // }
}

export const drawOnVideo = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   video: HTMLVideoElement,
   landmarks: NormalizedLandmark[]
) => {
   const canvas = canvasRef.current;
   const ctx = canvas?.getContext("2d");

   if (canvas && ctx) {
      ctx.save();

      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (landmarks?.length) {
         let drawingUtils = new DrawingUtils(ctx);

         drawingUtils.drawLandmarks(landmarks, { color: '#fff', radius: 1 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#fff', lineWidth: 0.5 });
      }

      ctx.restore();
   }
}

export const filterLandmarks = (
   currentSection: staticEvaluationType[0][0] | dynamicEvaluationType[0][0],
   landmarks: NormalizedLandmark[],
) => {
   const photoData = currentSection.photoFn(landmarks, 1, { width: 0, height: 0 });
   const cropData = currentSection.cropFn(landmarks, { width: 0, height: 0 });

   let needableLandmarks: number[] = [];

   photoData.degrees.forEach(degree => {
      needableLandmarks = needableLandmarks.concat(degree.landmarksUsed)
   })

   if ("distances" in photoData) {
      const distances = photoData.distances;
      distances.forEach(distance => {
         needableLandmarks = needableLandmarks.concat(distance.landmarksUsed)
      })
   }
   if ("degreesDistances" in photoData) {
      const degreesDistances = photoData.degreesDistances;
      degreesDistances.forEach(degreeDistance => {
         needableLandmarks = needableLandmarks.concat(degreeDistance.landmarksUsed)
      })
   }

   needableLandmarks = needableLandmarks.concat(cropData.landmarksUsed);

   needableLandmarks.sort((a, b) => a - b);

   needableLandmarks = [...new Set(needableLandmarks)];

   // ---------

   const drawableLandmarks: number[] = [];

   const isFromSide = currentSection.name.toLowerCase().includes("side");
   const isFromBack = currentSection.name.toLowerCase().includes("back");

   if (isFromSide) {
      let isEven = true;
      if (landmarks[11].z < landmarks[12].z) isEven = false;

      landmarks.forEach((_landmark, index) => {
         if (index === 0) {
            drawableLandmarks.push(index);
         } else if (index > 32) {
            if (needableLandmarks.includes(index)) {
               drawableLandmarks.push(index);
            }
         } else {
            if (index !== 1 && index !== 2 && index !== 4 && index !== 5) {
               if (isEven) {
                  if (index % 2 === 0) drawableLandmarks.push(index);
               } else {
                  if (index % 2 !== 0) drawableLandmarks.push(index);
               }
            }
         }
      })
   } else if (isFromBack) {
      landmarks.forEach((_landmark, index) => {
         if (index === 0) {
            drawableLandmarks.push(index);
         } else if (index > 6 && index !== 9 && index !== 10) {
            drawableLandmarks.push(index);
         }
      })
   } else {
      landmarks.forEach((_landmark, index) => {
         drawableLandmarks.push(index);
      })
   }

   return {
      needableLandmarks,
      drawableLandmarks
   };
}

export const extractZip = async (fileContent: string) => {
   const zip = new JSZip();
   await zip.loadAsync(fileContent, { base64: true });

   const isSavedFile = zip.file('isSaved.json');

   if (isSavedFile) {
      const isSavedString = await isSavedFile.async("string");
      const isSaved: boolean = JSON.parse(isSavedString).isSaved;

      let imageFile = zip.file('drawnImage.png');
      if (isSaved) {
         imageFile = zip.file('blurredDrawnImage.png');
      }

      if (imageFile) {
         const imageBase64 = await imageFile.async("string");

         return imageBase64;
      }
   }

   return null;
}