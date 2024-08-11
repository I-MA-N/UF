import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../common/Loading";
import PrevBtn from "../../common/PrevBtn";
import Reports from "./Reports";
import GUserData from "../../../api/common/GUserData";
import generateReportsArr from "./analysis/generateReportsArr";
import GFormData from "../../../api/common/form/GFormData";
import Container from "../../common/Container";

function ReportsFirstLoad() {
   const { formname, username } = useParams();
   const { data: formData, isError: formDataErr, isPending: formDataPending } = GFormData(username, formname);
   const { data, isError, isPending } = GUserData(username);
   const navigate = useNavigate();

   if (isPending || formDataPending) return <Loading />;

   if (isError || formDataErr || !data || !formData) {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">در ارتباط با سرور مشکلی رخ داده است!</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if (typeof formData === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formData}</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   const reportsArr = generateReportsArr(formData, data.gender);
   if (!reportsArr.length) {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">اطلاعاتی برای این فرم پیدا نشد!</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   return (
      <Reports userData={data} reportsArr={reportsArr} formData={formData} />
   );
}

export default ReportsFirstLoad;