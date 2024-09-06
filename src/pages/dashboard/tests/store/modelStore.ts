import { create } from "zustand";
import { Holistic, Results } from "@mediapipe/holistic";

interface ModelState {
   model: Holistic | null | undefined,
   results: Results | undefined
}

interface ModelActions {
   setModel: () => Promise<void>
}

const useModelStore = create<ModelState & ModelActions>()((set, get) => ({
   model: undefined,
   results: undefined,
   setModel: async () => {
      if (get().model === undefined) {
         const holistic = new Holistic({
            locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
         });

         holistic.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: true,
            smoothSegmentation: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
         });



         // Just to download assets needed for landmarks sooner
         const imgElem = document.getElementById("front") as HTMLImageElement | null;
         if (imgElem) {
            // holistic.onResults((results) => {
            //    set(state => ({
            //       ...state,
            //       results
            //    }))
            // })
            await holistic.send({ image: imgElem });
            set(state => ({
               ...state,
               model: holistic
            }))
         }
      }
   }
}))

export default useModelStore;