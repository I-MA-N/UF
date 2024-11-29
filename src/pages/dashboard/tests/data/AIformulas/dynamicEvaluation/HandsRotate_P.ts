import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsRotate_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'چرخش دست ها بالاآمدن شانه ها': '0',
    }
    const degrees: DegreeType[] = [];

    const shoulderUpRight = degreeTwoPoints(landmarks[12], landmarks[14]);
    let shoulderUpRightValue = 0;
    if (shoulderUpRight < -5) shoulderUpRightValue = 1;

    const shoulderUpLeft = degreeTwoPoints(landmarks[11], landmarks[13]);
    let shoulderUpLeftValue = 0;
    if (shoulderUpLeft > -175 && shoulderUpLeft < 0) shoulderUpLeftValue = 1;

    values["چرخش دست ها بالاآمدن شانه ها"] = Math.max(shoulderUpRightValue, shoulderUpLeftValue).toString();

    degrees.push({
        landmarksUsed: [12, 14],
        degree: Math.abs(shoulderUpRight),
        value: shoulderUpRightValue.toString()
    })

    degrees.push({
        landmarksUsed: [11, 13],
        degree: 180 - Math.abs(shoulderUpLeft),
        value: shoulderUpLeftValue.toString()
    })

    return {
        values,
        degrees
    };
}

export default HandsRotate_P;