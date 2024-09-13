import { NormalizedLandmark } from "@mediapipe/tasks-vision"
import { create } from "zustand"
import PhotoLandmarksType from "../../../../types/PhotoLandmarksType"

interface PhotoState {
   image: string | undefined,
   landmarks: PhotoLandmarksType,
   videoSize: {
      width: number,
      height: number
   } | undefined
}

interface PhotoActions {
   setImage: (image: string) => void,
   setLandmarks: (landmarks: NormalizedLandmark[], type: "nature" | "dummy") => void,
   removePhoto: () => void,
   setVideoSize: (width: number, height: number) => void
}

const usePhotoStore = create<PhotoState & PhotoActions>()((set) => ({
   image: undefined,
   landmarks: {
      nature: undefined,
      dummy: undefined
   },
   videoSize: undefined,
   setImage: (image) => {
      set(state => ({
         ...state,
         image
      }))
   },
   setLandmarks: (landmarks, type) => {
      set(state => {
         if (type === "nature") {
            return {
               ...state,
               landmarks: {
                  ...state.landmarks,
                  nature: landmarks
               }
            }
         }

         return {
            ...state,
            landmarks: {
               ...state.landmarks,
               dummy: landmarks
            }
         }
      })
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