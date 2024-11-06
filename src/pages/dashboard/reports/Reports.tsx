import { useCallback, useMemo, useState } from "react"
import UserData from "../../../types/UserData";
import FormDataType from "../../../types/FormDataType";
import { REPORTS_ARR_Type } from "./analysis/REPORTS_ARR";
import HeaderSection from "../common/components/headerSection/HeaderSection";
import FooterSection from "../common/components/footerSection/FooterSection";

type ReportsProps = {
   reportsArr: REPORTS_ARR_Type,
   userData: UserData,
   formData: FormDataType
}

function Reports({ reportsArr, userData, formData }: ReportsProps) {
   const [currentReportName, setCurrentReportName] = useState(reportsArr[0].name);

   const currentReport = useMemo(() => (
      reportsArr.find(report => report.name === currentReportName)
   ), [currentReportName])

   const clickHandler = useCallback((page: string) => {
      setCurrentReportName(page);
   }, [])

   if (currentReport) return (
      <div className="px-4 sm:container pt-24 lg:pt-32 pb-16 lg:pb-24">
         <HeaderSection>
            <HeaderSection.ExitBtn exitModalText="آیا از خروج مطمئنید؟" />
            <HeaderSection.Title text={currentReportName} />
            <HeaderSection.ActionBtn hidden />
         </HeaderSection>

         <section className="overflow-x-auto overflow-y-hidden text-xs/6 lg:text-base mt-16 lg:mt-20">
            <div className="min-w-[600px]">
               <div className="flex justify-center mb-6">
                  <span className="text-yellow text-sm lg:text-base border-b pb-1">
                     <span className="font-Estedad-Black">نکته: </span>
                     مکان هایی که با ' - ' پر شده اند، داده مورد نیاز آنها وجود ندارد.
                  </span>
               </div>

               {currentReport.generateReport(formData, userData.gender === 'male' ? 2 : 1).jsx}
            </div>
         </section>

         <FooterSection
            pages={reportsArr.map(report => report.name)}
            currentPage={currentReportName}
            clickHandler={clickHandler}
         />
      </div>
   )
}

export default Reports