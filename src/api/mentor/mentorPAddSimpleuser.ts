import { useMutation, useQueryClient } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";
import AddSimpleuserFormFields from "../../types/AddSimpleuserFormFields";

type Variables = AddSimpleuserFormFields & {
   orgName: string
}

type Response = {
   [k: string]: string
}

function mentorPAddSimpleuser() {
   const queryClient = useQueryClient();

   const { mutateAsync, isError } = useMutation({
      mutationKey: ['mentorP: add simpleuser'],
      mutationFn: async (data: Variables) => {
         const formData = getFormData(data)
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/mentor-add-simpleuser/', formData)
         return req.data as Response
      },
      onSuccess: (data, variables) => {
         queryClient.invalidateQueries({
            queryKey: ["mentorG: users data", variables.orgName]
         })
      }
   })

   return { mutateAsync, isError }
}

export default mentorPAddSimpleuser