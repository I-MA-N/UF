import { useCallback, useRef, useState } from "react";
import CameraModeBtn from "./camera/buttons/CameraModeBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CloseBtn from "./camera/buttons/CloseBtn";
import useAIStore from "../../../../store/AIStore";
import { PoseLandmarker } from "@mediapipe/tasks-vision";
import Webcam from "react-webcam";
import usePhotoStore from "../../../../store/photoStore";
import { addExtraLandmarks, drawOnVideo, executeVideoFn } from "../../../../../../../utils/AIFuncs";

type CameraLandmarksProps = {
   model: PoseLandmarker,
}

let landmarksStatus: boolean[] = [];

function CameraLandmarks({ model }: CameraLandmarksProps) {
   const currentSection = useAIStore(state => state.currentSection);
   const { setImage, setLandmarks, setVideoSize } = usePhotoStore(state => ({ setImage: state.setImage, setLandmarks: state.setLandmarks, setVideoSize: state.setVideoSize }));

   const [isCameraLoaded, setIsCameraLoaded] = useState(false);

   const webcamRef = useRef<Webcam | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const isClickedRef = useRef(false);

   const proccessFrames = useCallback(() => {
      if (!isCameraLoaded) setIsCameraLoaded(true);

      const video = webcamRef.current?.video;
      if (video) {
         let startTimeMs = performance.now();
         const result = model.detectForVideo(video, startTimeMs);
         const landmarks = result.landmarks[0];

         drawOnVideo(canvasRef, video, landmarks);

         executeVideoFn(canvasRef, currentSection, landmarks, landmarksStatus);

         if (isClickedRef.current) {
            const base64 = webcamRef.current?.getScreenshot();
            if (base64) {
               setImage(base64);
               if (landmarks?.length) addExtraLandmarks(landmarks);
               setLandmarks(landmarks);
               setVideoSize(video.clientWidth - 32, video.clientHeight - 16);
            }
         }

         requestAnimationFrame(proccessFrames);
      }
   }, [])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <p className="text-center font-Estedad-Black lg:text-xl">{currentSection?.nameFA}</p>

         <div className="w-full min-h-80 flex items-center justify-center">
            <div className="relative">
               <Webcam
                  ref={webcamRef}
                  videoConstraints={{
                     facingMode: "environment",
                     aspectRatio: 1600 / 1000,
                  }}
                  onLoadedData={proccessFrames}
               />
               <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0"
               />
            </div>

         </div>

         <div className="w-full flex justify-center items-center gap-8">
            <CameraModeBtn isDisabled={true} />

            <CapturePhotoBtn
               isLoading={!isCameraLoaded}
               isDisabled={landmarksStatus.includes(false)}
               isClickedRef={isClickedRef}
            />

            <CloseBtn />
         </div>
      </div>
   );
};

export default CameraLandmarks;