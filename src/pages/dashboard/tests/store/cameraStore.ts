import { create } from "zustand";

interface CameraState {
   deviceID: string | null,
}

interface CameraActions {
   setDeviceID: (id: string) => void,
}

const useCameraStore = create<CameraState & CameraActions>()((set) => ({
   deviceID: null,
   setDeviceID: (deviceID) => {
      set(state => ({
         ...state,
         deviceID
      }))
   },
}))

export default useCameraStore;