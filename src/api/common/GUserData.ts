import { useQuery } from "@tanstack/react-query"
import API from "../axiosInstance"
import getFormData from "../../utils/getFormData"

function GUserData(username?: string) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['get: user data', username || ''],
      queryFn: async () => {
         const formData = getFormData({for: username});
         const req = await API.post('/get-info/', username && formData);

         return req?.data
      },

   })

   return { data, isError, isPending }
}

export default GUserData