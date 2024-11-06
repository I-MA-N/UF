import { useState, useEffect, useMemo, useCallback } from "react"
import ReportsMainInfo from "./components/ReportsMainInfo";
import ReportsButtons from "./components/ReportsButtons";
import ReportsTopBtns from "./components/ReportsTopBtns";
import GenderStrings from "../../../../../types/GenderStrings";
import filterUsersData from "./analysis/filterUsersData";
import NoDataElem from "./components/NoDataElem";
import OrgMemberData from "../../../../../types/OrgMemberData";
import { REPORTS_ARR_Type } from "./analysis/REPORTS_ARR";
import HeaderSection from "../../../common/components/headerSection/HeaderSection";
import FooterSection from "../../../common/components/footerSection/FooterSection";
import GenderButton from "./components/GenderButton/GenderButton";

type ReportsProps = {
   reportsArr: REPORTS_ARR_Type,
   data: OrgMemberData[],
}

function Reports({ reportsArr, data }: ReportsProps) {
   const [gender, setGender] = useState<GenderStrings>("whole");
   const [currentReportName, setCurrentReportName] = useState(reportsArr[0].name);

   const currentReport = useMemo(() => (
      reportsArr.find(report => report.name === currentReportName)
   ), [currentReportName])

   const clickHandler = useCallback((page: string) => {
      setCurrentReportName(page);
   }, [])

   const filteredData = useMemo(() => {
      if (currentReport) return (
         filterUsersData(data, currentReport.testNamesNeeded, gender)
      )

      return null;
   }, [data, currentReport, gender])
   console.log(filteredData);

   if (currentReport && filteredData) return (
      <div className="px-4 sm:container pt-24 lg:pt-32 pb-16 lg:pb-24">
         <HeaderSection>
            <HeaderSection.ExitBtn exitModalText="آیا از خروج مطمئنید؟" />
            <HeaderSection.Title text={currentReportName} />
            <GenderButton gender={gender} setGender={setGender} />
         </HeaderSection>

         <section className="overflow-x-auto overflow-y-hidden text-xs/6 lg:text-base mt-16 lg:mt-20">
            <div className="min-w-[600px]">
               <div className="flex flex-col items-center justify-center mb-6">
                  <span className="text-yellow text-sm lg:text-base border-b pb-1">
                     تعداد افراد ارزیابی شده:{" "}
                     <span className="font-Estedad-Black">{filteredData.length}</span>
                  </span>
               </div>

               {currentReport.generateReport(filteredData).jsx}
            </div>
         </section>

         <FooterSection
            pages={reportsArr.map(report => report.name)}
            currentPage={currentReportName}
            clickHandler={clickHandler}
         />
      </div>
   )

   // const usersData = useMemo(() => {
   //    if (gender === "whole") return filterUsersData(data)
   //    return filterUsersData(data, gender)
   // }, [gender])

   // const [page, setPage] = useState(reportsArr[0]);

   // useEffect(() => {
   //    setPage(prevPage => {
   //       const foundedPage = reportsArr.findIndex(page => page.reportName === prevPage.reportName);
   //       return reportsArr[foundedPage];
   //    })
   // }, [reportsArr])

   // if (!usersData.length) return <NoDataElem />

   // return (
   //    <>
   //       <section className="container my-10">
   //          <ReportsTopBtns setGender={setGender} />
   //          <ReportsMainInfo usersData={usersData} />
   //          <ReportsButtons reportsArr={reportsArr} page={page} setPage={setPage} />
   //       </section>

   //       <section className="container mx-auto min-w-[600px] max-w-[1200px] pl-4 pb-12 text-xs lg:text-base">
   //          {page?.reportJsx}
   //       </section>
   //    </>
   // )
}

export default Reports