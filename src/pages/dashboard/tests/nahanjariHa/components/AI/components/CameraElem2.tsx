import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs, drawOnVideo } from "../../../../../../../utils/AIFuncs";
import CanvasElemFirstLoad from "./CanvasElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";
import CoordinatesType from "../../../../../../../types/CoordinatesType";
import Loading from "../../../../../../common/Loading";

let landmarksStatus = [false];

function CameraElem2() {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      const { startCamera, stopCamera } = cameraFuncs(videoRef, "environment", setIsSupported, setCoordinates);

      if (!showCanvas && AIData?.modelDownlaoded) {
         startCamera(30);
      }

      return () => {
         stopCamera();
      }
   }, [showCanvas, AIData?.modelDownlaoded])

   useEffect(() => {
      if (AIData?.results && AIData.imageState?.videoFn) {
         landmarksStatus = drawOnVideo(videoRef.current, canvasRef.current, AIData.results, AIData.imageState.videoFn, landmarksStatus);
      }
   }, [AIData?.results])

   const proccessFrames = useCallback(async () => {
      if (videoRef.current) {
         await AIData?.model?.send({ image: videoRef.current });
      }
      if (videoRef.current) requestAnimationFrame(proccessFrames);
   }, [videoRef.current])

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
                           disabled={
                              !AIData?.modelDownlaoded
                                 || (isSupported && (betaClassName !== "bg-secondary" || gammaClassName !== "bg-secondary"))
                                 || landmarksStatus.includes(false) ? true : false
                           }
                           onClick={async () => {
                              await AIData?.model?.send({ image: videoRef.current! });
                              setShowCanvas(true);
                              const width = canvasRef.current?.width!;
                              const height = canvasRef.current?.height!;
                              setAIData(prevValue => ({
                                 ...prevValue,
                                 videoSize: {
                                    width,
                                    height,
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
                              const { stopCamera } = cameraFuncs(videoRef, "environment", setIsSupported, setCoordinates);
                              stopCamera();
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