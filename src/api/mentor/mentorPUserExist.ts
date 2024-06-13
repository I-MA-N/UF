import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

function mentorPUserExist() {
   const { mutate, data, isError } = useMutation({
      mutationKey: ['mentorP: user exist'],
      mutationFn: async (data: { username: string, orgName: string }) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/simpleuser-exists/', formData)
         
         return req.data
      }
   })

   return { mutate, data, isError }
}

export default mentorPUserExist;