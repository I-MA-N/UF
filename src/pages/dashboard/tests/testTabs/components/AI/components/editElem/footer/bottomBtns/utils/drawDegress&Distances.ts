import { DrawingUtils, NormalizedLandmark } from "@mediapipe/tasks-vision";
import DegreeType from "../../../../../../../../../../../types/DegreeType";
import DistanceType from "../../../../../../../../../../../types/DistanceType";
import DegreeDistanceType from "../../../../../../../../../../../types/DegreeDistanceType";

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
      distance.landmarksUsed[1] === 39
         ?
         {
            x: secondLandmark.x,
            y: firstLandmark.y,
            z: firstLandmark.z,
            visibility: firstLandmark.visibility,
         }
         :
         secondLandmark
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
   const padding = 2;

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