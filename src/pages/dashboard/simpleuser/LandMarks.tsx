import { useRef, useEffect } from 'react';
import { Holistic, FACEMESH_CONTOURS } from '@mediapipe/holistic';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

function HolisticLandmarks() {
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   useEffect(() => {
      const holistic = new Holistic({
         locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
      });

      holistic.setOptions({
         modelComplexity: 1,
         smoothLandmarks: true,
         enableSegmentation: true,
         minDetectionConfidence: 0.5,
         minTrackingConfidence: 0.5,
      });

      const camera = new Camera(videoRef.current!, {
         onFrame: async () => {
            await holistic.send({ image: videoRef.current! });
         },
         width: 640,
         height: 480,
      });
      camera.start();

      // Loading...
      holistic.onResults((results) => {
         // Set loading to false here
         const canvas = canvasRef.current;
         const ctx = canvas?.getContext('2d');
         if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
            drawConnectors(ctx, results.faceLandmarks, FACEMESH_CONTOURS, { color: '#00FF00', lineWidth: 2 });
            drawLandmarks(ctx, results.poseLandmarks, { color: '#FF0000', lineWidth: 2 });
            drawLandmarks(ctx, results.leftHandLandmarks, { color: '#00FF00', lineWidth: 2 });
            drawLandmarks(ctx, results.rightHandLandmarks, { color: '#00FF00', lineWidth: 2 });
         }
      });
   }, []);

   return (
      <div>
         <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />
         <canvas ref={canvasRef} width={640} height={480} />
      </div>
   );
};

export default HolisticLandmarks;
