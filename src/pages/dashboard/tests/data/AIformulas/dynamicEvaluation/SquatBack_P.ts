import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreesType from "../../../../../../types/DegreesType";

function SquatBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'انتقال نامتقارن': "0"
    }
    const degrees: DegreesType[] = [];

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
    })

    if (asis >= 2.5) values["انتقال نامتقارن"] = "1";

    return {
        values,
        degrees
    }
}

export default SquatBack_P;