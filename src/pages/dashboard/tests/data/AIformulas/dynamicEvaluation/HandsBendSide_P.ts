import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreesType from "../../../../../../types/DegreesType";

function HandsBendSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
    }
    const degrees: DegreesType[] = [];

    return {
        values,
        degrees
    };
}

export default HandsBendSide_P;