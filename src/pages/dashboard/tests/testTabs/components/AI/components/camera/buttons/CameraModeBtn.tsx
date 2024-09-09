type CameraModeBtnProps = {
   isDisabled: boolean,
   setFacingMode?: React.Dispatch<React.SetStateAction<"environment" | "user">>,
}

function CameraModeBtn({ isDisabled, setFacingMode }: CameraModeBtnProps) {
   return (
      <button
         type="button"
         disabled={isDisabled}
         onClick={(e) => {
            if (setFacingMode) {
               setFacingMode(
                  prevValue => prevValue === "environment" ? "user" : "environment"
               );
               const transfrom = e.currentTarget.style.transform;
               let lastDeg = 0;
   
               if (transfrom) {
                  const secondPart = transfrom.split("(")[1];
                  lastDeg = Number(secondPart.split("deg")[0]);
               }
   
               e.currentTarget.style.transform = `rotate(${lastDeg + 90}deg)`;
            }
         }}
         className={`${isDisabled ? "bg-gray text-primary border-gray" : "bg-primary text-white border-white"} size-11 border-2 rounded-full flex items-center justify-center transition-transform duration-200`}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none" className="w-6">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5442 7.92625C5.85131 8.11998 6.25725 8.01716 6.45099 7.71005C7.75872 5.63703 9.08856 4.63143 10.3669 4.31334C11.6292 3.99923 13.1828 4.27146 15.1346 5.50272C17.0864 6.73398 18.0012 8.01894 18.2613 9.29346C18.3826 9.88781 18.3771 10.5548 18.2081 11.3039C18.1313 11.6443 18.258 12.0054 18.5531 12.1916C18.9658 12.4519 19.5168 12.2648 19.6342 11.7911C20.3804 8.77958 19.1473 6.26056 15.9349 4.23406C11.6121 1.50706 8.0279 2.39895 5.18233 6.90973C4.98342 7.22504 5.08709 7.63789 5.4024 7.83679L5.5442 7.92625ZM5.12509 10.6965C5.20187 10.3562 5.07515 9.99505 4.78006 9.8089C4.36737 9.54856 3.81632 9.73572 3.69896 10.2093C2.95274 13.2209 4.18583 15.7399 7.39823 17.7664C11.7211 20.4934 15.3053 19.6015 18.1508 15.0907C18.3497 14.7754 18.2461 14.3626 17.9308 14.1637L17.789 14.0742C17.4819 13.8805 17.0759 13.9833 16.8822 14.2904C15.5744 16.3634 14.2446 17.369 12.9663 17.6871C11.704 18.0012 10.1503 17.729 8.19854 16.4978C6.24676 15.2665 5.33196 13.9815 5.07183 12.707C4.95052 12.1127 4.95608 11.4457 5.12509 10.6965Z" fill="currentColor" />
            <path d="M21.4995 8.53261L19.3654 11.9157L15.9823 9.78153" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.83346 13.4679L3.96764 10.0848L7.35073 12.219" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   );
};

export default CameraModeBtn;