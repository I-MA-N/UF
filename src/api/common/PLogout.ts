import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PLogout() {
   const queryClient = useQueryClient();
   const navigate = useNavigate();

   const { mutate, data, error } = useMutation({
      mutationKey: ['post: logout'],
      mutationFn: async () => {
         const rTkn = Cookies.get('refresh');
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/logout/', { refresh: rTkn })
         return req.data
      },
      onSettled: () => {
         Cookies.remove('refresh');
         queryClient.clear();
         navigate('/')
      }
   })

   return { mutate, data, error }
}

export default PLogout;