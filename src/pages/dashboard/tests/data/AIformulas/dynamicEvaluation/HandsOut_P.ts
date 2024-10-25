import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsOut_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'بالا آمدن شانه راست': '0',
        'بالا آمدن شانه چپ': '0',
        'خم شدن آرنج راست': '0',
        'خم شدن آرنج چپ': '0',
    }
    const degrees: DegreeType[] = [];

    const shoulderUpRight = degreeTwoPoints(landmarks[12], landmarks[14]);
    if (shoulderUpRight < -5) values['بالا آمدن شانه راست'] = "1";

    degrees.push({
        landmarksUsed: [12, 14],
        degree: Math.abs(shoulderUpRight),
        value: values['بالا آمدن شانه راست']
    })

    const shoulderUpLeft = degreeTwoPoints(landmarks[11], landmarks[13]);
    if (shoulderUpLeft > -175 && shoulderUpLeft < 0) values['بالا آمدن شانه چپ'] = "1";

    degrees.push({
        landmarksUsed: [11, 13],
        degree: 180 - Math.abs(shoulderUpLeft),
        value: values['بالا آمدن شانه چپ']
    })

    const elbowRight = degreeTwoPoints(landmarks[14], landmarks[16]);
    if (elbowRight > 15) values['خم شدن آرنج راست'] = "1";

    degrees.push({
        landmarksUsed: [14, 16],
        degree: Math.abs(elbowRight),
        value: values['خم شدن آرنج راست']
    })

    const elbowLeft = degreeTwoPoints(landmarks[13], landmarks[15]);
    if (elbowLeft < 175 && elbowLeft > 0) values['خم شدن آرنج چپ'] = "1";

    degrees.push({
        landmarksUsed: [13, 15],
        degree: 180 - Math.abs(elbowLeft),
        value: values['خم شدن آرنج چپ']
    })

    return {
        values,
        degrees
    };
}

export default HandsOut_P;