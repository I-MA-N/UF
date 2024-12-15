import { useMutation, useQueryClient } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData"
import splitArr from "../../utils/splitArr";
import axios from "axios";

type VariablesType = {
   for?: string,
   firstname?: string,
   lastname?: string,
   email?: string,
   phone?: string,
   orgNames?: string,
   gender?: string,
   age?: string,
   info?: string,
}

function PUserData() {
   const queryClient = useQueryClient();

   const { mutate, isError, isSuccess, isPending } = useMutation({
      mutationKey: ['post: user data'],
      mutationFn: async (userData: VariablesType) => {
         const formData = getFormData(userData);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/set-info/', formData);

         return req.data;
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
            queryKey: ["mentorG: users data", splitArr(data.orgNames)[0]]
         })
      }
   })

   return { mutate, isError, isSuccess, isPending }
}

export default PUserData