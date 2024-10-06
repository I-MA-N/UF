import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function HandsOutSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'خم شدن آرنج راست': '0',
        'خم شدن آرنج چپ': '0',
    }
    const degrees: DegreeType[] = [];

    const elbowRight = Math.abs(degreeTwoPoints(landmarks[14], landmarks[16]));
    const elbowLeft = Math.abs(degreeTwoPoints(landmarks[13], landmarks[15]));

    return {
        values,
        degrees
    };
}

export default HandsOutSide_P;