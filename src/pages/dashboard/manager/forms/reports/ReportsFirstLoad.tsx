import { useNavigate, useSearchParams } from "react-router-dom";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import Reports from "./Reports";
import managerGFormData from "../../../../../api/manager/managerGFormData";
import Loading from "../../../../common/Loading";
import GFormNames from "../../../../../api/common/form/GFormNames";
import { useUserDataContext } from "../../../../authentication/UserDataProvider";
import filterReportsArr from "../../../../../utils/filterReportsArr";
import { REPORTS_ARR_Type } from "./analysis/REPORTS_ARR";

function ReportsFirstLoad() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const formname = searchParams.get('formname');

   const { username } = useUserDataContext();

   const { data: orgMembersData, isPending: orgMembersDataPending } = managerGFormData(formname);
   const { data: formNames, isPending: formNamesPending } = GFormNames(username);

   if (orgMembersDataPending || formNamesPending) return <Loading />

   if (typeof orgMembersData === "string") return (
      <Container>
         <h1 className="mb-6 lg:text-lg text-center">{orgMembersData}</h1>
         <PrevBtn type="button" onClick={() => navigate('/manager/dashboard/forms')} />
      </Container>
   )

   if (typeof formNames === "string") return (
      <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formNames}</h1>
         <PrevBtn type="button" onClick={() => navigate('/manager/dashboard/forms')} />
      </Container>
   )

   if (orgMembersData && formNames) {
      const filteredReports = filterReportsArr(formNames, formname, true) as REPORTS_ARR_Type;

      if (filteredReports && filteredReports.length > 0) return (
         <Reports reportsArr={filteredReports} data={orgMembersData} />
      )

      return (
         <Container>
            <h1 className="mb-6 lg:text-lg text-center">تست های مورد نیاز برای تهیه گزارش در این فرم وجود ندارند!</h1>
            <PrevBtn type="button" onClick={() => navigate(-1)} />
         </Container>
      )
   } else {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">در ارتباط با سرور مشکلی رخ داده است!</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }
};

export default ReportsFirstLoad;