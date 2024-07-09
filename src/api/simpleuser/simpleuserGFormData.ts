import { useQuery } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

function simpleuserGFormData(formName: string) {
   const { data, isPending, isError } = useQuery({
      queryKey: ['simpluserG: form data', formName],
      queryFn: async () => {
         const formData = getFormData({ formName });
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/simpleuser-form-info/', formData);

         return req.data
      }
   })

   return { data, isPending, isError };
}

export default simpleuserGFormData;