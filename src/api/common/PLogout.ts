import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axiosInstance";
import { deleteAllCookies, getCookie } from "../../utils/cookies";

function PLogout() {
   const queryClient = useQueryClient()

   const { mutate, data, error } = useMutation({
      mutationKey: ['post: logout'],
      mutationFn: async () => {
         const rTkn = getCookie('refresh');
         const req = await API.post('/logout/', { refresh: rTkn })
         return req.data
      },
      onSuccess: () => {
         deleteAllCookies();
         queryClient.resetQueries({ 
            queryKey: ['get: user data']
         })
      }
   })

   return { mutate, data, error }
}

export default PLogout;