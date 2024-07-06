import { useMemo, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import generateReportsArr from "./generateReportsArr";
import ReportsMainInfo from "./ReportsMainInfo";
import ReportsButtons from "./ReportsButtons";
import Container from "../../../common/Container";
import PrevBtn from "../../../common/PrevBtn";

function Reports() {
   // const navigate = useNavigate();

   // useEffect(() => {
   //    const nav = document.getElementsByTagName("nav")[0];
   //    nav.style.position = "sticky";
   //    nav.style.left = "0";
   //    nav.style.transform = "none";

   //    return () => {
   //       nav.style.position = "";
   //       nav.style.left = "";
   //       nav.style.transform = "";
   //    }
   // }, [])

   // const reportsArr = useMemo(() => generateReportsArr(userTestsInfo.data), [userTestsInfo]);
   // if (!reportsArr) {
   //    return <Container>
   //       <h1 className="mb-6 lg:text-lg text-center">برای کاربران این سازمان هنوز گزارشی ثبت نشده است!</h1>
   //       <PrevBtn type="button" onClick={() => navigate('/manager')} />
   //    </Container>
   // }


   // const [page, setPage] = useState(reportsArr[0]);

   return (
      <Container withTitle={false}>
         <div className="flex flex-col gap-2 items-center animate-pulse">
            <h2 className="text-xl">این قسمت در حال توسعه هست...</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
         </div>
         <Link
            to="/manager/dashboard"
            className="btn w-fit h-auto p-3 gap-3 mt-8 mx-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>

         {/* <section className="container my-10 space-y-6">
            <ReportsMainInfo isManager={true} userData={userData} statusBodyInfo={userTestsInfo?.data['وضعیت بدنی']} />
            <ReportsButtons reportsArr={reportsArr} page={page} setPage={setPage} />
         </section>

         <section className="container mx-auto min-w-[600px] max-w-[1200px] pl-4 pb-12">
            {page?.reportJsx}
         </section> */}
      </Container>
   )
}

export default Reports