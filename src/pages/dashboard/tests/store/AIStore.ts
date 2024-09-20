import { create } from "zustand";
import createDataSlice, { DataSlice } from "./slices/dataSlice"
import createSectionsSlice, { SectionsSlice } from "./slices/sectionsSlice"

type AIState = SectionsSlice & DataSlice;

const useAIStore = create<AIState>()((...a) => ({
   ...createSectionsSlice(...a),
   ...createDataSlice(...a),
}))

export default useAIStore;