import { useQuery } from "@tanstack/react-query";
import API from "../axiosInstance";

function managerGSimpleuserActive(username: string) {
   const { data, isPending } = useQuery({
      queryKey: ['managerG: simpleuser active', username],
      queryFn: async () => {
         const req = await API.get(`manager-manage-account/${username}`);
         return req.data;
      },
   })

   return { data, isPending };
}

export default managerGSimpleuserActive;