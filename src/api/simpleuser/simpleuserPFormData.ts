import { useMutation } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData";
import axios from "axios";

type dataType = {
   formName: string,
   data: any
}

function simpleuserPFormData() {
   const { mutate, data, isPending } = useMutation({
      mutationKey: ['simpleuserP: form data'],
      mutationFn: async (data: dataType) => {
         const formData = getFormData({ ...data, setData: true });
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/simpleuser-form-info/', formData);
         return req.data;
      }
   })

   return { mutate, data, isPending };
}

export default simpleuserPFormData