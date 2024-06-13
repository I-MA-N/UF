import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function mentorGFormNames(username: string) {
   const { data, error, isPending } = useQuery({
      queryKey: ['mentorG: form names', username],
      queryFn: async () => {
         const req = await axios.get(import.meta.env.VITE_ENDPOINT + `/mentor-form-info/${username}`);
         return req.data
      },
      select: (data) => {
         if (data?.error) {
            throw new Error('Failed to get form names!')
         }
         
         const formsArr: any[] = [];
         Object.entries(data).forEach((formInfo, index) => {
            const newFormObj = {
               id: index + 1,
               formName: formInfo[0],
               formTests: [] as any
            }
            Object.entries(formInfo[1]!).forEach((testInfo, index) => {
               const newTestObj = {
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

   return { data, error, isPending };
}

export default mentorGFormNames;