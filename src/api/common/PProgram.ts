import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import getFormData from "../../utils/getFormData";
import Exercise from "../../types/Exercise";
import convertProgramData from "../../utils/convertProgramData";

function PProgram(type: string | undefined, username: string | undefined, formname: string | undefined) {
   const { data, isError, isPending } = useQuery({
      queryKey: [`post: ${type} program`, username, formname],
      queryFn: async () => {
         const formData = getFormData({
            for: username, 
            formname
         });
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + `/get-${type}-program/`, formData);

         return req.data
      },
      select: (data) => {
         if (data?.error) return data?.error as string

         const programArr: Exercise[][] = [];

         data.forEach((day: any) => {
            const dayArr: Exercise[] = [];

            day.forEach((category: any) => {
               category.forEach((exercise: any) => {
                  const convertedData = convertProgramData(type!, exercise);
                  dayArr.push(convertedData);
               });
            });

            programArr.push(dayArr);
         })

         return programArr
      }
   })

   return { data, isError, isPending };
}

export default PProgram;