import { useMutation } from "@tanstack/react-query"
import getFormData from "../../../utils/getFormData"
import axios from "axios"

function PForgotPass() {
   const { mutate, data, isPending, error } = useMutation({
      mutationKey: ['post: forgot pass'],
      mutationFn: async (data: any) => { 
         const formData = getFormData(data)
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/forgot-password/', formData)
         return req.data
      }
   })

   return { mutate, data, isPending, error }
}

export default PForgotPass