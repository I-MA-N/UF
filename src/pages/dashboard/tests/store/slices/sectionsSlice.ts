import { StateCreator } from "zustand";
import SectionNames from "../../../../../types/SectionNames";
import { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../data/testsData/staticEvaluation";
import { DataSlice } from "./dataSlice";
import { VideoSizeSlice } from "./videoSizeSlice";

interface SectionsState {
   currentSection: staticEvaluationType[0] | dynamicEvaluationType[0] | undefined,
   nameFromManualTab: SectionNames | undefined,
}

interface SectionsActions {
   setCurrentSection: (sectionName: SectionNames | undefined) => void,
   removeCurrentSection: () => void,
   setNameFromManualTab: (sectionName: SectionNames) => void,
}

export type SectionsSlice = SectionsState & SectionsActions;

const createSectionsSlice: StateCreator<
   SectionsSlice & DataSlice & VideoSizeSlice,
   [],
   [],
   SectionsSlice
> = (set) => ({
   currentSection: undefined,
   nameFromManualTab: undefined,
   setCurrentSection: (name) => {
      set(state => {
         const foundedSection = state.activeTestData?.find(section => section.name === name);

         return {
            ...state,
            currentSection: foundedSection
         }
      })
   },
   removeCurrentSection: () => {
      set(state => ({
         ...state,
         currentSection: undefined
      }))
   },
   setNameFromManualTab: (name) => {
      set(state => ({
         ...state,
         nameFromManualTab: name
      }))
   }
})

export default createSectionsSlice;