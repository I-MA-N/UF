import { create } from "zustand";
import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";

interface ModelState {
   model: PoseLandmarker | null | undefined,
}

interface ModelActions {
   setModel: () => Promise<void>
}

const useModelStore = create<ModelState & ModelActions>()((set, get) => ({
   model: undefined,
   setModel: async () => {
      if (get().model === undefined) {
         const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
         );
         const poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
            baseOptions: {
               modelAssetPath: `/AIModel/pose_landmarker_lite.task`,
               delegate: "GPU",
            },
            runningMode: "VIDEO",
            numPoses: 1,
            minPoseDetectionConfidence: 0.8,
            minPosePresenceConfidence: 0.8,
            minTrackingConfidence: 0.8,
         });
         set(state => ({
            ...state,
            model: poseLandmarker
         }))
      }
   }
}))

export default useModelStore;