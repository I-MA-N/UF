import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function GImage(
   username: string | undefined,
   formname: string | undefined,
   imgKey: string | undefined
) {
   const { mutateAsync } = useMutation({
      mutationKey: ['get: ai image', username, formname],
      mutationFn: async () => {
         const req = await axios.get(
            import.meta.env.VITE_ENDPOINT +
            `/form-images/${username}/${formname}/${imgKey}`,
         )

         return req.data
      }
   })

   return { mutateAsync }
}

export default GImage;