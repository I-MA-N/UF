import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function managerGSimpleuserActive(username: string) {
   const { data, isPending } = useQuery({
      queryKey: ['managerG: simpleuser active', username],
      queryFn: async () => {
         const req = await axios.get(import.meta.env.VITE_ENDPOINT + `/manager-manage-account/${username}`);
         return req.data;
      },
   })

   return { data, isPending };
}

export default managerGSimpleuserActive;