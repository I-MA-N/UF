import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function managerGFormNames() {
   const { data, isError, isPending } = useQuery({
      queryKey: ['managerG: form names'],
      queryFn: async () => {
         const req = await axios.get(import.meta.env.VITE_ENDPOINT + '/get-company-info/');
         return req.data as string[]
      }
   })

   return { data, isError, isPending };
}

export default managerGFormNames;