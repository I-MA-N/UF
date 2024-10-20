import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsUp_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'خم شدن آرنج ها راست': '0',
        'خم شدن آرنج ها چپ': '0',
    }
    const degrees: DegreeType[] = [];

    const elbowRight = Math.abs(degreeTwoPoints(landmarks[14], landmarks[16]));
    if (elbowRight > 100) values['خم شدن آرنج ها راست'] = "1";

    degrees.push({
        landmarksUsed: [14, 16],
        degree: elbowRight,
        value: values['خم شدن آرنج ها راست']
    })

    const elbowLeft = 180 - Math.abs(degreeTwoPoints(landmarks[13], landmarks[15]));
    if (elbowLeft > 100) values['خم شدن آرنج ها چپ'] = "1";

    degrees.push({
        landmarksUsed: [13, 15],
        degree: elbowLeft,
        value: values['خم شدن آرنج ها چپ']
    })

    return {
        values,
        degrees
    };
}

export default HandsUp_P;