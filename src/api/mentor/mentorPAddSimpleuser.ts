import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";
import AddSimpleuserFormFields from "../../types/AddSimpleuserFormFields";

type VariablesType = Pick<AddSimpleuserFormFields, "username" | "password" | "orgName" | "email">;

type Response = {
   [k: string]: string
}

function mentorPAddSimpleuser() {
   const { mutate, isPending, isError, isSuccess } = useMutation({
      mutationKey: ['mentorP: add simpleuser'],
      mutationFn: async (data: VariablesType) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/mentor-add-simpleuser/', formData);

         return req.data as Response
      },
      onSuccess: (data) => {
         if (data?.error) {
            throw new Error();
         }
      }
   })

   return { mutate, isPending, isError, isSuccess }
}

export default mentorPAddSimpleuser