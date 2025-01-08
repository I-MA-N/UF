import { memo, useEffect, useRef } from "react";
import ReactWebcam from "react-webcam";
import useModelStore from "../../../../../../../../../store/modelStore";
import usePhotoStore from "../../../../../../../../../store/photoStore";
import { addExtraLandmarks, drawOnVideo } from "../../../../../../../../../../../../utils/AIFuncs";

type WebcamProps = {
   deviceID: string,
   setLoadingState: () => void,
   setErrorState: () => void,
   isClicked: boolean
}

function Webcam({ deviceID, setLoadingState, setErrorState, isClicked }: WebcamProps) {
   const model = useModelStore(state => state.model!);
   const { setImage, setLandmarks, setVideoSize } = usePhotoStore(state => ({ setImage: state.setImage, setLandmarks: state.setLandmarks, setVideoSize: state.setVideoSize }));

   const webcamRef = useRef<ReactWebcam | null>(null);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      if (isClicked) proccessFrames();
   }, [isClicked])

   const proccessFrames = () => {
      const video = webcamRef.current?.video;

      if (video) {
         let startTimeMs = performance.now();
         const result = model.detectForVideo(video, startTimeMs);
         const landmarks = result.landmarks[0];

         drawOnVideo(canvasRef, video, landmarks);

         if (isClicked) {
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
   }

   return (
      <div className="relative">
         <ReactWebcam
            ref={webcamRef}
            videoConstraints={{
               deviceId: deviceID,
               aspectRatio: 1600 / 1000,
            }}
            onUserMediaError={setErrorState}
            onLoadedData={() => {
               proccessFrames();
               setLoadingState();
            }}
         />
         <canvas
            ref={canvasRef}
            className="absolute top-0 left-0"
         />
      </div>
   );
};

export default memo(Webcam, (prevProps, nextProps) => {
   return prevProps.isClicked === nextProps.isClicked;
});

// export default Webcam;