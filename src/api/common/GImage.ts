import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function GImage(
   username: string | undefined,
   formname: string | undefined,
   imgKey: string | undefined
) {
   const { data, isPending, isError } = useQuery({
      queryKey: ['get: ai image', username, formname, imgKey],
      queryFn: async () => {
         const req = await axios.get(
            import.meta.env.VITE_ENDPOINT +
            `/form-images/${username}/${formname}/${imgKey}`,
         )

         return req.data
      }
   })

   return { data, isPending, isError }
}

export default GImage;