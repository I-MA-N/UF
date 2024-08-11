import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import ReportsMainInfo from "./components/ReportsMainInfo";
import ReportsButtons from "./components/ReportsButtons";
import UserData from "../../../types/UserData";

type ReportObj = {
   reportName: string;
   reportJsx: JSX.Element;
}

type ReportsProps = {
   userData: UserData,
   reportsArr: ReportObj[],
   formData: any
}

function Reports({ userData, reportsArr, formData }: ReportsProps) {
   useEffect(() => {
      const nav = document.getElementsByTagName("nav")[0];
      nav.style.position = "sticky";
      nav.style.left = "0";
      nav.style.transform = "none";

      return () => {
         nav.style.position = "";
         nav.style.left = "";
         nav.style.transform = "";
      }
   }, [])

   const navigate = useNavigate()

   const [page, setPage] = useState(reportsArr[0]);

   return (
      <>
         <button
            className="btn w-fit h-auto p-3 gap-3 mt-8 mx-auto"
            onClick={() => navigate(-1)}
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>

         <section className="container my-10 space-y-6">
            <ReportsMainInfo userData={userData} statusBodyInfo={formData['وضعیت بدنی']} />
            <ReportsButtons reportsArr={reportsArr} page={page} setPage={setPage} />
         </section>

         <section className="container mx-auto min-w-[600px] text-xs/6 lg:text-base pl-4 pb-12">
            {page?.reportJsx}
         </section>
      </>
   )
}

export default Reports