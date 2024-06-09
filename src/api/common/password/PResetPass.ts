import { useMutation } from "@tanstack/react-query";
import API from "../../axiosInstance";
import getFormData from "../../../utils/getFormData";

function PResetPass() {
   const { mutate, data, error, isPending } = useMutation({
      mutationKey: ['post: reset pass'],
      mutationFn: async (data: any) => {
         const formData = getFormData(data);
         const req = await API.post('/reset-password/', formData);
         return req.data
      }
   })

   return { mutate, data, error, isPending }
}

export default PResetPass;