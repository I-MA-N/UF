import { useQuery } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

type VariablesType = {
   username: string | undefined,
   formName: string | undefined,
}

function mentorGFormData(variables: VariablesType) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['mentorG: form data', variables.username, variables.formName],
      queryFn: async () => {
         const formData = getFormData({formName: variables.formName});
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + `/mentor-form-info/${variables.username}`, formData);
         
         return req.data
      }
   })

   return { data, isError, isPending }
}

export default mentorGFormData 