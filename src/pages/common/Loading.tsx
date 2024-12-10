import { CircularProgress } from "@mui/material";

type LoadingProps = {
   fillScreen?: boolean,
   withoutText?: boolean
}

function Loading({ fillScreen, withoutText }: LoadingProps) {
   return (
      <div className={`flex flex-col gap-6 items-center justify-center ${fillScreen ? "min-h-screen" : ""}`}>
         <CircularProgress
            sx={{
               color: "#4CB648"
            }}
            size={50}
         />
         
         {
            !withoutText &&
            <span className="lg:text-lg">در حال بارگذاری</span>
         }
      </div>
   );
};

export default Loading;