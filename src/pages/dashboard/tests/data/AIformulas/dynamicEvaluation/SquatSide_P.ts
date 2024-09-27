import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function SquatSide_P(landmarks: NormalizedLandmark[]) {
    const resultObj = {
        'خمیدگی به جلو': "0",
        'دست ها در جلو': "0",
    }

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const asisShoulder = 180 - Math.abs(degreeTwoPoints(isEven ? landmarks[24] : landmarks[23], isEven ? landmarks[12] : landmarks[11]));
    const footKnee = 180 - Math.abs(degreeTwoPoints(isEven ? landmarks[28] : landmarks[27], isEven ? landmarks[26] : landmarks[25]));
    const delta = Math.abs(asisShoulder - footKnee);
    if (delta > 15) resultObj["خمیدگی به جلو"] = "1";

    let arms = degreeTwoPoints(isEven ? landmarks[12] : landmarks[11], isEven ? landmarks[16] : landmarks[15]);
    if (!isEven) arms = 180 - arms;
    if (arms > 0) {
        const deltaArms = (45 - 15) - (180 - arms);
        if (deltaArms > 7.5) resultObj["دست ها در جلو"] = "1";
    }

    return resultObj
}

export default SquatSide_P;