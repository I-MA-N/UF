import { useMutation } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData"
import API from "../axiosInstance";
import { useUserTestsInfoContext } from "../../pages/dashbord/simpleuser/forms/context/UserTestsInfoProvider";
import { useNavigate } from "react-router-dom";
import { emptyTestsObj } from "../../pages/dashbord/simpleuser/forms/tests/testsData";

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
         const formData = getFormData({formName: data.formName});
         const req = await API.post('/simpleuser-form-info/', formData)
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
            navigate(`/simpleuser/forms/tests`);
         } else if (variables.action === "reports") {
            navigate(`/simpleuser/forms/reports`);
         } else if (variables.action === "correctiveProgram") {
            navigate(`/simpleuser/forms/correctiveprogram`);
         } else if (variables.action === "fitnessProgram") {
            navigate(`/simpleuser/forms/fitnessprogram`);
         } else {
            navigate(`/unknownroute`);
         }
      }
   })

   return { mutate, isError };
}

export default simpleuserGFormData