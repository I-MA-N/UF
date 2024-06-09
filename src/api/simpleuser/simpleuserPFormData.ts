import { useMutation } from "@tanstack/react-query"
import API from "../axiosInstance";
import getFormData from "../../utils/getFormData";

type dataType = {
   formName: string,
   setData: boolean,
   data: any
}

function simpleuserPFormData() {
   const { mutate, data } = useMutation({
      mutationKey: ['simpleuserP: form data'],
      mutationFn: async (data: dataType) => {
         const formData = getFormData(data);
         const req = await API.post('/simpleuser-form-info/', formData);
         return req.data;
      }
   })

   return { mutate, data };
}

export default simpleuserPFormData