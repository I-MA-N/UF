import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

type VaraiblesType = {
   imgKey: string,
   imgValue: string
}

function PImage(
   username: string | undefined,
   formname: string | undefined,
) {
   const { mutateAsync } = useMutation({
      mutationKey: ["post: ai image", username, formname],
      mutationFn: async (variables: VaraiblesType) => {
         const formData = getFormData({ imgvalue: variables.imgValue });
         const req = await axios.post(
            import.meta.env.VITE_ENDPOINT +
            `/form-images/${username}/${formname}/${variables.imgKey}`,
            formData
         )

         return req.data
      }
   })

   return { mutateAsync };
}

export default PImage;