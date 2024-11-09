import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsRotate_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'بالا آمدن شانه - راست': '0',
        'بالا آمدن شانه - چپ': '0',
    }
    const degrees: DegreeType[] = [];

    const shoulderUpRight = degreeTwoPoints(landmarks[12], landmarks[14]);
    if (shoulderUpRight < -5) values['بالا آمدن شانه - راست'] = "1";

    degrees.push({
        landmarksUsed: [12, 14],
        degree: Math.abs(shoulderUpRight),
        value: values['بالا آمدن شانه - راست']
    })

    const shoulderUpLeft = degreeTwoPoints(landmarks[11], landmarks[13]);
    if (shoulderUpLeft > -175 && shoulderUpLeft < 0) values['بالا آمدن شانه - چپ'] = "1";

    degrees.push({
        landmarksUsed: [11, 13],
        degree: 180 - Math.abs(shoulderUpLeft),
        value: values['بالا آمدن شانه - چپ']
    })

    return {
        values,
        degrees
    };
}

export default HandsRotate_P;