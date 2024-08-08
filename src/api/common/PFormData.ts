import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";

type Variables = {
   formname: string,
   data: any
}

function PFormData(username: string | undefined) {
   const { mutate, data, isPending } = useMutation({
      mutationKey: ['mentorP: form data', username],
      mutationFn: async (data: Variables) => {
         const formData = getFormData({ ...data, setdata: true });
         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/form-info/${username}`, formData);

         return req.data
      },
   })

   return { mutate, data, isPending }
}

export default PFormData;