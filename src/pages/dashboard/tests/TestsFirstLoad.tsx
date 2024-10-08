import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import GFormData from "../../../api/common/form/GFormData";
import GFormNames from "../../../api/common/form/GFormNames";
import Container from "../../common/Container";
import PrevBtn from "../../common/PrevBtn";
import Loading from "../../common/Loading";
import Tests from "./Tests";
import usePhotoStore from "./store/photoStore";
import useFormStore from "./store/formStore";
import useAIStore from "./store/AIStore";
import useModelStore from "./store/modelStore";
import arrangeTestsArr from "../../../utils/arrangeTestsArr";

function TestsFirstLoad() {
   const { role, formname, username } = useParams();
   const navigate = useNavigate();

   const { data: formData, isPending: formDataPending } = GFormData(username, formname);
   const { data, isPending } = GFormNames(username);

   const setModel = useModelStore(state => state.setModel);
   const { resetData, resetSections } = useAIStore(state => ({ resetData: state.resetData, resetSections: state.resetSections }));
   const resetPhotoStore = usePhotoStore(state => state.reset);
   const resetFormStore = useFormStore(state => state.reset);
   useEffect(() => {
      setModel();

      return () => {
         resetData();
         resetSections();
         resetPhotoStore();
         resetFormStore();
      }
   }, [])

   if (isPending && formDataPending) return <Loading />

   if (typeof data === "string") return <Container>
      <h1 className="mb-6 lg:text-lg text-center">{data}</h1>
      <PrevBtn type="button" onClick={() => navigate(-1)} />
   </Container>

   if (role && username && formname && formData && data) {
      const formObj = data?.find(form => form.formName === formname);
      const testsArr = formObj?.formTests.filter(test => test.testAccess.includes(role));

      if (formObj && testsArr && formData?.access !== 'false') {
         const arrangedArr = arrangeTestsArr(testsArr);

         return (
            <Tests username={username} formname={formname} testsArr={arrangedArr} initialFormData={formData} />
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