import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatSide_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'خمیدگی به جلو': "0",
        'دست ها در جلو': "0",
        'کمر صاف': "0",
        'گود شدن کمر': "0",
    }
    const degrees: DegreeType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const asisLandmark = isEven ? 24 : 23;
    const shoulderLandmark = isEven ? 12 : 11;
    const asisShoulder = 180 - Math.abs(degreeTwoPoints(landmarks[asisLandmark], landmarks[shoulderLandmark]));

    const footLandmark = isEven ? 28 : 27;
    const kneeLandmark = isEven ? 26 : 25;
    const footKnee = 180 - Math.abs(degreeTwoPoints(landmarks[footLandmark], landmarks[kneeLandmark]));

    const delta = Math.abs(asisShoulder - footKnee);
    if (delta > 15) values["خمیدگی به جلو"] = "1";
    degrees.push({
        landmarksUsed: [asisLandmark, shoulderLandmark],
        degree: asisShoulder,
        value: values["خمیدگی به جلو"]
    }, {
        landmarksUsed: [footLandmark, kneeLandmark],
        degree: footKnee,
        value: values["خمیدگی به جلو"]
    })

    const handLandmark = isEven ? 16 : 15;
    let arms = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[handLandmark]);
    if (!isEven) arms = 180 - arms;
    if (arms > 0) {
        const deltaArms = (45 - 15) - (180 - arms);
        if (deltaArms > 7.5) values["دست ها در جلو"] = "1";
    }

    degrees.push({
        landmarksUsed: [shoulderLandmark, handLandmark],
        degree: arms,
        value: values["دست ها در جلو"]
    })

    if (editCanvasSize && userHeight) {
        const centimeters = userHeight - 12;
        const bottomLandmark = isEven ? 32 : 31;
        const pixels = (landmarks[bottomLandmark].y - landmarks[0].y) * editCanvasSize.height;
        const ratio = centimeters / pixels;

        degrees.push({
            landmarksUsed: [bottomLandmark, 0],
            degree: null,
            value: null
        })
    }

    return {
        values,
        degrees
    }
}

export default SquatSide_P;