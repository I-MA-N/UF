import { create } from "zustand";
import FormDataType from "../../../../types/FormDataType";
import getInputKey from "../../../../utils/getInputKey";

interface FormDataState {
   data: FormDataType,
   currentTestName: string | null,
   message: string[] | null,
   progress: number | null,
}

interface FormDataActions {
   setCurrentTestName: (currentTestName: string) => void,
   setFormData: (data: FormDataState["data"]) => void,
   setInputValue: (inputName: string, newValue: string, isLastValueByAI?: boolean) => void,
   setAIValues: (values: { [k: string]: string }, sectionNameFA: string, isDynamicEvaluation: boolean) => void,
   setMessage: (message: FormDataState["message"]) => void,
   increaseProgress: () => void,
   clearProgress: () => void
}

const useFormDataStore = create<FormDataState & FormDataActions>()((set, get) => ({
   data: {},
   currentTestName: null,
   message: null,
   progress: null,
   setCurrentTestName: (currentTestName) => {
      set(state => ({
         ...state,
         currentTestName
      }))
   },
   setFormData: (data) => {
      set(state => ({
         ...state,
         data
      }))
   },
   setInputValue: (inputName, newValue) => {
      const currentTestName = get().currentTestName;

      if (currentTestName) {
         set(state => {
            if (state.data[currentTestName] === undefined) {
               state.data[currentTestName] = {}
            }
            state.data[currentTestName][inputName] = {
               value: newValue,
               isLastValueByAI: false
            }
            return { ...state };
         })
      }
   },
   setAIValues: (values, sectionNameFA, isDynamicEvaluation) => {
      const currentTestName = get().currentTestName;

      if (currentTestName) {
         set(state => {
            Object.entries(values).forEach(([title, value]) => {
               if (state.data[currentTestName] === undefined) {
                  state.data[currentTestName] = {}
               }

               const inputKey = getInputKey(isDynamicEvaluation, sectionNameFA, title);

               state.data[currentTestName][inputKey] = {
                  value,
                  isLastValueByAI: true
               }
            })

            return { ...state };
         })
      }
   },
   setMessage: (message) => {
      set(state => ({
         ...state,
         message,
         progress: null
      }))
   },
   increaseProgress: () => {
      set(state => ({
         ...state,
         progress: typeof state.progress === "number" ? state.progress += 1 : 0
      }))
   },
   clearProgress: () => {
      set(state => ({
         ...state,
         progress: null
      }))
   }
}))

export default useFormDataStore;