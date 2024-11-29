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
        const shoulderUpRight = degreeTwoPoints(landmarks[12], landmarks[14]);
        let shoulderUpRightValue = 0;
        if (shoulderUpRight < -5) shoulderUpRightValue = 1;

        const shoulderUpLeft = degreeTwoPoints(landmarks[11], landmarks[13]);
        let shoulderUpLeftValue = 0;
        if (shoulderUpLeft > -175 && shoulderUpLeft < 0) shoulderUpLeftValue = 1;

        values["دور شدن دست ها بالا آمدن شانه"] = Math.max(shoulderUpRightValue, shoulderUpLeftValue).toString();

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
    }

    {
        const elbowRight = degreeTwoPoints(landmarks[14], landmarks[16]);
        let elbowRightValue = 0;
        if (elbowRight > 15) elbowRightValue = 1;
        
        const elbowLeft = degreeTwoPoints(landmarks[13], landmarks[15]);
        let elbowLeftValue = 0;
        if (elbowLeft < 175 && elbowLeft > 0) elbowLeftValue = 1;

        values["دور شدن دست ها خم شدن آرنج ها"] = Math.max(elbowRightValue, elbowLeftValue).toString();

        degrees.push({
            landmarksUsed: [14, 16],
            degree: Math.abs(elbowRight),
            value: elbowRightValue.toString()
        })

        degrees.push({
            landmarksUsed: [13, 15],
            degree: 180 - Math.abs(elbowLeft),
            value: elbowLeftValue.toString()
        })
    }

    return {
        values,
        degrees
    };
}

export default HandsOut_P;