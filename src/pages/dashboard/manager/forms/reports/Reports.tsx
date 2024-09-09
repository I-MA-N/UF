import { useState, useEffect, useMemo } from "react"
import ReportsMainInfo from "./components/ReportsMainInfo";
import ReportsButtons from "./components/ReportsButtons";
import generateReportsArr from "./analysis/generateReportsArr";
import ReportsTopBtns from "./components/ReportsTopBtns";
import GenderStrings from "../../../../../types/GenderStrings";
import filterUsersData from "./analysis/filterUsersData";
import NoDataElem from "./components/NoDataElem";

type ReportsProps = {
   data: any,
}

function Reports({ data }: ReportsProps) {
   const [gender, setGender] = useState<GenderStrings>("whole");

   const usersData = useMemo(() => {
      if (gender === "whole") return filterUsersData(data)
      return filterUsersData(data, gender)
   }, [gender])

   const reportsArr = useMemo(() => generateReportsArr(usersData, gender), [usersData]);
   const [page, setPage] = useState(reportsArr[0]);

   useEffect(() => {
      setPage(prevPage => {
         const foundedPage = reportsArr.findIndex(page => page.reportName === prevPage.reportName);
         return reportsArr[foundedPage];
      })
   }, [reportsArr])

   if (!usersData.length) return <NoDataElem />

   return (
      <>
         <section className="container my-10">
            <ReportsTopBtns setGender={setGender} />
            <ReportsMainInfo usersData={usersData} />
            <ReportsButtons reportsArr={reportsArr} page={page} setPage={setPage} />
         </section>

         <section className="container mx-auto min-w-[600px] max-w-[1200px] pl-4 pb-12 text-xs lg:text-base">
            {page?.reportJsx}
         </section>
      </>
   )
}

export default Reports