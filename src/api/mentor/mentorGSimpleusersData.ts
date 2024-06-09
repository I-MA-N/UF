import { useQuery } from "@tanstack/react-query";
import API from "../axiosInstance";

function mentorGSimpleusersData(orgName: string) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['mentorG: users data', orgName],
      queryFn: async () => {
         const req = await API.get(`mentor-get-info/${orgName}`)
         return req.data
      },
      select: (data: any) => {
         return data.result;
      }
   })

   return { data, isError, isPending }
}

export default mentorGSimpleusersData;