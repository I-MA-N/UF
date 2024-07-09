import { useNavigate, useSearchParams } from "react-router-dom";
import simpleuserGFormData from "../../../../../api/simpleuser/simpleuserGFormData";
import simpleuserGFormNames from "../../../../../api/simpleuser/simpleuserGFormNames";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import Tests from "./Tests";

function TestsFirstLoad() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const { data: formData, isPending: formDataPending } = simpleuserGFormData(searchParams.get('formName') || '');
   const { data, isPending } = simpleuserGFormNames();
   const formObj = data?.find(form => form.formName === searchParams.get('formName'));

   if (isPending && formDataPending) return <h1>Loading...</h1>

   if (formData && data) {
      const testsArr = formObj?.formTests.filter(test => test.testAccess.includes('simpleuser'))
      if (formObj && testsArr && formData.access !== 'false') {
         return <Tests testsArr={testsArr} initialFormData={formData} />
      } else {
         return <Container>
            <h1 className="mb-6 lg:text-lg text-center">اطلاعاتی برای این فرم پیدا نشد!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard/forms')} />
         </Container>
      }
   }
}

export default TestsFirstLoad