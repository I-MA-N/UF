import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import getFormData from "../../../utils/getFormData";
import useFormDataStore from "../../../pages/dashboard/tests/store/formDataStore";

function PFormData(username: string, formname: string) {
   const { mutateAsync } = useMutation({
      mutationKey: ['mentorP: form data', username],
      mutationFn: async () => {
         const data = useFormDataStore.getState().data;
         const formData = getFormData({ formname, data: JSON.stringify(data), setdata: true });

         const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}/form-info/${username}`, formData);

         return req.data
      },
   })

   return { mutateAsync }
}

export default PFormData;