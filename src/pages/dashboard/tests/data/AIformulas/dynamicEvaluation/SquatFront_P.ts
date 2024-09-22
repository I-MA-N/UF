import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function SquatFront_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'حرکت زانوها به خارج': "0",
        'حرکت زانوها به داخل': "0",
        'چرخش پاها به خارج': "0",
    }

    const kneeTop = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
    const kneeBottom = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
    const kneeSum = kneeTop + kneeBottom;

    if (kneeSum <= 173) resultObj["حرکت زانوها به داخل"] = "1";
    if (kneeSum >= 180) resultObj["حرکت زانوها به خارج"] = "1";

    const foot = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;

    if (foot >= 15) resultObj["چرخش پاها به خارج"] = "1";

    return resultObj
}

export default SquatFront_P;