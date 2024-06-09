import { useQuery } from "@tanstack/react-query";
import API from "../axiosInstance";

function managerGMentorsInfo() {
   const { data, isError, isPending } = useQuery({
      queryKey: ['managerG: mentors data'],
      queryFn: async () => {
         const req = await API.get('/manager-get-subusers-info/')
         return req.data
      },
      select: (data: any) => {
         return data.result;
      }
   })

   return { data, isError, isPending }
}

export default managerGMentorsInfo;