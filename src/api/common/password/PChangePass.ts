import { useMutation } from "@tanstack/react-query";
import getFormData from "../../../utils/getFormData";
import axios from "axios";

function PChangePass() {
   const { mutate, data, isPending } = useMutation({
      mutationKey: ['post: change pass'],
      mutationFn: async (data: any) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/change-password/', formData);
         return req.data
      },
   })

   return { mutate, data, isPending }
}

export default PChangePass;