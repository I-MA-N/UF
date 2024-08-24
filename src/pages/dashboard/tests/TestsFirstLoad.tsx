import { useNavigate, useParams } from "react-router-dom";
import GFormData from "../../../api/common/form/GFormData";
import GFormNames from "../../../api/common/form/GFormNames";
import Container from "../../common/Container";
import PrevBtn from "../../common/PrevBtn";
import Loading from "../../common/Loading";
import Tests from "./Tests";
import AIContextProvider from "./context/AIContextProvider";

function TestsFirstLoad() {
   const { role, formname, username } = useParams();
   const navigate = useNavigate();

   const { data: formData, isPending: formDataPending } = GFormData(username, formname);
   const { data, isPending } = GFormNames(username);

   if (isPending && formDataPending) return <Loading />

   if (typeof data === "string") return <Container>
      <h1 className="mb-6 lg:text-lg text-center">{data}</h1>
      <PrevBtn type="button" onClick={() => navigate(-1)} />
   </Container>

   if (role && username && formname && formData && data) {
      const formObj = data?.find(form => form.formName === formname);
      const testsArr = formObj?.formTests.filter(test => test.testAccess.includes(role));

      if (formObj && testsArr && formData?.access !== 'false') {
         return (
            <AIContextProvider>
               <Tests username={username} formname={formname} testsArr={testsArr} initialFormData={formData} />
            </AIContextProvider>
         )
      } else {
         return <Container>
            <h1 className="mb-6 lg:text-lg text-center">اطلاعاتی برای این فرم پیدا نشد!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard/forms')} />
         </Container>
      }
   }
}

export default TestsFirstLoad