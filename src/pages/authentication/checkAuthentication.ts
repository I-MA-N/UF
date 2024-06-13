import axios from "axios";
import GNewToken from "../../api/common/GNewToken";
import { useMutation } from "@tanstack/react-query";
import UserData from "../../types/UserData";
import { useEffect } from "react";

function checkAuthentication() {
   const { data, isError } = GNewToken();

   const { mutate, data: userData, isError: userDataErr } = useMutation({
      mutationFn: async (token: string) => {
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/get-info/', null, {
            headers: { Authorization: `Bearer ${token}` }
         });

         return req.data as UserData
      }
   })

   useEffect(() => {
      if (data?.access && !isError) {
         mutate(data?.access)
      }
   }, [data, isError])

   return userDataErr ? undefined : userData?.role;
}

export default checkAuthentication;