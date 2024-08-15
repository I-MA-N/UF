import { CircularProgress } from "@mui/material";

type LoadingProps = {
   fullHeight?: boolean
}

function Loading({ fullHeight = true }: LoadingProps) {
   return (
      <div className={`flex flex-col gap-6 items-center justify-center ${fullHeight ? "min-h-[calc(100vh-150px)]" : "mt-8"}`}>
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