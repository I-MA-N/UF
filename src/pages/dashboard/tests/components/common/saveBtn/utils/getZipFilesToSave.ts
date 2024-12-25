import useAIStore from "../../../../store/AIStore";

function getZipFilesToSave() {
   const zipFiles = useAIStore.getState().zipFiles;
   const zipFilesToSave: {
      key: string,
      value: string
   }[] = [];

   Object.entries(zipFiles).forEach(([sectionName, zipFile]) => {
      if (zipFile) zipFilesToSave.push({
         key: sectionName,
         value: zipFile
      })
   })

   return zipFilesToSave;
}

export default getZipFilesToSave;