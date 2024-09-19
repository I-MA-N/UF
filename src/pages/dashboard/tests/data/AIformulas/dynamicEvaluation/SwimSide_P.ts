import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function SwimSide_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'هایپراکستنشن گردن': 0
    }

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const shoulderEar = degreeTwoPoints(isEven ? landmarks[12] : landmarks[11], isEven ? landmarks[8] : landmarks[7]);
    if (shoulderEar < -20) resultObj["هایپراکستنشن گردن"] = 1;

    return resultObj;
}

export default SwimSide_P;