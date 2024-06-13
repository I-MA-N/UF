import { useMutation } from "@tanstack/react-query";
import getFormData from "../../../utils/getFormData";
import axios from "axios";

function PResetPass() {
   const { mutate, data, error, isPending } = useMutation({
      mutationKey: ['post: reset pass'],
      mutationFn: async (data: any) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/reset-password/', formData);
         return req.data
      }
   })

   return { mutate, data, error, isPending }
}

export default PResetPass;