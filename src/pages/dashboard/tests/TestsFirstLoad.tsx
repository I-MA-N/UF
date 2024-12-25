import { useEffect } from "react";
import useAIStore from "./store/AIStore";
import useFormDataStore from "./store/formDataStore";
import useModelStore from "./store/modelStore";
import usePhotoStore from "./store/photoStore";
import { useShallow } from "zustand/react/shallow";
import { useNavigate, useParams } from "react-router-dom";
import GFormData from "../../../api/common/form/GFormData";
import GFormNames from "../../../api/common/form/GFormNames";
import Loading from "../../common/Loading";
import Container from "../../common/Container";
import PrevBtn from "../../common/PrevBtn";
import arrangeTestsArr from "../../../utils/arrangeTestsArr";
import Tests from "./Tests";

function TestsFirstLoad() {
   return (
      <>
         <UnmountFns />
         
         <MainComponent />
      </>
   )
}

function UnmountFns() {
   const setModel = useModelStore(state => state.setModel);
   const resetPhotoStore = usePhotoStore(state => state.reset);
   const { clearZipFiles, resetSections } = useAIStore(useShallow(
      state => ({ clearZipFiles: state.clearZipFiles, resetSections: state.resetSections })
   ));
   const { setMessage, clearFormData } = useFormDataStore(useShallow(
      state => ({ setMessage: state.setMessage, clearFormData: state.clearFormData })
   ));

   useEffect(() => {
      setModel();

      return () => {
         resetPhotoStore();
         clearZipFiles();
         resetSections();
         setMessage(null);
         clearFormData();
      }
   }, [])

   return null;
};

function MainComponent() {
   const { role, formname, username } = useParams();
   const navigate = useNavigate();

   const { data: formData, isPending: formDataPending } = GFormData(username, formname);
   const { data: formNames, isPending: formNamesPending } = GFormNames(username);

   const setFormData = useFormDataStore(state => state.setFormData);

   const json = JSON.stringify(formData);
   useEffect(() => {
      if (formData && typeof formData !== "string") setFormData(JSON.parse(json));
   }, [json])

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
};

export default TestsFirstLoad