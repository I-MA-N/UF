import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreesType from "../../../../../../types/DegreesType";

function SquatSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'خمیدگی به جلو': "0",
        'دست ها در جلو': "0",
    }
    const degrees: DegreesType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const asisLandmark = isEven ? 24 : 23;
    const shoulderLandmark = isEven ? 12 : 11;
    const asisShoulder = 180 - Math.abs(degreeTwoPoints(landmarks[asisLandmark], landmarks[shoulderLandmark]));

    const footLandmark = isEven ? 28 : 27;
    const kneeLandmark = isEven ? 26 : 25;
    const footKnee = 180 - Math.abs(degreeTwoPoints(landmarks[footLandmark], landmarks[kneeLandmark]));

    degrees.push({
        landmarksUsed: [asisLandmark, shoulderLandmark],
        degree: asisShoulder,
    }, {
        landmarksUsed: [footLandmark, kneeLandmark],
        degree: footKnee,
    })

    const delta = Math.abs(asisShoulder - footKnee);
    if (delta > 15) values["خمیدگی به جلو"] = "1";

    const handLandmark = isEven ? 16 : 15;
    let arms = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[handLandmark]);
    if (!isEven) arms = 180 - arms;
    degrees.push({
        landmarksUsed: [handLandmark],
        degree: arms,
    })

    if (arms > 0) {
        const deltaArms = (45 - 15) - (180 - arms);
        if (deltaArms > 7.5) values["دست ها در جلو"] = "1";
    }

    return {
        values,
        degrees
    }
}

export default SquatSide_P;