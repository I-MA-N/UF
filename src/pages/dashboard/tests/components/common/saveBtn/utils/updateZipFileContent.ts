import JSZip from "jszip";

const updateZipFileContent = async (zipFile: string) => {
   const promise = new Promise<string>(async (resolve, reject) => {
      const zip = new JSZip();
      await zip.loadAsync(zipFile, { base64: true });

      const isSavedJson = JSON.stringify({ isSaved: true });
      zip.file('isSaved.json', isSavedJson);

      zip.generateAsync({ type: 'base64' })
         .then(newZipFile => resolve(newZipFile))
         .catch(() => reject())
   })

   return promise;
}

export default updateZipFileContent;