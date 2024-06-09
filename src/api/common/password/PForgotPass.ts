import { useMutation } from "@tanstack/react-query"
import API from "../../axiosInstance"
import getFormData from "../../../utils/getFormData"

function PForgotPass() {
   const { mutate, data, isPending, error } = useMutation({
      mutationKey: ['post: forgot pass'],
      mutationFn: async (data: any) => { 
         const formData = getFormData(data)
         const req = await API.post('/forgot-password/', formData)
         return req.data
      }
   })

   return { mutate, data, isPending, error }
}

export default PForgotPass