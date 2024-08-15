import { useRef, useEffect, useState } from 'react';
import { Holistic, FACEMESH_CONTOURS } from '@mediapipe/holistic';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import Loading from '../../common/Loading';

const calculateAngle = (p1: any, p2: any): number => {
   const deltaY = p2.y - p1.y;
   const deltaX = p2.x - p1.x;

   // Calculate the angle in radians
   const angleRadians = Math.atan2(deltaY, deltaX);

   // Convert radians to degrees
   const angleDegrees = angleRadians * (180 / Math.PI);

   return angleDegrees;
};

function HolisticLandmarks() {
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const holistic = new Holistic({
         locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
      });

      holistic.setOptions({
         modelComplexity: 1,
         smoothLandmarks: true,
         enableSegmentation: true,
         smoothSegmentation: true,
         refineFaceLandmarks: true,
         minDetectionConfidence: 0.5,
         minTrackingConfidence: 0.5
      });

      const camera = new Camera(videoRef.current!, {
         onFrame: async () => {
            await holistic.send({ image: videoRef.current! });
         },
         width: 640,
         height: 480,
      });
      camera.start();

      holistic.onResults((results) => {
         setLoading(false);

         console.log(results.faceLandmarks);

         const canvas = canvasRef.current;
         const ctx = canvas?.getContext('2d');
         if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

            if (results.poseLandmarks) {
               const landmark1 = results.poseLandmarks[11]; // e.g., left shoulder
               const landmark2 = results.poseLandmarks[12]; // e.g., right shoulder

               const angle = calculateAngle(landmark1, landmark2);
               console.log(`Angle: ${angle} degrees`);
            }

            drawConnectors(ctx, results.faceLandmarks, FACEMESH_CONTOURS, { color: '#00FF00', lineWidth: 2 });
            drawLandmarks(ctx, results.poseLandmarks, { color: '#FF0000', lineWidth: 2 });
            drawLandmarks(ctx, results.leftHandLandmarks, { color: '#00FF00', lineWidth: 2 });
            drawLandmarks(ctx, results.rightHandLandmarks, { color: '#00FF00', lineWidth: 2 });
         }
      });
   }, []);

   return (
      <div>
         {loading && <Loading fullHeight={false} />}
         <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />
         <canvas ref={canvasRef} width={640} height={480} />
      </div>
   );
};

export default HolisticLandmarks;
