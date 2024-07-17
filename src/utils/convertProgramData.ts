import { C_PHASE1, F_PHASE1 } from "../pages/dashboard/program/constants/phases/PHASE1";

function convertProgramData(type: string, exercise: any) {
   // Fitness
   if (type === "fitness") {
      const name = exercise[0] as string;
      const images = exercise[1] as string[];

      // In local addressed we are using '\\' so need to split with that
      // But on deployed website we use '/' so need to split with '/'
      let phaseName; 
      if (import.meta.env.VITE_ENDPOINT.includes('127.0.0.1:8000')) {
         phaseName = images[0].split('\\')[2];
      } else {
         phaseName = images[0].split('/')[2];
      }

      const otherData = F_PHASE1[phaseName as keyof typeof F_PHASE1];

      return {
         name,
         images,
         ...otherData
      }
   }

   // Corrective
   const name = exercise[1][0] as string;
   const images = exercise[1][1] as string[];
   // Here because of this 'replaceAll' we don't need to
   // check if we are on local or not for using '\\' or '/' on 'split'
   const imagesSrc = exercise[0].replaceAll('\\', '/') as string;

   const phaseName = imagesSrc.split('/')[3];
   const otherData = C_PHASE1[phaseName as keyof typeof C_PHASE1];

   const imagesArr: string[] = [];
   images.forEach(image => {
      imagesArr.push(imagesSrc + '/' + image);
   })

   return {
      name,
      images: imagesArr,
      ...otherData
   }
}

export default convertProgramData;