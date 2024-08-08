import Btn from "../../../common/Btn";

type ReportsButtonsPropsType = {
   reportsArr: {
      reportName: string;
      reportJsx: JSX.Element;
   }[],
   page: {
      reportName: string;
      reportJsx: JSX.Element;
   },
   setPage: React.Dispatch<React.SetStateAction<{
      reportName: string;
      reportJsx: JSX.Element;
   }>>
}

function ReportsButtons({ reportsArr, page, setPage }: ReportsButtonsPropsType) {
   return (
      <div className="flex items-center gap-4 w-full px-4 overflow-x-auto relative">
         {
            reportsArr.map(report => (
               <Btn
                  key={report.reportName}
                  text={report.reportName}
                  type="button"
                  className={`w-auto px-6 py-3 flex-shrink-0 text-white
                     ${page.reportName === report.reportName ? 'bg-secondary' : 'bg-transparent border border-white'}`
                  }
                  onClick={() => setPage(report)}
               />
            ))
         }
      </div>
   )
}

export default ReportsButtons