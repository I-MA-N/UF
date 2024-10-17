import JSZip from "jszip";
import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import ExtractedZipType from "../types/ExtractedZipType";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";
import useAIStore from "../pages/dashboard/tests/store/AIStore";
import usePhotoStore from "../pages/dashboard/tests/store/photoStore";
import DegreeType from "../types/DegreeType";
import DistanceType from "../types/DistanceType";
import DegreeDistanceType from "../types/DegreeDistanceType";

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

   const isSide = currentSection?.name === "side";
   if (isSide) {
      landmarks[38] = {
         x: isEven ? landmarks[28].x : landmarks[27].x,
         y: (landmarks[3].y + landmarks[6].y) / 2,
         z: isEven ? landmarks[28].z : landmarks[27].z,
         visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
      }

      landmarks[39] = {
         x: isEven ? landmarks[28].x : landmarks[27].x,
         y: isEven ? landmarks[30].y : landmarks[29].y,
         z: isEven ? landmarks[28].z : landmarks[27].z,
         visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
      }
   }
}

export const drawOnCanvas = (
   canvas: HTMLCanvasElement,
   palette: string[],
   landmarks: NormalizedLandmark[],
   editableLandmarks: number[]
) => {
   const ctx = canvas.getContext("2d");

   if (ctx) {
      ctx.save();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let font = "10px 'Estedad-Regular'";
      if (canvas.width > 400) font = "12px 'Estedad-Regular'";

      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      editableLandmarks.forEach(index => {
         const landmark = landmarks[index];
         if (landmark) {
            const pixelX = landmark.x * canvas.width;
            const pixelY = landmark.y * canvas.height;

            ctx.beginPath();
            ctx.arc(pixelX, pixelY, 2.5, 0, Math.PI * 2, true);
            ctx.fillStyle = palette[0];
            ctx.fill();
            ctx.closePath();

            ctx.fillStyle = palette[2];
            ctx.fillText(index.toString(), pixelX, pixelY);
         }
      })

      const connectors: { start: number, end: number }[] = [
         ...PoseLandmarker.POSE_CONNECTIONS,
         { start: 7, end: 33 },
         { start: 8, end: 33 },

         { start: 11, end: 33 },
         { start: 12, end: 33 },

         { start: 33, end: 34 },
         { start: 34, end: 35 },
      ];

      connectors.forEach(connector => {
         const startIndex = editableLandmarks.indexOf(connector.start);
         const endIndex = editableLandmarks.indexOf(connector.end);

         if (startIndex > -1 && endIndex > -1) {
            const startPixelX = landmarks[connector.start].x * canvas.width;
            const startPixelY = landmarks[connector.start].y * canvas.height;
            const endPixelX = landmarks[connector.end].x * canvas.width;
            const endPixelY = landmarks[connector.end].y * canvas.height;

            ctx.beginPath();
            ctx.moveTo(startPixelX, startPixelY);
            ctx.lineTo(endPixelX, endPixelY);
            ctx.strokeStyle = palette[1];
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
         }
      })

      ctx.restore();
   }
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

let deltaX = 0;
let deltaY = 0;
export const circleDown = (
   pageX: number,
   pageY: number,
   circle: HTMLDivElement | null
) => {
   const setIsMovingLandmark = usePhotoStore.getState().setIsMovingLandmark;

   if (circle) {
      setIsMovingLandmark(true);
      const rect = circle.getBoundingClientRect();
      const offsetX = pageX - rect.left;
      const offsetY = pageY - rect.top;
      deltaX = offsetX - (rect.width / 2);
      deltaY = offsetY - (rect.height / 2);
   }
}

export const circleMove = (
   circle: HTMLDivElement | null,
   pageX: number,
   pageY: number,
   canvas: HTMLCanvasElement,
   landmarks: NormalizedLandmark[],
   setLandmarks: (landmarks: NormalizedLandmark[]) => void,
   selectedLandmark: number,
) => {
   const isMovingLandmark = usePhotoStore.getState().isMovingLandmark;

   if (isMovingLandmark && circle) {
      const rect = canvas.getBoundingClientRect();
      pageX = pageX - rect.left;
      pageY = pageY - rect.top;

      const isOutOfCanvasX = pageX - deltaX >= canvas.clientWidth || pageX - deltaX <= 0;
      const isOutOfCanvasY = pageY - deltaY >= canvas.clientHeight || pageY - deltaY <= 0;

      if (!isOutOfCanvasX && !isOutOfCanvasY) {
         const circleRect = circle.getBoundingClientRect();
         circle.style.left = `${pageX - deltaX - (circleRect.width / 2)}px`;
         circle.style.top = `${pageY - deltaY - (circleRect.height / 2)}px`;

         landmarks[selectedLandmark].x = (pageX - deltaX) / canvas.clientWidth;
         landmarks[selectedLandmark].y = (pageY - deltaY) / canvas.clientHeight;

         setLandmarks(landmarks);
      }

   }
}

export const executeVideoFn = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   currentSection: staticEvaluationType[0][0] | dynamicEvaluationType[0][0] | undefined,
   landmarks: NormalizedLandmark[],
   landmarksStatus: boolean[]
) => {
   const ctx = canvasRef.current?.getContext("2d");
   if (ctx && currentSection && "videoFn" in currentSection && landmarks?.length) {
      const videoStates = currentSection.videoFn(landmarks);
      videoStates.forEach(({ landmarks, status }) => {
         let drawingUtils = new DrawingUtils(ctx);
         drawingUtils.drawLandmarks(landmarks, { color: status ? '#4CB648' : '#FF0000', radius: 1 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF0000', lineWidth: 0.5 });

         landmarksStatus.push(status);
      })
   }
}

export const getEditableLandmarks = (
   landmarks: NormalizedLandmark[]
) => {
   const currentSection = useAIStore.getState().currentSection;
   if (currentSection && landmarks?.length) {
      let editableLandmarks: number[] = [];
      const photoData = currentSection.photoFn(landmarks, 1, { width: 0, height: 0 });
      const cropData = currentSection.cropFn(landmarks, { width: 0, height: 0 });

      photoData.degrees.forEach(degree => {
         editableLandmarks = editableLandmarks.concat(degree.landmarksUsed)
      })

      if ("distances" in photoData) {
         const distances = photoData.distances as DistanceType[];
         distances.forEach(distance => {
            editableLandmarks = editableLandmarks.concat(distance.landmarksUsed)
         })
      }
      if ("degreesDistances" in photoData) {
         const degreesDistances = photoData.degreesDistances as DegreeDistanceType[];
         degreesDistances.forEach(degreeDistance => {
            editableLandmarks = editableLandmarks.concat(degreeDistance.landmarksUsed)
         })
      }

      editableLandmarks = editableLandmarks.concat(cropData.landmarksUsed);

      editableLandmarks.sort((a, b) => a - b);

      return [...new Set(editableLandmarks)];
   }

   return undefined;
}

export const drawDegree = (
   landmarks: NormalizedLandmark[],
   degree: DegreeType,
   drawingUtils: DrawingUtils,
   ctx: CanvasRenderingContext2D,
   width: number,
   height: number,
   isSectionDynamic: boolean
) => {
   if (degree.value !== null && degree.degree !== null) {
      const landmarksUsed: NormalizedLandmark[] = [];
      degree.landmarksUsed.forEach(landmarkIndex => {
         const landmark = landmarks[landmarkIndex];
         if (landmark) landmarksUsed.push(landmark);
      })

      drawingUtils.drawLandmarks(landmarksUsed, { radius: 0.5, color: "#FF0000" });
      drawingUtils.drawConnectors(landmarksUsed, [{ start: 0, end: 1 }, { start: 1, end: 2 }], { color: '#FF0000', lineWidth: 1.5 });

      let x = 0;
      let y = 0;
      if (landmarksUsed.length <= 2) {
         x = (landmarksUsed[0].x + landmarksUsed[1].x) / 2;
         y = (landmarksUsed[0].y + landmarksUsed[1].y) / 2;
      } else {
         x = landmarksUsed[1].x;
         y = landmarksUsed[1].y;
      }
      x *= width;
      y *= height;

      const text = degree.degree.toFixed(1) + '°';
      drawText(ctx, text, x, y, degree.value, isSectionDynamic);
   }
}

export const drawDistance = (
   landmarks: NormalizedLandmark[],
   distance: DistanceType,
   drawingUtils: DrawingUtils,
   ctx: CanvasRenderingContext2D,
   width: number,
   height: number,
   isSectionDynamic: boolean
) => {
   const firstLandmark = landmarks[distance.landmarksUsed[0]];
   const secondLandmark = landmarks[distance.landmarksUsed[1]];
   const landmarksUsed: NormalizedLandmark[] = [
      firstLandmark,
      distance.landmarksUsed[1] === 39 ? {
         x: secondLandmark.x,
         y: firstLandmark.y,
         z: firstLandmark.z,
         visibility: firstLandmark.visibility,
      } : secondLandmark
   ];

   drawingUtils.drawLandmarks(landmarksUsed, { radius: 0.5, color: "#FF0000" });
   drawingUtils.drawConnectors(landmarksUsed, [{ start: 0, end: 1 }, { start: 1, end: 2 }], { color: '#FF0000', lineWidth: 1.5 });

   let x = (landmarksUsed[0].x + landmarksUsed[1].x) / 2;
   let y = (landmarksUsed[0].y + landmarksUsed[1].y) / 2;
   x *= width;
   y *= height;
   y -= 4;

   const text = distance.distance.toFixed(1) + ' cm';
   drawText(ctx, text, x, y, distance.value, isSectionDynamic);
}

export const drawDegreeDistance = (
   landmarks: NormalizedLandmark[],
   degreeDistance: DegreeDistanceType,
   drawingUtils: DrawingUtils,
   ctx: CanvasRenderingContext2D,
   width: number,
   height: number,
   isSectionDynamic: boolean
) => {
   const landmarksUsed: NormalizedLandmark[] = [];
   degreeDistance.landmarksUsed.forEach(landmarkIndex => {
      const landmark = landmarks[landmarkIndex];
      if (landmark) landmarksUsed.push(landmark);
   })

   drawingUtils.drawLandmarks(landmarksUsed, { radius: 0.5, color: "#FF0000" });
   drawingUtils.drawConnectors(landmarksUsed, [{ start: 0, end: 1 }, { start: 1, end: 2 }], { color: '#FF0000', lineWidth: 1.5 });

   let degreeX = (landmarksUsed[0].x + landmarksUsed[1].x) / 2;
   let degreeY = (landmarksUsed[0].y + landmarksUsed[1].y) / 2;
   degreeX *= width;
   degreeY *= height;

   const degreeText = degreeDistance.degreesDistances[0].toFixed(1) + '°';
   drawText(ctx, degreeText, degreeX, degreeY - 8, degreeDistance.values[0], isSectionDynamic);

   const distanceText = degreeDistance.degreesDistances[1].toFixed(1) + ' cm';
   drawText(ctx, distanceText, degreeX, degreeY + 12, degreeDistance.values[1], isSectionDynamic, "top");
}

const drawText = (
   ctx: CanvasRenderingContext2D,
   text: string,
   x: number,
   y: number,
   value: string,
   isSectionDynamic: boolean,
   textBaseline?: CanvasTextBaseline
) => {
   ctx.font = "11px 'Estedad-Regular'";
   ctx.textAlign = "center";
   ctx.textBaseline = textBaseline || "bottom";
   const padding = 4;

   const metrics = ctx.measureText(text);
   const boxX = x - metrics.actualBoundingBoxLeft - padding;
   const boxY = y - metrics.actualBoundingBoxAscent - padding;
   const textWidth = metrics.width + (padding * 2);
   const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + (padding * 2);

   let color = "#4CB648";
   if (isSectionDynamic) {
      if (value === "1") color = "#FF0000"
   } else {
      if (value === "1") color = "#FF0000";
      if (value === "3") color = "#FCC72C";
   }

   ctx.fillStyle = color;
   ctx.fillRect(boxX, boxY, textWidth, textHeight);

   ctx.fillStyle = "#FFFFFF";
   ctx.fillText(text, x, y);
}

export const blurImage = async (zipFile: string) => {
   const promise = new Promise<string>(async (resolve, reject) => {
      const zip = new JSZip();
      await zip.loadAsync(zipFile, { base64: true });
      const image = zip.file('modifiedImage.png');
   
      if (image) {
         const base64 = await image.async("string");

         const img = new Image();
         img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (ctx) {
               canvas.width = img.width;
               canvas.height = img.height;
               ctx.filter = 'blur(5px)';
               ctx.drawImage(img, 0, 0);

               canvas.toBlob(blob => {
                  if (blob) {
                     const reader = new FileReader();
                     reader.onload = () => {
                        const result = reader.result;
                        if (typeof result === "string") {
                           zip.file('modifiedImage.png', result);
            
                           zip.generateAsync({ type: 'base64' })
                              .then(newZipFile => resolve(newZipFile))
                              .catch(() => reject("ذخیره سازی عکس ها با مشکل مواجه شد!"))
                        }
                     };
                     reader.readAsDataURL(blob);
                  }
               })
            }
         }
         img.src = base64;
      }
   })

   return promise;
}

export const extractZip = async (fileContent: string) => {
   const zip = new JSZip();
   await zip.loadAsync(fileContent, { base64: true });

   const image = zip.file('modifiedImage.png');
   const landmarksJson = zip.file("landmarks.json");
   const imageSizeJson = zip.file("imageSize.json");

   if (image && landmarksJson && imageSizeJson) {
      const base64 = await image.async("string");

      const imageSizeString = await imageSizeJson.async("string");
      const imageSize: { width: number, height: number } = JSON.parse(imageSizeString);

      const landmarksString = await landmarksJson.async("string");
      const landmarks: NormalizedLandmark[] = JSON.parse(landmarksString);

      return {
         image: base64,
         imageSize,
         landmarks
      } as ExtractedZipType
   }

   return null;
}