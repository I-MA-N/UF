import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatOneFoot_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'اسکات تک پا چرخش خارجی تنه': "0",
        'اسکات تک پا چرخش داخلی تنه': "0",
        'اسکات تک پا سقوط ران': "0",
        'اسکات تک پا بالا آمدن ران': "0",
        'اسکات تک پا حرکت زانو به داخل': "0",
    }
    const degrees: DegreeType[] = [];

    {
        const shoulders = -1 * degreeTwoPoints(landmarks[11], landmarks[12]);
        if (shoulders > 5) values["اسکات تک پا چرخش خارجی تنه"] = "1";
        if (shoulders < -5) values["اسکات تک پا چرخش داخلی تنه"] = "1";

        const shouldersValue = Number(values["اسکات تک پا چرخش داخلی تنه"]) || Number(values["اسکات تک پا چرخش خارجی تنه"]);
        degrees.push({
            landmarksUsed: [11, 12],
            degree: shoulders,
            value: shouldersValue.toString()
        })
    }

    {
        const asis = -1 * degreeTwoPoints(landmarks[23], landmarks[24]);
        if (asis > 5) values["اسکات تک پا بالا آمدن ران"] = "1";
        if (asis < -5) values["اسکات تک پا سقوط ران"] = "1";

        const asisValue = Number(values["اسکات تک پا بالا آمدن ران"]) || Number(values["اسکات تک پا سقوط ران"]);
        degrees.push({
            landmarksUsed: [23, 24],
            degree: asis,
            value: asisValue.toString()
        })
    }

    {
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

        if (kneeSum <= 150) values["اسکات تک پا حرکت زانو به داخل"] = "1";

        degrees.push({
            landmarksUsed: [kneeTopLandmark1, kneeLandmark, kneeBottomLandmark2],
            degree: kneeSum,
            value: values["اسکات تک پا حرکت زانو به داخل"]
        })
    }

    return {
        values,
        degrees
    }
}

export default SquatOneFoot_P;