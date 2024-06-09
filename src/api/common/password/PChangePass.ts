import { useMutation } from "@tanstack/react-query";
import API from "../../axiosInstance";
import getFormData from "../../../utils/getFormData";

function PChangePass() {
   const { mutate, data } = useMutation({
      mutationKey: ['post: change pass'],
      mutationFn: async (data: any) => {
         const formData = getFormData(data);
         const req = await API.post('/change-password/', formData);
         return req.data
      },
   })

   return { mutate, data }
}

export default PChangePass;