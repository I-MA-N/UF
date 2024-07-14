import { CircularProgress } from "@mui/material";

function Loading() {
   return (
      <div className="flex flex-col gap-6 items-center justify-center min-h-[calc(100vh-150px)]">
         <CircularProgress
            sx={{
               color: "#4CB648"
            }}
            size={50}
         />
         <span className="lg:text-lg">در حال بارگذاری</span>
      </div>
   );
};

export default Loading;