import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function WalkingBack_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'بالا آمدن ران': "0",
        'صاف شدن و چرخش به خارج پاها': "0",
    }

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    
    if (asis >= 2.5) resultObj["بالا آمدن ران"] = "1";

    const foot = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;

    if (foot >= 15) resultObj["صاف شدن و چرخش به خارج پاها"] = "1";

    return resultObj
}

export default WalkingBack_P;