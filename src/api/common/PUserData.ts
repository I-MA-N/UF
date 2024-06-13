import { useMutation, useQueryClient } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData"
import splitArr from "../../utils/splitArr";
import axios from "axios";

function PUserData() {
   const queryClient = useQueryClient();

   const { mutate, isError, isSuccess } = useMutation({
      mutationKey: ['post: user data'],
      mutationFn: async (userData: any) => { 
         const formData = getFormData(userData);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/set-info/', formData)
         return req.data
      },
      onSuccess: (data, variables) => {
         if (data.access === 'false') {
            throw new Error('Dont have access')
         }

         queryClient.invalidateQueries({
            queryKey: ['get: user data', variables.for || '']
         })
         
         // When mentor changing specific user data then list should be updated -> (MembersList)
         queryClient.invalidateQueries({
            queryKey: ['get: users data', splitArr(data.orgNames)[0]]
         })
      }
   })

   return { mutate, isError, isSuccess }
}

export default PUserData