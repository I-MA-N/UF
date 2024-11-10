import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import getFormData from "../../utils/getFormData";
import FormDataType from "../../types/FormDataType";
import OrgMemberData from "../../types/OrgMemberData";

function managerGFormData(formname: string | null) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['managerG: form data', formname],
      queryFn: async () => {
         const formData = getFormData({formname})
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/get-company-info/', formData);
         return req.data
      },
      select: (data) => {
         if (data?.error) return data as string;

         const orgMembersData: OrgMemberData[] = data.map((d: any) => {
            const userData = {
               age: d['age'] as number,
               gender: d['gender'] as 'male' | 'female',
            }
            const formData = d[formname!] as FormDataType;

            return {
               userData,
               formData
            }
         })

         return orgMembersData;
      }
   })

   return { data, isError, isPending };
}

export default managerGFormData;