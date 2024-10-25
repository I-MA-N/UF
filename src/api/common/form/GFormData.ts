import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import getFormData from "../../../utils/getFormData";

function GFormData(username: string | undefined, formname: string | undefined) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['get: form data', username, formname],
      queryFn: async () => {
         const formData = getFormData({ formname })
         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/form-info/${username}`, formData);

         return req.data
      },
      refetchOnWindowFocus: false,
   })

   return { data, isError, isPending }
}

export default GFormData;