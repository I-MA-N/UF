import { useMutation } from "@tanstack/react-query";
import API from "../axiosInstance";
import getFormData from "../../utils/getFormData";

function mentorPUserExist() {
   const { mutate, data, isError } = useMutation({
      mutationKey: ['mentorP: user exist'],
      mutationFn: async (data: { username: string, orgName: string }) => {
         const formData = getFormData(data);
         const req = await API.post('/simpleuser-exists/', formData)
         
         return req.data
      }
   })

   return { mutate, data, isError }
}

export default mentorPUserExist;