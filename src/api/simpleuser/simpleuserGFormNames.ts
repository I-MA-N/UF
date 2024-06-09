import { useQuery } from "@tanstack/react-query";
import API from "../axiosInstance";

function simpleuserGFormNames() {
   const { data, isPending } = useQuery({
      queryKey: ['simpluserG: form names'],
      queryFn: async () => {
         const req = await API.get('/simpleuser-form-info/');
         return req.data;
      },
      select: (data) => {
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

   return { data, isPending };
}

export default simpleuserGFormNames;