import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";

function PNewToken() {
   const queryClient = useQueryClient();

   const { mutateAsync } = useMutation({
      mutationKey: ['get: access token'],
      mutationFn: async () => {
         const rTkn = Cookies.get('ay4cz0p');

         const req = await fetch(`${import.meta.env.VITE_ENDPOINT}/login/refresh/`, {
            method: "POST",
            body: getFormData({ refresh: rTkn })
         })

         const data = await req.json();

         return data;
      },
      onSettled: (data) => {
         if (!data?.access) {
            Cookies.remove('ay4cz0p');
            queryClient.clear();
         }
      }
   })

   return { mutateAsync }
}

export default PNewToken;