import { useQuery } from "@tanstack/react-query";
import API from "../axiosInstance";

function managerGMentorUsers(mentorName: string) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['managerG: mentor users data', mentorName],
      queryFn: async () => {
         const req = await API.get(`manager-get-mentor-info/${mentorName}`)
         return req.data
      },
      select: (data: any) => {
         return data.result;
      }
   })

   return { data, isError, isPending }
}

export default managerGMentorUsers;