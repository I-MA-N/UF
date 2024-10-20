import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatOneFoot_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'چرخش خارجی تنه': "0",
        'چرخش داخلی تنه': "0",
        'سقوط ران': "0",
        'بالا آمدن ران': "0",
        'حرکت زانو به داخل': "0",
    }
    const degrees: DegreeType[] = [];

    const shoulders = degreeTwoPoints(landmarks[11], landmarks[12]);
    if (shoulders > 7.5) values["چرخش داخلی تنه"] = "1";
    if (shoulders < -7.5) values["چرخش خارجی تنه"] = "1";

    const shouldersValue = Number(values["چرخش داخلی تنه"]) || Number(values["چرخش خارجی تنه"]);
    degrees.push({
        landmarksUsed: [11, 12],
        degree: shoulders,
        value: shouldersValue.toString()
    })

    const asis = degreeTwoPoints(landmarks[23], landmarks[24]);
    if (asis > 7.5) values["سقوط ران"] = "1";
    if (asis < -7.5) values["بالا آمدن ران"] = "1";
    
    const asisValue = Number(values["چرخش داخلی تنه"]) || Number(values["چرخش خارجی تنه"]);
    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
        value: asisValue.toString()
    })

    const isRightKneeDown = landmarks[32].y >= landmarks[31].y;

    const kneeTopLandmark1 = isRightKneeDown ? 24 : 23;
    const kneeLandmark = isRightKneeDown ? 26 : 25;
    let kneeTop = Math.abs(degreeTwoPoints(landmarks[kneeTopLandmark1], landmarks[kneeLandmark]));

    const kneeBottomLandmark2 = isRightKneeDown ? 28 : 27;
    let kneeBottom = Math.abs(degreeTwoPoints(landmarks[kneeLandmark], landmarks[kneeBottomLandmark2]));
    if (isRightKneeDown) {
        kneeTop = 180 - kneeTop
    } else {
        kneeBottom = 180 - kneeBottom
    }
    const kneeSum = kneeTop + kneeBottom;
    if (kneeSum <= 130) values["حرکت زانو به داخل"] = "1";

    degrees.push({
        landmarksUsed: [kneeTopLandmark1, kneeLandmark, kneeBottomLandmark2],
        degree: kneeSum,
        value: values["حرکت زانو به داخل"]
    })

    return {
        values,
        degrees
    }
}

export default SquatOneFoot_P;