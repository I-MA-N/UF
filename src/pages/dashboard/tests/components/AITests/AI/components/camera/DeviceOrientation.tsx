import { useCallback, useEffect } from "react";
import CoordinatesType from "../../../../../../../../types/CoordinatesType";
import AimContainer from "./AimContainer";
import BetaLine from "./BetaLine";

type DeviceOrientationProps = {
   isSupported: boolean,
   setIsSupported: React.Dispatch<React.SetStateAction<boolean>>
   coordinates: CoordinatesType,
   setCoordinates: React.Dispatch<React.SetStateAction<CoordinatesType>>
}

function DeviceOrientation({ isSupported, setIsSupported, coordinates, setCoordinates }: DeviceOrientationProps) {
   useEffect(() => {
      if (window.DeviceOrientationEvent) {
         window.addEventListener("deviceorientation", handleDeviceOrientaion);
      } else {
         setIsSupported(false);
      }

      return () => {
         window.removeEventListener("deviceorientation", handleDeviceOrientaion);
      }
   }, [])

   const handleDeviceOrientaion = useCallback((e: DeviceOrientationEvent) => {
      const alpha = e.alpha;
      const gamma = e.gamma;
      const beta = e.beta;
      if (typeof alpha === "number" && typeof gamma === "number" && typeof beta === "number") {
         setCoordinates({
            alpha,
            beta,
            gamma
         })
      } else {
         setIsSupported(false);
      }
   }, [])

   return (
      <>
         <AimContainer isSupported={isSupported} gamma={coordinates?.gamma} />
         <BetaLine isSupported={isSupported} beta={coordinates?.beta} />
      </>
   );
};

export default DeviceOrientation;