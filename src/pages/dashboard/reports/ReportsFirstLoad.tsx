import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../common/Loading";
import PrevBtn from "../../common/PrevBtn";
import Reports from "./Reports";
import GUserData from "../../../api/common/GUserData";
import GFormData from "../../../api/common/form/GFormData";
import Container from "../../common/Container";
import GFormNames from "../../../api/common/form/GFormNames";
import filterReportsArr from "../../../utils/filterReportsArr";
import { REPORTS_ARR_Type } from "./analysis/REPORTS_ARR";

function ReportsFirstLoad() {
   const { formname, username } = useParams();
   const { data: formData, isPending: formDataPending } = GFormData(username, formname);
   const { data: formNames, isPending: formNamesPending } = GFormNames(username);
   const { data: userData, isPending: userDataPending } = GUserData(username);
   const navigate = useNavigate();

   if (userDataPending || formDataPending || formNamesPending) return (
      <Loading fillScreen />
   )

   if (typeof formData === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formData}</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if (typeof formNames === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formNames}</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if (formData && formNames && userData) {
      const filteredReports = filterReportsArr(formNames, formname) as REPORTS_ARR_Type;

      if (filteredReports && filteredReports.length > 0) return (
         <Reports reportsArr={filteredReports} userData={userData} formData={formData} />
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
}

export default ReportsFirstLoad;