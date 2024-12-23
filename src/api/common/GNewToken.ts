import axios from "axios";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

function GNewToken() {
   const { data, isError } = useQuery({
      queryKey: ['get: access token'],
      queryFn: async () => {
         const rTkn = Cookies.get('ay4cz0p');
         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/login/refresh/`, { refresh: rTkn });

         return req.data as { access: string }
      }
   })

   return { data, isError }
}

export default GNewToken;