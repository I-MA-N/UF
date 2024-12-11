import dynamicEvaluation from "../../../../tests/data/testsData/dynamicEvaluation";
import staticEvaluation from "../../../../tests/data/testsData/staticEvaluation";

function findInputTitle(serverID: string) {
   let title: string | null = null;

   staticEvaluation.forEach(part => {
      part.forEach(section => {
         section.questions.forEach(input => {
            if (input.serverID === serverID) title = `${section.nameFA} - ${input.title}`;
         })
      })
   })
   
   if (title === null) {
      dynamicEvaluation.forEach(part => {
         part.forEach(section => {
            section.questions.forEach(input => {
               if (input.serverID === serverID) title = `${section.nameFA} - ${input.title}`;
            })
         })
      })
   }

   return title;
}

export default findInputTitle;