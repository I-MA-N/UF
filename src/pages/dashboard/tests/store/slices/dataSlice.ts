import { StateCreator } from "zustand";
import { SectionsSlice } from "./sectionsSlice";
import ZipFileType from "../../../../../types/ZipFileType";
import SectionNames from "../../../../../types/SectionNames";
import dynamicEvaluation, { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import staticEvaluation, { staticEvaluationType } from "../../data/testsData/staticEvaluation";
import FMS, { FMSType } from "../../data/testsData/FMS";

interface DataState {
   staticEvaluationData: staticEvaluationType,
   dynamicEvaluationData: dynamicEvaluationType,
   FMSData: FMSType,
   activeTestData: DataState["staticEvaluationData"] | DataState["dynamicEvaluationData"] | DataState["FMSData"] | undefined,
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
   "عملکردی وضعیت بدنی": "FMSData"
}

const createDataSlice: StateCreator<
   DataSlice & SectionsSlice,
   [],
   [],
   DataSlice
> = (set, get) => ({
   staticEvaluationData: staticEvaluation,
   dynamicEvaluationData: dynamicEvaluation,
   FMSData: FMS,
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

      if (newZipFile !== undefined) {
         if (sectionIndex > -1) {
            activeTestData[partIndex][sectionIndex].zipFile = newZipFile;

            set(state => ({
               ...state,
               activeTestData
            }))
            return newZipFile;
         }
      }

      return zipFile;
   },
   getFilesToSave: () => {
      const testData = get().activeTestData;
      const staticEvaluationData = get().staticEvaluationData;
      const dynamicEvaluationData = get().dynamicEvaluationData;
      const FMSData = get().FMSData;

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
      if (lastPage === "ناهنجاری ها" || lastPage === "ارزیابی پویا" || lastPage === "عملکردی وضعیت بدنی") {
         const lastPageKey = LAST_PAGE_KEYS[lastPage];
         set(state => {
            if (state.activeTestData !== undefined) {
               // @ts-ignore
               state[lastPageKey] = state.activeTestData;
            }
            return state;
         })
      }

      if (nextPage === "ناهنجاری ها" || nextPage === "ارزیابی پویا" || nextPage === "عملکردی وضعیت بدنی") {
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
         FMSData: FMS.map(part => (
            part.map(section => {
               section.zipFile = undefined;
               return section
            })
         ))
      }));
   }
})

export default createDataSlice;