import { C_PHASE1, F_PHASE1 } from "../pages/dashboard/program/constants/phases/PHASE1";

function convertProgramData(type: string, exercise: any) {
   // Fitness
   if (type === "fitness") {
      const name = exercise[0] as string;
      const images = exercise[1] as string[];

      const phaseName = images[0].split('\\')[2];
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
   const imagesSrc = exercise[0].replaceAll('\\', '/') as string;

   const phaseName = imagesSrc.split('/')[3];
   const otherData = C_PHASE1[phaseName as keyof typeof C_PHASE1];

   return {
      name,
      images,
      ...otherData
   }
}

export default convertProgramData;