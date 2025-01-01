import { PoseLandmarker } from "@mediapipe/tasks-vision";

const CONNECTORS: { start: number, end: number }[] = [
   ...PoseLandmarker.POSE_CONNECTIONS,
   { start: 7, end: 33 },
   { start: 8, end: 33 },

   { start: 11, end: 33 },
   { start: 12, end: 33 },

   { start: 33, end: 34 },
   { start: 34, end: 35 },

   // { start: 38, end: 39 },
];

export default CONNECTORS;