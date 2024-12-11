import { StateCreator } from "zustand";
import { SectionsSlice } from "./sectionsSlice";
import SectionNames from "../../../../../types/SectionNames";
import dynamicEvaluation, { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import staticEvaluation, { staticEvaluationType } from "../../data/testsData/staticEvaluation";
import ZipFilesType from "../../../../../types/ZipFilesType";
import initialZipFiles from "../../../../../utils/initialZipFiles";

interface DataState {
   activeTestData: staticEvaluationType | dynamicEvaluationType | undefined,
   zipFiles: ZipFilesType
}

interface DataActions {
   setZipFile: (sectionName: SectionNames, newZipFile: string | null) => void,
   updateTestsData: (nextPage: string) => void,
   clearZipFiles: () => void
}

export type DataSlice = DataState & DataActions;

const LAST_PAGE_KEYS = {
   "ناهنجاری ها": staticEvaluation,
   "ارزیابی پویا": dynamicEvaluation,
}

const createDataSlice: StateCreator<
   DataSlice & SectionsSlice,
   [],
   [],
   DataSlice
> = (set, get) => ({
   activeTestData: undefined,
   zipFiles: initialZipFiles(),
   setZipFile: (sectionName, newZipFile) => {
      const zipFiles = get().zipFiles;
      zipFiles[sectionName] = newZipFile;

      set(state => ({
         ...state,
         zipFiles
      }))
   },
   updateTestsData: (nextPage) => {
      if (nextPage === "ناهنجاری ها" || nextPage === "ارزیابی پویا") {
         set(state => {
            state.activeTestData = LAST_PAGE_KEYS[nextPage];
            return state;
         })
      }
   },
   clearZipFiles: () => {
      set(state => ({
         ...state,
         zipFiles: initialZipFiles()
      }))
   }
})

export default createDataSlice;