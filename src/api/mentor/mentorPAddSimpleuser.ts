import { useMutation } from "@tanstack/react-query";
import API from "../axiosInstance";
import getFormData from "../../utils/getFormData";
import { useMentoringContext } from "../../pages/dashbord/mentor/context/MentoringContextProvider";
import { useNavigate } from "react-router-dom";


function mentorPAddSimpleuser() {
   const { setMentoringData } = useMentoringContext();
   const navigate = useNavigate();

   const { mutateAsync, isError } = useMutation({
      mutationKey: ['mentorP: add simpleuser'],
      mutationFn: async (data: any) => {
         const formData = getFormData(data)
         const req = await API.post('/mentor-add-simpleuser/', formData)
         return req.data
      },
      onSuccess: (data) => {
         if (data.error && data.error !== "user already exists.")
            throw new Error('Failed to add user to subusers!')
         setMentoringData!(prevUser => {
            return {
               ...prevUser,
               username: data.username
            }
         })
         navigate("/mentor/mentoring/forms")
      }
   })

   return { mutateAsync, isError }
}

export default mentorPAddSimpleuser