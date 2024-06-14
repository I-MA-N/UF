import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

type Variables = {
   username: string,
   orgName: string
}

export type UserExistRes = {
   status: string,
   username?: string
}

function mentorPUserExist() {
   const { mutateAsync, data, isError } = useMutation({
      mutationKey: ['mentorP: user exist'],
      mutationFn: async (data: Variables) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/simpleuser-exists/', formData)
         
         return req.data as UserExistRes
      }
   })

   return { mutateAsync, data, isError }
}

export default mentorPUserExist;