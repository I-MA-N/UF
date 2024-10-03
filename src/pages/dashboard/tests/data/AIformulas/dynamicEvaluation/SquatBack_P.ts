import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'انتقال نامتقارن': "0"
    }
    const degrees: DegreeType[] = [];

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    if (asis >= 2.5) values["انتقال نامتقارن"] = "1";

    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
        value: values["انتقال نامتقارن"]
    })

    return {
        values,
        degrees
    }
}

export default SquatBack_P;