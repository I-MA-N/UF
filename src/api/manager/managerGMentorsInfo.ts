import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function managerGMentorsInfo() {
   const { data, isError, isPending } = useQuery({
      queryKey: ['managerG: mentors data'],
      queryFn: async () => {
         const req = await axios.get(import.meta.env.VITE_ENDPOINT + '/manager-get-subusers-info/')
         return req.data
      },
      select: (data: any) => {
         return data.result;
      }
   })

   return { data, isError, isPending }
}

export default managerGMentorsInfo;