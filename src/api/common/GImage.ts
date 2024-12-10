import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function GImage(
   username: string | undefined,
   formname: string | undefined,
   imgKey: string | undefined
) {
   const { mutate, data, isPending } = useMutation({
      mutationKey: ['get: section image', username, formname, imgKey],
      mutationFn: async () => {
         const req = await axios.get(
            import.meta.env.VITE_ENDPOINT +
            `/form-images/${username}/${formname}/${imgKey}`,
         )

         return req.data as { [key: string]: string }
      },
   })

   return { mutate, data, isPending }
}

export default GImage;