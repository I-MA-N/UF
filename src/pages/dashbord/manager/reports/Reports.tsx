import { useMemo, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import generateReportsArr from "./generateReportsArr";
import ReportsMainInfo from "./ReportsMainInfo";
import ReportsButtons from "./ReportsButtons";
import Container from "../../../common/Container";
import PrevBtn from "../../../common/PrevBtn";

function Reports() {
   const navigate = useNavigate();

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

   // const reportsArr = useMemo(() => generateReportsArr(userTestsInfo.data), [userTestsInfo]);
   // if (!reportsArr) {
   //    return <Container>
   //       <h1 className="mb-8">برای کاربران این سازمان هنوز گزارشی ثبت نشده است!</h1>
   //       <PrevBtn type="button" onClick={() => navigate('/manager')} />
   //    </Container>
   // }
   // console.log(reportsArr);


   // const [page, setPage] = useState(reportsArr[0]);

   return (
      <>
         <Link
            to="/simpleuser/forms"
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
      </>
   )
}

export default Reports