import { useMutation } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData"
import { useUserTestsInfoContext } from "../../pages/dashboard/simpleuser/forms/context/UserTestsInfoProvider";
import { useNavigate } from "react-router-dom";
import { emptyTestsObj } from "../../pages/dashboard/simpleuser/forms/tests/testsData";
import axios from "axios";

type formNameActionType = {
   formName: string,
   action: string
}

function simpleuserGFormData() {
   const { setUserTestsInfo } = useUserTestsInfoContext();
   const navigate = useNavigate();

   const { mutate, isError } = useMutation({
      mutationKey: ['simpluserG: form data'],
      mutationFn: async (data: formNameActionType) => {
         const formData = getFormData({ formName: data.formName });
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/simpleuser-form-info/', formData)
         return req.data;
      },
      onSuccess: (data: any, variables) => {
         if (data.access === 'false') {
            setUserTestsInfo(prevValue => {
               return {
                  ...prevValue,
                  data: emptyTestsObj
               }
            })
            throw new Error('Access false or no data available!');
         }

         setUserTestsInfo(() => {
            return {
               formName: variables.formName,
               data: data
            }
         })
         if (variables.action === "tests") {
            navigate(`/simpleuser/dashboard/forms/tests`);
         } else if (variables.action === "reports") {
            navigate(`/simpleuser/dashboard/forms/reports`);
         } else if (variables.action === "correctiveProgram") {
            navigate(`/simpleuser/dashboard/forms/correctiveprogram`);
         } else if (variables.action === "fitnessProgram") {
            navigate(`/simpleuser/dashboard/forms/fitnessprogram`);
         } else {
            navigate(`/unknownroute`);
         }
      }
   })

   return { mutate, isError };
}

export default simpleuserGFormData