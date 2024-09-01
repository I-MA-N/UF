import { useMemo } from "react";
import AIContextType from "../../../../../../../../../types/AIContextType";
import CoordinatesType from "../../../../../../../../../types/CoordinatesType";

type CapturePhotoBtnProps = {
   AIData: AIContextType | null,
   isSupported: boolean,
   coordinates: CoordinatesType,
   clickHandler: () => Promise<void>
}

function CapturePhotoBtn({ AIData, isSupported, coordinates, clickHandler }: CapturePhotoBtnProps) {
   const isDisabled = useMemo(() => {
      if (AIData?.modelDownlaoded) {
         if (isSupported && coordinates) {
            const betaBool = coordinates.beta < 87 || coordinates.beta > 93;
            const gammaBool = coordinates.gamma < -3 || coordinates?.gamma > 3;
   
            return betaBool || gammaBool;
         }
   
         return false;
      }
      return true;
   }, [AIData?.modelDownlaoded, isSupported, coordinates])

   return (
      <button
         type="button"
         disabled={isDisabled}
         onClick={clickHandler}
         className={`
            size-[60px] flex items-center justify-center outline outline-2
            ${isDisabled ? "bg-gray outline-gray" : "bg-white outline-white"}
            border-2 border-primary rounded-full transition-colors duration-200
         `}
      >
         {
            !AIData?.modelDownlaoded && <LoadingSvg />
         }
      </button>
   );
};

function LoadingSvg() {
   return (
      <svg className="w-10" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="52" height="52" style={{ shapeRendering: "auto", display: "block" }}>
         <g><circle fill="#083c5a" r="10" cy="50" cx="84">
            <animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.7142857142857142s" repeatCount="indefinite" attributeName="r" />
            <animate begin="0s" values="#083c5a;#083c5a;#083c5a;#083c5a;#083c5a" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="fill" />
         </circle><circle fill="#083c5a" r="10" cy="50" cx="16">
               <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="r" />
               <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="cx" />
            </circle><circle fill="#083c5a" r="10" cy="50" cx="50">
               <animate begin="-0.7142857142857142s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="r" />
               <animate begin="-0.7142857142857142s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="cx" />
            </circle><circle fill="#083c5a" r="10" cy="50" cx="84">
               <animate begin="-1.4285714285714284s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="r" />
               <animate begin="-1.4285714285714284s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="cx" />
            </circle><circle fill="#083c5a" r="10" cy="50" cx="16">
               <animate begin="-2.142857142857143s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="r" />
               <animate begin="-2.142857142857143s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.8571428571428568s" repeatCount="indefinite" attributeName="cx" />
            </circle><g />
         </g>
      </svg>
   )
}

export default CapturePhotoBtn;