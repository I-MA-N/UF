import { StateCreator } from "zustand";
import { SectionsSlice } from "./sectionsSlice";
import ZipFileType from "../../../../../types/ZipFileType";
import SectionNames from "../../../../../types/SectionNames";
import dynamicEvaluation, { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import staticEvaluation, { staticEvaluationType } from "../../data/testsData/staticEvaluation";

interface DataState {
   staticEvaluationData: staticEvaluationType,
   dynamicEvaluationData: dynamicEvaluationType,
   activeTestData: DataState["staticEvaluationData"] | DataState["dynamicEvaluationData"] | undefined,
}

interface DataActions {
   getOrSetZipFile: (
      sectionName: SectionNames,
      newZipFile?: string | null
   ) => string | null | undefined,
   getFilesToSave: () => ZipFileType[],
   updateTestsData: (lastPage: string, nextPage: string) => void,
   resetData: () => void,
}

export type DataSlice = DataState & DataActions;

const LAST_PAGE_KEYS = {
   "ناهنجاری ها": "staticEvaluationData",
   "ارزیابی پویا": "dynamicEvaluationData",
}

const createDataSlice: StateCreator<
   DataSlice & SectionsSlice,
   [],
   [],
   DataSlice
> = (set, get) => ({
   staticEvaluationData: staticEvaluation,
   dynamicEvaluationData: dynamicEvaluation,
   activeTestData: undefined,
   getOrSetZipFile: (name, newZipFile) => {
      const activeTestData = get().activeTestData!;
      const partIndex = activeTestData.findIndex(part => (
         part.find(section => section.name === name)
      ))
      let sectionIndex = -1;
      activeTestData?.forEach(part => {
         const foundedIndex = part.findIndex(section => section.name === name);
         if (foundedIndex > -1) sectionIndex = foundedIndex;
      });
      const zipFile = activeTestData[partIndex][sectionIndex]?.zipFile;

      if (newZipFile !== undefined && partIndex > -1 && sectionIndex > -1) {
         activeTestData[partIndex][sectionIndex].zipFile = newZipFile;

         set(state => ({
            ...state,
            activeTestData
         }))
         
         return newZipFile;
      }

      return zipFile;
   },
   getFilesToSave: () => {
      const testData = get().activeTestData;
      const staticEvaluationData = get().staticEvaluationData;
      const dynamicEvaluationData = get().dynamicEvaluationData;

      const arr: ZipFileType[] = [];

      if (testData !== undefined) {
         const isDynamicEvaluationData = "src" in testData[0][0].questions[0];
         if (isDynamicEvaluationData) {
            staticEvaluationData.forEach(part => {
               part.forEach((section =>
                  typeof section.zipFile === "string" && arr.push({
                     name: section.name,
                     value: section.zipFile
                  })
               ))
            });
         } else {
            dynamicEvaluationData.forEach(part => {
               part.forEach((section =>
                  typeof section.zipFile === "string" && arr.push({
                     name: section.name,
                     value: section.zipFile
                  })
               ))
            });
         }
         testData.forEach(part => {
            part.forEach((section =>
               typeof section.zipFile === "string" && arr.push({
                  name: section.name,
                  value: section.zipFile
               })
            ))
         });
      }

      return arr;
   },
   updateTestsData: (lastPage, nextPage) => {
      if (lastPage === "ناهنجاری ها" || lastPage === "ارزیابی پویا") {
         const lastPageKey = LAST_PAGE_KEYS[lastPage];
         set(state => {
            if (state.activeTestData !== undefined) {
               // @ts-ignore
               state[lastPageKey] = state.activeTestData;
            }
            return state;
         })
      }

      if (nextPage === "ناهنجاری ها" || nextPage === "ارزیابی پویا") {
         const nextPageKey = LAST_PAGE_KEYS[nextPage];
         set(state => {
            // @ts-ignore
            state.activeTestData = state[nextPageKey];
            return state;
         })
      }
   },
   resetData: () => {
      set(state => ({
         ...state,
         activeTestData: undefined,
         staticEvaluationData: staticEvaluation.map(part => (
            part.map(section => {
               section.zipFile = undefined;
               return section
            })
         )),
         dynamicEvaluationData: dynamicEvaluation.map(part => (
            part.map(section => {
               section.zipFile = undefined;
               return section
            })
         )),
      }));
   }
})

export default createDataSlice;