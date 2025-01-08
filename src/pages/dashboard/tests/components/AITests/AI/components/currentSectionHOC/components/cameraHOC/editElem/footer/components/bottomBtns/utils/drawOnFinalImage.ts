import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import CONNECTORS from "../../../../../../../../../../../../../../../utils/connectors";

const drawOnFinalImage = (
   canvas: HTMLCanvasElement,
   landmarks: NormalizedLandmark[],
   drawableLandmarks: number[],
) => {
   const ctx = canvas.getContext("2d");

   if (ctx) {
      landmarks.forEach((landmark, index) => {
         if (drawableLandmarks.includes(index)) {
            const pixelX = landmark.x * canvas.width;
            const pixelY = landmark.y * canvas.height;
   
            ctx.beginPath();
            ctx.arc(pixelX, pixelY, 2.5, 0, Math.PI * 2, true);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
            ctx.closePath();
         }
      })

      CONNECTORS.forEach(connector => {
         const isBothDrawable = drawableLandmarks.includes(connector.start) && drawableLandmarks.includes(connector.end);
         const isBothExist = landmarks[connector.start] && landmarks[connector.end];

         if (isBothDrawable && isBothExist) {
            const startPixelX = landmarks[connector.start].x * canvas.width;
            const startPixelY = landmarks[connector.start].y * canvas.height;
            const endPixelX = landmarks[connector.end].x * canvas.width;
            const endPixelY = landmarks[connector.end].y * canvas.height;

            ctx.strokeStyle = "#FFFFFF";
            
            ctx.beginPath();
            ctx.moveTo(startPixelX, startPixelY);
            ctx.lineTo(endPixelX, endPixelY);
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
         }
      })
   }
}

export default drawOnFinalImage;