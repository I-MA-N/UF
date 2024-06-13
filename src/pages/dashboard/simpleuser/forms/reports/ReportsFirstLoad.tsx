import { useNavigate, useSearchParams } from "react-router-dom";
import simpleuserGFormData2 from "../../../../../api/simpleuser/simpleuserGFormData2";
import Reports from "./Reports";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import generateReportsArr from "./generateReportsArr";
import { useUserDataContext } from "../../../../authentication/UserDataProvider";

function ReportsFirstLoad() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const { data: formData, isPending } = simpleuserGFormData2(searchParams.get('formName') || '');
   const userData = useUserDataContext();
   
   if (isPending) return <h1>Loading...</h1>
   
   if (formData) {
      const reportsArr = generateReportsArr(formData, userData.gender);
      if (!reportsArr) {
         return <Container>
            <h1 className="mb-8">شما ابتدا باید جنسیت خود را تعیین کنید!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard')} />
         </Container>
      }

      if (formData.access !== 'false' && Object.keys(formData).length > 0) {
         return <Reports userData={userData} reportsArr={reportsArr} formData={formData} />
      } else {
         return <Container>
            <h1 className="mb-8">اطلاعاتی برای این فرم پیدا نشد!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard/forms')} />
         </Container>
      }
   }
}

export default ReportsFirstLoad