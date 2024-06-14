import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserData2 } from "../../types/UserData";

function mentorGSimpleusersData(orgName: string) {
   const { data, isError, isPending, error } = useQuery({
      queryKey: ['mentorG: users data', orgName],
      queryFn: async () => {
         const req = await axios.get(import.meta.env.VITE_ENDPOINT + `/mentor-get-info/${orgName}`)
         return req.data
      },
      select: (data: any) => {
         return data.result as UserData2[];
      }
   })

   return { data, isError, isPending, error }
}

export default mentorGSimpleusersData;