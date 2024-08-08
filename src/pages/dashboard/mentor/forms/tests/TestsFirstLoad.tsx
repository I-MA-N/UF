import { useNavigate, useParams } from "react-router-dom"
import { useUserDataContext } from "../../../../authentication/UserDataProvider";
import { useMemo } from "react";
import splitArr from "../../../../../utils/splitArr";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import Tests from "./Tests";
import Loading from "../../../../common/Loading";
import GFormNames from "../../../../../api/common/GFormNames";
import GFormData from "../../../../../api/common/GFormData";

function TestsFirstLoad() {
   const navigate = useNavigate();
   const params = useParams();

   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);

   const {
      data: formsObj,
      isPending: formsObjPending
   } = GFormNames(params?.username);

   const {
      data: formData,
      isPending: formDataPending
   } = GFormData(params?.username, params.formName);

   const formObj = useMemo(() => {
      if (typeof formsObj !== "string") {
         return formsObj?.find(form => form.formName === params.formName);
      }
   }, [formsObj])

   if (formDataPending || formsObjPending) return <Loading />;

   if (typeof formsObj === "string" || typeof formData === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{formsObj || formData}</h1>
         <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
      </Container>
   }

   if (!params?.orgName || !orgNames.includes(params.orgName) || !formObj) {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">اطلاعات کاربری اشتباه است. دریافت اطلاعات فرم با خطا مواجه شد!</h1>
         <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
      </Container>
   }

   return <Tests initialFormData={formData} testsArr={formObj.formTests} />
}

export default TestsFirstLoad