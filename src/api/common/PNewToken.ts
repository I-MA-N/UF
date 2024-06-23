import axios from "axios";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";

function PNewToken() {
   const { mutateAsync } = useMutation({
      mutationKey: ['get: access token'],
      mutationFn: async () => {
         const rTkn = Cookies.get('refresh');
         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/login/refresh/`, { refresh: rTkn });

         return req.data as { access: string }
      }
   })

   return { mutateAsync }
}

export default PNewToken;