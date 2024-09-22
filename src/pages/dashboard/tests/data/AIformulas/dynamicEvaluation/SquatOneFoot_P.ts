import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function SquatOneFoot_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'چرخش خارجی تنه': "0",
        'چرخش داخلی تنه': "0",
        'سقوط ران': "0",
        'بالا آمدن ران': "0",
        'حرکت زانو به داخل': "0",
    }

    const shoulders = degreeTwoPoints(landmarks[11], landmarks[12]);
    if (shoulders > 7.5) resultObj["چرخش داخلی تنه"] = "1";
    if (shoulders < -7.5) resultObj["چرخش خارجی تنه"] = "1";

    const asis = degreeTwoPoints(landmarks[23], landmarks[24]);
    if (asis > 7.5) resultObj["سقوط ران"] = "1";
    if (asis < -7.5) resultObj["بالا آمدن ران"] = "1";

    const isRightKneeDown = landmarks[32].y >= landmarks[31].y;

    let kneeTop = Math.abs(degreeTwoPoints(isRightKneeDown ? landmarks[24] : landmarks[23], isRightKneeDown ? landmarks[26] : landmarks[25]));
    let kneeBottom = Math.abs(degreeTwoPoints(isRightKneeDown ? landmarks[26] : landmarks[25], isRightKneeDown ? landmarks[28] : landmarks[27]));
    if (isRightKneeDown) kneeTop = 180 - kneeTop;
    else kneeBottom = 180 - kneeBottom;

    const kneeSum = kneeTop + kneeBottom;
 
    if (kneeSum <= 130) resultObj["حرکت زانو به داخل"] = "1";

    return resultObj
}

export default SquatOneFoot_P;