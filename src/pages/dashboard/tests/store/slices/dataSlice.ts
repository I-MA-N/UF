import { StateCreator } from "zustand";
import dynamicEvaluation, { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import staticEvaluation, { staticEvaluationType } from "../../data/testsData/staticEvaluation";
import { SectionsSlice } from "./sectionsSlice";
import { VideoSizeSlice } from "./videoSizeSlice";
import ZipFileType from "../../../../../types/ZipFileType";
import SectionNames from "../../../../../types/SectionNames";

interface DataState {
   staticEvaluationData: staticEvaluationType,
   dynamicEvaluationData: dynamicEvaluationType,
   activeTestData: staticEvaluationType | dynamicEvaluationType | undefined,
}

interface DataActions {
   getOrSetZipFile: (
      sectionName: SectionNames,
      newZipFile?: string | null
   ) => string | null | undefined,
   getFilesToSave: () => ZipFileType[],
   updateTestsData: (lastPage: string, nextPage: string) => void,
}

export type DataSlice = DataState & DataActions;

const createDataSlice: StateCreator<
   DataSlice & SectionsSlice & VideoSizeSlice,
   [],
   [],
   DataSlice
> = (set, get) => ({
   staticEvaluationData: staticEvaluation,
   dynamicEvaluationData: dynamicEvaluation,
   activeTestData: undefined,
   getOrSetZipFile: (name, newZipFile) => {
      const activeTestData = get().activeTestData;
      const zipFile = activeTestData?.find(section => section.name === name)?.zipFile;

      if (newZipFile !== undefined && activeTestData) {
         const sectionIndex = activeTestData.findIndex(section => section.name === name);
         if (sectionIndex > -1) {
            activeTestData[sectionIndex].zipFile = newZipFile;

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

      const arr: ZipFileType[] = [];
      if (testData !== undefined) {
         const isDynamicEvaluationData = "src" in testData[0].questions[0];
         if (isDynamicEvaluationData) {
            staticEvaluationData.forEach(section =>
               typeof section.zipFile === "string" && arr.push({
                  name: section.name,
                  value: section.zipFile
               })
            );
         } else {
            dynamicEvaluationData.forEach(section =>
               typeof section.zipFile === "string" && arr.push({
                  name: section.name,
                  value: section.zipFile
               })
            );
         }
         testData.forEach(section =>
            typeof section.zipFile === "string" && arr.push({
               name: section.name,
               value: section.zipFile
            })
         );
      }

      return arr;
   },
   updateTestsData: (lastPage, nextPage) => {
      if (lastPage === "ناهنجاری ها" || lastPage === "ارزیابی پویا") {
         const lastPageKey = lastPage === "ناهنجاری ها" ? "staticEvaluationData" : "dynamicEvaluationData";
         set(state => {
            if (state.activeTestData !== undefined) {
               // @ts-ignore
               state[lastPageKey] = state.activeTestData;
            }
            return state;
         })
      }

      if (nextPage === "ناهنجاری ها" || nextPage === "ارزیابی پویا") {
         const nextPageKey = nextPage === "ناهنجاری ها" ? "staticEvaluationData" : "dynamicEvaluationData";
         set(state => {
            state.activeTestData = state[nextPageKey];
            return state;
         })
      }
   },
})

export default createDataSlice;