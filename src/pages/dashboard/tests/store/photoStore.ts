import { NormalizedLandmark } from "@mediapipe/tasks-vision"
import { create } from "zustand"

interface PhotoState {
   image: string | undefined,
   landmarks: NormalizedLandmark[],
   videoSize: {
      width: number,
      height: number
   } | undefined,
   userHeight: number | undefined
}

interface PhotoActions {
   setImage: (image: string) => void,
   setLandmarks: (landmarks: NormalizedLandmark[]) => void,
   removePhoto: () => void,
   setVideoSize: (width: number, height: number) => void,
   setUserHeight: (height: number) => void,
   resetUserHeight: () => void,
}

const usePhotoStore = create<PhotoState & PhotoActions>()((set) => ({
   image: undefined,
   landmarks: [],
   videoSize: undefined,
   userHeight: undefined,
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
   },
   setUserHeight: (height) => {
      set(state => ({
         ...state,
         userHeight: height
      }))
   },
   resetUserHeight: () => {
      set(state => ({
         ...state,
         userHeight: undefined
      }))
   }
}))

export default usePhotoStore;