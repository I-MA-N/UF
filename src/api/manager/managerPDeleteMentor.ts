import { useMutation } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData"
import axios from "axios";

function managerPDeleteMentor() {
   const { mutate, data } = useMutation({
      mutationKey: ['managerP: delete mentor'],
      mutationFn: async (username: string) => {
         const formData = getFormData({username});
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/manager-delete-mentor/', formData);
         return req?.data
      }
   })

   return { mutate, data }
}

export default managerPDeleteMentor