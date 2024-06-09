import { useMutation } from "@tanstack/react-query";
import API from "../axiosInstance";
import getFormData from "../../utils/getFormData";

type dataType = {
   formName: string,
   setData: boolean,
   data: any
}

function mentorPSimpleuserFormData(username: string) {
   const { mutate, data } = useMutation({
      mutationKey: ['mentorP: form data', username],
      mutationFn: async (data: dataType) => {
         const formData = getFormData(data);
         const req = await API.post(`/mentor-form-info/${username}`, formData);
         return req.data
      },
   })

   return { mutate, data }
}

export default mentorPSimpleuserFormData