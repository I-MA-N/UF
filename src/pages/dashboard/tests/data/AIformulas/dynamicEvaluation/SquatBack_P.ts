import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function SquatBack_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'انتقال نامتقارن': 0
    }

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    if (asis >= 2.5) resultObj["انتقال نامتقارن"] = 1;

    return resultObj
}

export default SquatBack_P;