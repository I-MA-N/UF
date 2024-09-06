import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { create } from "zustand";

interface FormState {
   register: UseFormRegister<FieldValues> | undefined,
   setValue: UseFormSetValue<FieldValues> | undefined,
   getValues: UseFormGetValues<FieldValues> | undefined,
   formData: any,
}

interface FormActions {
   setFormState: (formState: Partial<FormState>) => void,
   updateFormData: () => void,
}

const useFormStore = create<FormState & FormActions>()((set) => ({
   register: undefined,
   setValue: undefined,
   getValues: undefined,
   formData: undefined,
   setFormState: (formState) => {
      set(state => ({
         setFormState: state.setFormState,
         ...formState
      }))
   },
   updateFormData: () => {
      set(state => {
         if (state.getValues) {
            return {
               ...state,
               formData: state.getValues()
            }
         }
         return state;
      })
   }
}))

export default useFormStore;