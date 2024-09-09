import { create } from "zustand";
import createDataSlice, { DataSlice } from "./slices/dataSlice"
import createSectionsSlice, { SectionsSlice } from "./slices/sectionsSlice"
import createVideoSizeSlice, { VideoSizeSlice } from "./slices/videoSizeSlice"

type AIState = SectionsSlice & DataSlice & VideoSizeSlice;

const useAIStore = create<AIState>()((...a) => ({
   ...createSectionsSlice(...a),
   ...createDataSlice(...a),
   ...createVideoSizeSlice(...a),
}))

export default useAIStore;