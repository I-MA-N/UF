import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function WalkingSide_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'سر به جلو میرود': "0",
    }

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;
    
    let earC7 = Math.abs(degreeTwoPoints(isEven ? landmarks[8] : landmarks[7], landmarks[33]));
    if (!isEven) earC7 = 180 - earC7
    
    if (earC7 <= 50) resultObj["سر به جلو میرود"] = "1";

    return resultObj
}

export default WalkingSide_P;