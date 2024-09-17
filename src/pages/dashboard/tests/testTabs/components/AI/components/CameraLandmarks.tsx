import { useCallback, useRef, useState } from "react";
import useAIStore from "../../../../store/AIStore";
import { NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import { drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import CloseBtn from "./camera/buttons/CloseBtn";

type CameraLandmarksProps = {
   model: PoseLandmarker,
}

type DegreesType = {
   ears: number,
   shoulder: number,
   pelvis: number,
   knee: number,
}

function degreeTwoPoints(p1: NormalizedLandmark, p2: NormalizedLandmark) {
   // Calculate the difference in coordinates
   const deltaX = p1.x - p2.x;
   const deltaY = p1.y - p2.y;

   // Calculate the angle in radians
   const angleInRadians = Math.atan2(deltaY, deltaX);

   // Convert radians to degrees
   const angleInDegrees = angleInRadians * (180 / Math.PI);

   // Normalize the angle to be between 0 and 360 degrees
   return angleInDegrees;
}

function CameraLandmarks({ model }: CameraLandmarksProps) {
   const currentSection = useAIStore(state => state.currentSection);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   const [degrees, setDegrees] = useState<DegreesType | undefined>(undefined);

   const startRecording = useCallback(() => {
      const video = videoRef.current;
      if (video) {
         // @ts-ignore
         const stream = video.captureStream();
         mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: "video/webm"
         });
         mediaRecorderRef.current.addEventListener("dataavailable", proccessFrames);
         mediaRecorderRef.current.start(1);
      }
   }, [])

   const stopRecording = useCallback(() => {
      if (videoRef.current && mediaRecorderRef.current) mediaRecorderRef.current.stop();
   }, [])

   const proccessFrames = useCallback(() => {
      const video = videoRef.current;
      if (video) {
         let startTimeMs = performance.now();
         const result = model.detectForVideo(video, startTimeMs);
         const landmarks = result.landmarks[0];

         drawOnCanvas(canvasRef, video.clientWidth, video.clientHeight, video, { nature: landmarks, dummy: undefined });
         const ears = degreeTwoPoints(landmarks[7], landmarks[8]);
         const shoulder = degreeTwoPoints(landmarks[11], landmarks[12]);
         const pelvis = degreeTwoPoints(landmarks[23], landmarks[24]);
         const knee = degreeTwoPoints(landmarks[25], landmarks[26]);
         setDegrees({
            ears,
            shoulder,
            pelvis,
            knee
         })
      }
   }, [])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <p className="text-center font-Estedad-Black lg:text-xl">{currentSection?.nameFA}</p>

         <div className="w-full min-h-80 flex items-center justify-center">
            <div className="relative">
               <div className="absolute top-1 right-1 z-10">
                  {
                     degrees && Object.entries(degrees).map(([key, value]) => (
                        <p>{key}: {value.toFixed(2)}</p>
                     ))
                  }
               </div>
               <div className="absolute top-1 left-1 z-10">
                  <p>{videoRef.current?.currentTime.toFixed(1)}s</p>
               </div>

               <video
                  ref={videoRef}
                  src="/video/test-video.mp4"
                  onPlay={() => startRecording()}
                  onPause={() => stopRecording()}
                  style={{
                     height: 600
                  }}
               />
               <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0"
               />
            </div>

         </div>

         <div className="w-full flex justify-center items-center gap-8">
            <button
               type="button"
               onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                     const isPlaying = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
                     if (isPlaying) video.pause();
                     if (!isPlaying) video.play();
                  }
               }}
            >
               play/pause
            </button>
            
            <CloseBtn />
         </div>
      </div>
   );
};

export default CameraLandmarks;