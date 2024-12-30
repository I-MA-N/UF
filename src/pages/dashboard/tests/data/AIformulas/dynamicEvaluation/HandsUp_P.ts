import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsUp_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'خم شدن دست ها خم شدن آرنج': '0',
    }
    const degrees: DegreeType[] = [];

    {
        const elbowRight = Math.abs(degreeTwoPoints(landmarks[14], landmarks[16]));
        let elbowRightValue = 0;
        if (elbowRight > 120) elbowRightValue = 1;

        const elbowLeft = 180 - Math.abs(degreeTwoPoints(landmarks[13], landmarks[15]));
        let elbowLeftValue = 0;
        if (elbowLeft > 120) elbowLeftValue = 1;

        values["خم شدن دست ها خم شدن آرنج"] = Math.max(elbowRightValue, elbowLeftValue).toString();

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

export default HandsUp_P;