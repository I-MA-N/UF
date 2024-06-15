import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

type Variables = {
   formName: string,
   data: any
}

function mentorPFormData(username: string) {
   const { mutate, data } = useMutation({
      mutationKey: ['mentorP: form data', username],
      mutationFn: async (data: Variables) => {
         const formData = getFormData({ ...data, setData: true });
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + `/mentor-form-info/${username}`, formData);

         return req.data
      },
   })

   return { mutate, data }
}

export default mentorPFormData