import { NormalizedLandmark } from "@mediapipe/tasks-vision"
import { create } from "zustand"

interface PhotoState {
   image: string | undefined,
   landmarks: NormalizedLandmark[] | undefined,
   videoSize: {
      width: number,
      height: number
   } | undefined
}

interface PhotoActions {
   setImage: (image: string) => void,
   setLandmarks: (landmarks: NormalizedLandmark[]) => void,
   removePhoto: () => void,
   setVideoSize: (width: number, height: number) => void
}

const usePhotoStore = create<PhotoState & PhotoActions>()((set) => ({
   image: undefined,
   landmarks: undefined,
   videoSize: undefined,
   setImage: (image) => {
      set(state => ({
         ...state,
         image
      }))
   },
   setLandmarks: (landmarks) => {
      set(state => ({
         ...state,
         landmarks
      }))
   },
   removePhoto: () => {
      set(state => ({
         ...state,
         image: undefined,
         landmarks: undefined
      }))
   },
   setVideoSize: (width, height) => {
      set(state => ({
         ...state,
         videoSize: {
            width,
            height
         }
      }))
   }
}))

export default usePhotoStore;