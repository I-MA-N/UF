import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsOut_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'بالاآمدن شانه راست': '0',
        'بالاآمدن شانه چپ': '0',
        'خم شدن آرنج راست': '0',
        'خم شدن آرنج چپ': '0',
    }
    const degrees: DegreeType[] = [];

    const shoulderUpRight = Math.abs(degreeTwoPoints(landmarks[12], landmarks[14]));
    if (shoulderUpRight > 8) values['بالاآمدن شانه راست'] = "1";

    degrees.push({
        landmarksUsed: [12, 14],
        degree: shoulderUpRight,
        value: values['بالاآمدن شانه راست']
    })

    const shoulderUpLeft = 180 - Math.abs(degreeTwoPoints(landmarks[11], landmarks[13]));
    if (shoulderUpLeft > 8) values['بالاآمدن شانه چپ'] = "1";

    degrees.push({
        landmarksUsed: [11, 13],
        degree: shoulderUpLeft,
        value: values['بالاآمدن شانه چپ']
    })

    const elbowRight = Math.abs(degreeTwoPoints(landmarks[14], landmarks[16]));
    if (elbowRight > 15) values['خم شدن آرنج راست'] = "1";

    degrees.push({
        landmarksUsed: [14, 16],
        degree: elbowRight,
        value: values['خم شدن آرنج راست']
    })

    const elbowLeft = 180 - Math.abs(degreeTwoPoints(landmarks[13], landmarks[15]));
    if (elbowLeft > 15) values['خم شدن آرنج چپ'] = "1";

    degrees.push({
        landmarksUsed: [13, 15],
        degree: elbowLeft,
        value: values['خم شدن آرنج چپ']
    })

    return {
        values,
        degrees
    };
}

export default HandsOut_P;