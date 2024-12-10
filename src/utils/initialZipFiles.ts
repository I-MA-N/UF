import dynamicEvaluation from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";
import staticEvaluation from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import ZipFilesType from "../types/ZipFilesType";

function initialZipFiles() {
   const zipFiles: ZipFilesType = {};

   staticEvaluation.forEach(part => {
      part.forEach(section => {
         zipFiles[section.name] = undefined;
      })
   })

   dynamicEvaluation.forEach(part => {
      part.forEach(section => {
         zipFiles[section.name] = undefined;
      })
   })

   return zipFiles;
}

export default initialZipFiles;