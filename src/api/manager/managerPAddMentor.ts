import { useMutation, useQueryClient } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import PUserData from "../common/PUserData";
import axios from "axios";

type newMentorType = {
   username: string,
   email: string,
   password: string,
   data: {
      phone: string;
      firstName: string;
      lastName: string;
      city: string;
      job: string;
      age: string;
      gender: "male" | "female";
   }
}

function managerPAddMentor() {
   const { mutate: setInfo } = PUserData();
   const queryClient = useQueryClient();

   const { mutate, data, isPending } = useMutation({
      mutationKey: ['managerP: add mentor'],
      mutationFn: async (data: newMentorType) => {
         const formData = getFormData({
            username: data.username,
            email: data.email,
            password: data.password,
         });
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/manager-add-mentor/', formData);
         return req.data
      },
      onSuccess: (data, variables) => {
         if (data.success) {
            setInfo({
               for: variables.username,
               firstname: variables.data.firstName,
               lastname: variables.data.lastName,
               phone: variables.data.phone,
               gender: variables.data.gender,
               age: variables.data.age,
               info: JSON.stringify({
                  job: variables.data.job,
                  city: variables.data.city
               })
            })
            queryClient.invalidateQueries({
               queryKey: ["get: user data",""]
            })
         }
      }
   })

   return { mutate, data, isPending }
}

export default managerPAddMentor;