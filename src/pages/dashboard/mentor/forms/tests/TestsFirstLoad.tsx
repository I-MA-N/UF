import { useNavigate, useParams } from "react-router-dom"
import { useUserDataContext } from "../../../../authentication/UserDataProvider";
import { useMemo } from "react";
import splitArr from "../../../../../utils/splitArr";
import mentorGFormData from "../../../../../api/mentor/mentorGFormData";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import Tests from "./Tests";
import mentorGFormNames from "../../../../../api/mentor/mentorGFormNames";

function TestsFirstLoad() {
   const navigate = useNavigate();
   const params = useParams();

   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);

   const { 
      data: formData, 
      isError: formDataErr, 
      isPending: formDataPending
   } = mentorGFormData({ username: params?.username, formName: params?.formName });
   const { 
      data: formsObj, 
      isError: formsObjErr, 
      isPending: formsObjPending
   } = mentorGFormNames(params?.username);

   const formObj = useMemo(() => {
      return formsObj?.find(form => form.formName === params.formName);
   }, [formsObj])

   if (formDataPending || formsObjPending) return <h1>Loading...</h1>;

   if (formDataErr || formsObjErr || !params?.orgName || !orgNames.includes(params.orgName)) {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">اطلاعات کاربری اشتباه است. دریافت اطلاعات فرم با خطا مواجه شد!</h1>
         <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
      </Container>
   }

   if (formData && formObj) {
      const testsArr = formObj.formTests;
      return <Tests initialFormData={formData} testsArr={testsArr} />
   }
}

export default TestsFirstLoad