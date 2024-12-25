import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import CONNECTORS from "../../../../../../../../../../utils/connectors";

const drawOnCanvas = (
   canvas: HTMLCanvasElement,
   palette: string[],
   landmarks: NormalizedLandmark[],
   drawableLandmarks: number[],
   needableLandmarks: number[],
) => {
   const ctx = canvas.getContext("2d");

   if (ctx) {
      ctx.save();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      landmarks.forEach((landmark, index) => {
         if (drawableLandmarks.includes(index)) {
            const isNeedableLandmark = needableLandmarks.includes(index);
            const pixelX = landmark.x * canvas.width;
            const pixelY = landmark.y * canvas.height;
   
            const radius = isNeedableLandmark ? 2.5 : 1.5;
            const color = isNeedableLandmark ? palette[0] : palette[1];
            ctx.beginPath();
            ctx.arc(pixelX, pixelY, radius, 0, Math.PI * 2, true);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();
   
            const fontSize = isNeedableLandmark ? "10px" : "px";
            ctx.font = `${fontSize} 'Estedad-Regular'`;
            ctx.fillStyle = palette[2];
            ctx.fillText(index.toString(), pixelX, pixelY);
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

            ctx.strokeStyle = palette[1];
            if (connector.start === 38 && connector.end === 39) {
               ctx.strokeStyle = palette[0];
            }
         
            ctx.beginPath();
            ctx.moveTo(startPixelX, startPixelY);
            ctx.lineTo(endPixelX, endPixelY);
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
         }
      })

      ctx.restore();
   }
}

export default drawOnCanvas;