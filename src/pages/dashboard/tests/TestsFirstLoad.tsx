import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import GFormData from "../../../api/common/form/GFormData";
import GFormNames from "../../../api/common/form/GFormNames";
import Container from "../../common/Container";
import PrevBtn from "../../common/PrevBtn";
import Loading from "../../common/Loading";
import Tests from "./Tests";
import usePhotoStore from "./store/photoStore";
import useAIStore from "./store/AIStore";
import useModelStore from "./store/modelStore";
import arrangeTestsArr from "../../../utils/arrangeTestsArr";
import useFormDataStore from "./store/formDataStore";

function TestsFirstLoad() {
   const { role, formname, username } = useParams();
   const navigate = useNavigate();

   const { data: formData, isPending: formDataPending } = GFormData(username, formname);
   const { data: formNames, isPending: formNamesPending } = GFormNames(username);

   const setModel = useModelStore(state => state.setModel);
   const { clearZipFiles, resetSections } = useAIStore(state => ({ clearZipFiles: state.clearZipFiles, resetSections: state.resetSections }));
   const resetPhotoStore = usePhotoStore(state => state.reset);
   const { setFormData, setMessage } = useFormDataStore(state => ({ setFormData: state.setFormData, setMessage: state.setMessage }));

   useEffect(() => {
      setModel();

      return () => {
         clearZipFiles();
         resetSections();
         resetPhotoStore();
         setMessage(null);
      }
   }, [])

   useEffect(() => {
      if (formData && typeof formData !== "string") setFormData(formData);
   }, [formData])

   if (formNamesPending || formDataPending) {
      return <Loading fillScreen />
   }

   if (typeof formNames === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formNames}</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if (typeof formData === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formData}</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if (role && username && formname && formData && formNames) {
      const formObj = formNames?.find(form => form.formName === formname);
      const testsArr = formObj?.formTests.filter(test => test.testAccess.includes(role));

      if (formObj && testsArr) {
         const arrangedArr = arrangeTestsArr(testsArr);

         return (
            <Tests testsArr={arrangedArr} />
         )
      } else {
         return (
            <Container>
               <h1 className="mb-6 lg:text-lg text-center">اطلاعاتی برای این فرم پیدا نشد!</h1>
               <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard/forms')} />
            </Container>
         )
      }
   }
}

export default TestsFirstLoad