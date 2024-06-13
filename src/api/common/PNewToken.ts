import axios from "axios";
import { getCookie } from "../../utils/cookies";
import { useMutation } from "@tanstack/react-query";

function PNewToken() {
   const { mutateAsync } = useMutation({
      mutationKey: ['get: access token'],
      mutationFn: async () => {
         const rTkn = getCookie('refresh');
         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/login/refresh/`, { refresh: rTkn });

         return req.data as { access: string }
      }
   })

   return { mutateAsync }
}

export default PNewToken;