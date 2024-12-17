import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";
import { MentorData } from "../../types/UserData";

type Variables = {
   username: string,
   orgName: string
}

export type MentorExistRes = {
   status: string
} | {
   status: string,
   username: string
} | (
      {
         status: string
      } & Omit<MentorData, "superusers">
   )

function managerPMentorExist() {
   const { mutateAsync, data, isError } = useMutation({
      mutationKey: ['managerP: mentor exist'],
      mutationFn: async (data: Variables) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/mentor-exists/', formData)

         return req.data as MentorExistRes
      }
   })

   return { mutateAsync, data, isError }
}

export default managerPMentorExist;