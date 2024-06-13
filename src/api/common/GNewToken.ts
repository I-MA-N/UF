import axios from "axios";
import { getCookie } from "../../utils/cookies";
import { useQuery } from "@tanstack/react-query";

function GNewToken() {
   const { data, isError } = useQuery({
      queryKey: ['get: access token'],
      queryFn: async () => {
         const rTkn = getCookie('refresh');
         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/login/refresh/`, { refresh: rTkn });

         return req.data as { access: string }
      }
   })

   return { data, isError }
}

export default GNewToken;