import { useRef, useEffect, useState } from 'react';
import { Holistic, FACEMESH_CONTOURS } from '@mediapipe/holistic';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import Loading from '../../../common/Loading';
import PFormData from '../../../../api/common/form/PFormData';
import Container from '../../../common/Container';

const calculateAngle = (p1: any, p2: any): number => {
   const deltaY = p2.y - p1.y;
   const deltaX = p2.x - p1.x;

   // Calculate the angle in radians
   const angleRadians = Math.atan2(deltaY, deltaX);

   // Convert radians to degrees
   const angleDegrees = angleRadians * (180 / Math.PI);

   return angleDegrees;
};

type LandmarksProps = {
   username: string
}

function Landmarks({ username }: LandmarksProps) {
   // const { mutate, data, isPending } = PFormData(username);
   const [showLandmarks, setShowLandmarks] = useState(false);
   const [loading, setLoading] = useState(false);
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   useEffect(() => {
      const holistic = new Holistic({
         locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
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

      if (showLandmarks) {
         setLoading(true);

         holistic.onResults((results) => {
            if (canvasRef.current) { 
               const canvas = canvasRef.current;
               const ctx = canvas.getContext('2d');

               if (ctx && canvas) {
                  setLoading(false);

                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
   
                  if (results.poseLandmarks) {
                     const landmark1 = results.poseLandmarks[7]; // e.g., left shoulder
                     const landmark2 = results.poseLandmarks[11]; // e.g., right shoulder
                     const angle = calculateAngle(landmark1, landmark2);
                     console.log(`Angle: ${angle} degrees`);

                     const landmark3 = results.poseLandmarks[8]; // e.g., left shoulder
                     const landmark4 = results.poseLandmarks[12]; // e.g., right shoulder
                     const angle2 = calculateAngle(landmark3, landmark4);
                     console.log(`Angle2: ${angle2} degrees`);

                     const landmark5 = results.poseLandmarks[11]; // e.g., left shoulder
                     const landmark6 = results.poseLandmarks[12]; // e.g., right shoulder
                     const angle3 = calculateAngle(landmark5, landmark6);
                     console.log(`Angle3: ${angle3} degrees`);
                  }
   
                  drawConnectors(ctx, results.faceLandmarks, FACEMESH_CONTOURS, { color: '#00FF00', lineWidth: 2 });
                  drawLandmarks(ctx, results.poseLandmarks, { color: '#FF0000', lineWidth: 2 });
                  drawLandmarks(ctx, results.leftHandLandmarks, { color: '#00FF00', lineWidth: 2 });
                  drawLandmarks(ctx, results.rightHandLandmarks, { color: '#00FF00', lineWidth: 2 });
               }
            }

         });
      } else {
         holistic.close();
         camera.stop()
      }
   }, [showLandmarks]);

   return (
      <Container>
         {loading && <Loading fullHeight={false} />}
         <button disabled={loading} onClick={() => setShowLandmarks(prevValue => !prevValue)}>
            {showLandmarks ? "Hide" : "Show"} Landmarks
         </button>
         <video ref={videoRef} style={{ display: showLandmarks ? "none" : "block" }} autoPlay playsInline />
         {showLandmarks && <canvas ref={canvasRef} width={640} height={480} />}
         
      </Container>
   );
};

export default Landmarks;
