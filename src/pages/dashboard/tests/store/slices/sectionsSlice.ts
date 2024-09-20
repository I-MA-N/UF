import { StateCreator } from "zustand";
import SectionNames from "../../../../../types/SectionNames";
import { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../data/testsData/staticEvaluation";
import { DataSlice } from "./dataSlice";

interface SectionsState {
   currentSection: staticEvaluationType[0] | dynamicEvaluationType[0] | undefined,
   nameFromManualTab: SectionNames | undefined,
   isTipShown: boolean
}

interface SectionsActions {
   setCurrentSection: (sectionName: SectionNames | undefined) => void,
   removeCurrentSection: () => void,
   setNameFromManualTab: (sectionName: SectionNames) => void,
   removeNameFromAITab: () => void,
   toggleIsTipShown: () => void,
   resetSections: () => void,
}

export type SectionsSlice = SectionsState & SectionsActions;

const initialState: SectionsState = {
   currentSection: undefined,
   nameFromManualTab: undefined,
   isTipShown: false
}

const createSectionsSlice: StateCreator<
   SectionsSlice & DataSlice,
   [],
   [],
   SectionsSlice
> = (set) => ({
   ...initialState,
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
   },
   removeNameFromAITab: () => {
      set(state => ({
         ...state,
         nameFromManualTab: undefined
      }))
   },
   toggleIsTipShown: () => {
      set(state => ({
         ...state,
         isTipShown: !state.isTipShown
      }))
   },
   resetSections: () => {
      set(initialState);
   }
})

export default createSectionsSlice;