import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import getFormData from "../../utils/getFormData";

function managerGFormData(formname: string | null) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['managerG: form data', formname],
      queryFn: async () => {
         const formData = getFormData({formname})
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/get-company-info/', formData);
         return req.data
      },
      select: (data) => {
         if (data?.error) return data;

         return data.map((userData: any) => {
            const otherInfo = {
               age: userData['age'],
               gender: userData['gender'],
            }

            return {
               ...userData[formname!],
               ...otherInfo
            }
         })
      }
   })

   return { data, isError, isPending };
}

export default managerGFormData;