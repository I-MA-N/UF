import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsOut_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'دور شدن دست ها بالا آمدن شانه': '0',
        'دور شدن دست ها خم شدن آرنج ها': '0',
    }
    const degrees: DegreeType[] = [];

    {
        const shoulderUpRight = -1 * degreeTwoPoints(landmarks[12], landmarks[14]);

        let shoulderUpLeft = -1 * degreeTwoPoints(landmarks[11], landmarks[13]);
        if (shoulderUpLeft > 0) shoulderUpLeft = 180 - shoulderUpLeft;
        else shoulderUpLeft = -1 * (shoulderUpLeft + 180);

        let shoulderUpRightValue = 0;
        if (shoulderUpRight > 5) shoulderUpRightValue = 1;

        let shoulderUpLeftValue = 0;
        if (shoulderUpLeft > 5) shoulderUpLeftValue = 1;

        values["دور شدن دست ها بالا آمدن شانه"] = Math.max(shoulderUpRightValue, shoulderUpLeftValue).toString();

        degrees.push({
            landmarksUsed: [12, 14],
            degree: shoulderUpRight,
            value: shoulderUpRightValue.toString()
        })

        degrees.push({
            landmarksUsed: [11, 13],
            degree: shoulderUpLeft,
            value: shoulderUpLeftValue.toString()
        })
    }

    {
        const elbowRight = degreeTwoPoints(landmarks[14], landmarks[16]);

        let elbowLeft = degreeTwoPoints(landmarks[13], landmarks[15]);
        if (elbowLeft > 0) elbowLeft = 180 - elbowLeft;
        else elbowLeft = -1 * (elbowLeft + 180);

        let elbowRightValue = 0;
        if (elbowRight > 15) elbowRightValue = 1;

        let elbowLeftValue = 0;
        if (elbowLeft > 15) elbowLeftValue = 1;

        values["دور شدن دست ها خم شدن آرنج ها"] = Math.max(elbowRightValue, elbowLeftValue).toString();

        degrees.push({
            landmarksUsed: [14, 16],
            degree: elbowRight,
            value: elbowRightValue.toString()
        })

        degrees.push({
            landmarksUsed: [13, 15],
            degree: elbowLeft,
            value: elbowLeftValue.toString()
        })
    }

    return {
        values,
        degrees
    };
}

export default HandsOut_P;