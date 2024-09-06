import { StateCreator } from "zustand";
import { SectionsSlice } from "./sectionsSlice";
import { DataSlice } from "./dataSlice";

interface VideoSizeState {
   videoSize: {
      width: number,
      height: number
   } | undefined
}

interface VideoSizeActions {
   setVideoSize: (width: number, height: number) => void
}

export type VideoSizeSlice = VideoSizeState & VideoSizeActions;

const createVideoSizeSlice: StateCreator<
   VideoSizeSlice & SectionsSlice & DataSlice,
   [],
   [],
   VideoSizeSlice
> = (set) => ({
   videoSize: undefined,
   setVideoSize: (width, height) => {
      set(state => ({
         ...state,
         videoSize: {
            width,
            height
         }
      }))
   }
})

export default createVideoSizeSlice;