type CircleElemProps = {
   landmarkCoordinates: {
      top: number;
      left: number;
   } | null
}

function CircleElem({ landmarkCoordinates }: CircleElemProps) {
   return (
      <>
         <div
            className={
               `
               absolute size-6 bg-secondary blur-[8px] rounded-full transition-all duration-200
               ${landmarkCoordinates ? "opacity-100 z-10" : "opacity-0 z-0"}
               `
            }
            style={{
               left: landmarkCoordinates?.left || "50%",
               top: landmarkCoordinates?.top || 0,
               transform: landmarkCoordinates ? "" : "translateX(-50%)"
            }}
         />
         <div
            className={
               `
               absolute size-2 bg-white rounded-full transition-all duration-200
               ${landmarkCoordinates ? "opacity-100 z-10" : "opacity-0 z-0"}
               `
            }
            style={{
               left: landmarkCoordinates ? (landmarkCoordinates.left) + 8 : "50%",
               top: landmarkCoordinates ? (landmarkCoordinates.top + 8) : 8,
               transform: landmarkCoordinates ? "" : "translateX(-50%)"
            }}
         />
      </>
   );
};

export default CircleElem;