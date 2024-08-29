import { useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs, drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import CanvasElemFirstLoad from "./CanvasElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";
import CoordinatesType from "../../../../../../../types/CoordinatesType";
import Loading from "../../../../../../common/Loading";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { POSE_CONNECTIONS } from "@mediapipe/holistic";

function CameraElem2() {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);
   let animationFrameId: number | undefined = undefined;

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");

   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);
   const gammaClassName = useMemo(() => {
      if (typeof coordinates?.gamma === "number" && isSupported) {
         const gammaBool = coordinates.gamma >= -3 && coordinates.gamma <= 3;

         return gammaBool ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [coordinates, isSupported])
   const betaClassName = useMemo(() => {
      if (typeof coordinates?.beta === "number" && isSupported) {
         const betaBool = coordinates.beta >= 87 && coordinates.beta <= 93;
         return betaBool ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [coordinates, isSupported])

   useEffect(() => {
      const { startCamera, stopCamera } = cameraFuncs(videoRef, facingMode, setIsSupported, setCoordinates);

      if (!showCanvas && AIData?.modelDownlaoded) {
         startCamera(10);
      }

      return () => {
         stopCamera(animationFrameId);
      }
   }, [facingMode, showCanvas, AIData?.modelDownlaoded])

   useEffect(() => {
      if (AIData?.results) {
         const video = videoRef.current;
         const canvas = canvasRef.current;
         const ctx = canvas?.getContext("2d");

         if (video && canvas && ctx) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(AIData.results.image, 0, 0, video.videoWidth, video.videoHeight);
            drawConnectors(ctx, AIData.results.poseLandmarks, POSE_CONNECTIONS, { color: '#083C5A', lineWidth: 1 });
            drawLandmarks(ctx, AIData.results.poseLandmarks, { color: '#FF0000', radius: 2 });
         }
      }
   }, [AIData?.results])

   async function proccessFrames() {
      if (videoRef.current) {
         await AIData?.model?.send({ image: videoRef.current });
      }
      animationFrameId = requestAnimationFrame(proccessFrames);
   }

   return (
      <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center z-30 transition-all duration-300 bg-primary/60">
         {
            showCanvas ?
               <CanvasElemFirstLoad setShowCanvas={setShowCanvas} />
               :
               AIData?.modelDownlaoded ?
                  <div className="relative">
                     <video
                        ref={videoRef}
                        autoPlay
                        hidden
                        onPlay={proccessFrames}
                     // onTimeUpdate={async (e) => {
                     //    const video = videoRef.current;
                     //    const canvas = canvasRef.current;
                     //    const ctx = canvas?.getContext("2d");
                     //    console.log(video?.videoWidth, video?.videoHeight);

                     //    if (video && canvas && ctx) {
                     //       canvas.width = video.videoWidth;
                     //       canvas.height = video.videoHeight;
                     //       ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                     //       // await AIData?.model?.send({ image: canvas });
                     //    }
                     // }}
                     />
                     <canvas
                        ref={canvasRef}
                     />

                     <span className="absolute top-2 left-1/2 -translate-x-1/2">{AIData?.imageState?.nameFA}</span>

                     <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full outline-dotted outline-4 outline-primary">
                        <div
                           className={`w-full h-1 absolute ${gammaClassName}`}
                        />
                        <div
                           className={`w-1 h-full absolute ${gammaClassName}`}
                        />
                        <div
                           className="w-1 h-full absolute bg-yellow"
                           style={{
                              rotate: coordinates?.gamma ? `${coordinates.gamma}deg` : '0deg'
                           }}
                        />
                        <div
                           className="w-1 h-full absolute bg-yellow"
                           style={{
                              rotate: coordinates?.gamma ? `${coordinates.gamma + 90}deg` : '0deg'
                           }}
                        />
                     </div>

                     <div
                        className="absolute bottom-0 left-0"
                        style={{ perspective: 100 }}
                     >
                        <div
                           className={`w-2 h-12 ${betaClassName}`}
                           style={{ transform: coordinates?.beta ? `rotateX(${90 - coordinates?.beta}deg) rotateZ(15deg)` : "" }}
                        />
                     </div>

                     <div className="w-full flex justify-center gap-4 absolute bottom-1 left-1/2 -translate-x-1/2">
                        <button
                           type="button"
                           onClick={() => setFacingMode(
                              prevValue => prevValue === "environment" ? "user" : "environment"
                           )}>
                           change camera mode
                        </button>

                        <button
                           type="button"
                           disabled={!AIData?.modelDownlaoded || (isSupported && (betaClassName !== "bg-secondary" || gammaClassName !== "bg-secondary"))}
                           onClick={async () => {
                              await AIData?.model?.send({ image: videoRef.current! });
                              setShowCanvas(true);
                              setAIData(prevValue => ({
                                 ...prevValue,
                                 videoSize: {
                                    width: videoRef.current?.clientWidth!,
                                    height: videoRef.current?.clientHeight!,
                                 }
                              }))
                           }}>
                           {
                              AIData?.modelDownlaoded
                                 ? "capture photo"
                                 : "loading..."
                           }
                        </button>

                        <button
                           type="button"
                           onClick={() => {
                              const { stopCamera } = cameraFuncs(videoRef, facingMode, setIsSupported, setCoordinates);
                              stopCamera(animationFrameId);
                              setAIData(prevValue => ({
                                 ...prevValue,
                                 imageState: undefined
                              }))
                           }}
                        >
                           برگشت
                        </button>
                     </div>
                  </div>
                  : <Loading />
         }
      </div>
   );
};

export default CameraElem2;