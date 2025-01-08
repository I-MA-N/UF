import { StateCreator } from "zustand";
import SectionNames from "../../../../../types/SectionNames";
import { dynamicEvaluationType } from "../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../data/testsData/staticEvaluation";
import { DataSlice } from "./dataSlice";
import SECTION_NAMES_NEED_USER_HEIGHT from "./sectionsNeedUserHeight";
import useBooleansStore from "../booleansStore";

interface SectionsState {
   currentSection: staticEvaluationType[0][0] | dynamicEvaluationType[0][0] | undefined,
   nameFromManualTab: SectionNames | undefined,
   isTipShown: boolean,
   userHeight: number | undefined,
}

interface SectionsActions {
   setCurrentSection: (sectionName: SectionNames | undefined) => void,
   removeCurrentSection: () => void,
   setNameFromManualTab: (sectionName: SectionNames) => void,
   removeNameFromAITab: () => void,
   toggleIsTipShown: () => void,
   setUserHeight: (height: number) => void,
   resetSections: () => void,
}

export type SectionsSlice = SectionsState & SectionsActions;

const initialState: SectionsState = {
   currentSection: undefined,
   nameFromManualTab: undefined,
   isTipShown: false,
   userHeight: undefined,
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
         const foundedSections = state.activeTestData?.map(part => (
            part.find(section => section.name === name)
         ));
         const foundedSection = foundedSections?.find(section => section !== undefined);
         
         const setIsInputHeightNeeded = useBooleansStore.getState().setIsInputHeightNeeded;
         const isSectionIncludes = foundedSection?.name ? SECTION_NAMES_NEED_USER_HEIGHT.includes(foundedSection.name) : false;
         setIsInputHeightNeeded(isSectionIncludes);

         return {
            ...state,
            currentSection: foundedSection,
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
   setUserHeight: (height) => {
      set(state => ({
         ...state,
         userHeight: height
      }))
   },
   resetSections: () => {
      set(initialState);
   }
})

export default createSectionsSlice;