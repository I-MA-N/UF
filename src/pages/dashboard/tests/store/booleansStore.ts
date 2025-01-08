import { create } from "zustand";

interface BooleansState {
   isInputHeightNeeded: boolean,
   isCameraListShown: boolean,
   isTipShown: boolean,
}

interface BooleansActions {
   setIsInputHeightNeeded: (isInputHeightNeeded: boolean) => void,
   toggleIsCameraListShown: () => void,
   toggleIsTipShown: () => void,
}

const initialState: BooleansState = {
   isInputHeightNeeded: false,
   isCameraListShown: false,
   isTipShown: false,
}

const useBooleansStore = create<BooleansState & BooleansActions>()((set) => ({
   ...initialState,
   setIsInputHeightNeeded: (isInputHeightNeeded) => {
      set(state => ({
         ...state,
         isInputHeightNeeded
      }))
   },
   toggleIsCameraListShown: () => {
      set(state => ({
         ...state,
         isCameraListShown: !state.isCameraListShown
      }))
   },
   toggleIsTipShown: () => {
      set(state => ({
         ...state,
         isTipShown: !state.isTipShown
      }))
   },
   reset: () => {
      set(initialState)
   }
}))

export default useBooleansStore;