import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FormObj, TestObj } from "../../types/TestsTypes";

function GFormNames(username: string | undefined) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['get: form names', username],
      queryFn: async () => {
         const req = await axios.get(`${import.meta.env.VITE_ENDPOINT}/form-info/${username}`);

         return req.data
      },
      select: (data) => {
         if (data?.error) return data.error as string;

         const formsArr: FormObj[] = [];
         Object.entries(data).forEach((formInfo, index) => {
            const newFormObj: FormObj = {
               id: index + 1,
               formName: formInfo[0],
               formTests: []
            }
            Object.entries(formInfo[1]!).forEach((testInfo, index) => {
               const newTestObj: TestObj = {
                  id: index + 1,
                  testName: testInfo[0],
                  testAccess: testInfo[1]
               }
               newFormObj.formTests.push(newTestObj)
            })

            formsArr.push(newFormObj)
         })

         return formsArr
      }
   })

   return { data, isError, isPending }
}

export default GFormNames;