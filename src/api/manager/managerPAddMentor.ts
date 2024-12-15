import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

type newMentorType = {
   username: string,
   email: string,
   password: string,
}

function managerPAddMentor() {
   const { mutate, isPending, isError, isSuccess } = useMutation({
      mutationKey: ['managerP: add mentor'],
      mutationFn: async (mentorData: newMentorType) => {
         const formData = getFormData(mentorData);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/manager-add-mentor/', formData);

         return req.data;
      },
      onSuccess: (data) => {
         if (data?.error) {
            throw new Error();
         }
      }
   })

   return { mutate, isPending, isError, isSuccess }
}

export default managerPAddMentor;