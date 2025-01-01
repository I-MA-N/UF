import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatSide_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'اسکات جانبی خمیدگی به جلو': "0",
        'اسکات جانبی دست ها در جلو': "0",
        'اسکات جانبی کمر صاف': "0",
        'اسکات جانبی گود شدن کمر': "0",
    }
    const degrees: DegreeType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const asisLandmark = isEven ? 24 : 23;
    const shoulderLandmark = isEven ? 12 : 11;

    {
        const asisShoulder = 180 - Math.abs(degreeTwoPoints(landmarks[asisLandmark], landmarks[shoulderLandmark]));

        const footLandmark = isEven ? 28 : 27;
        const kneeLandmark = isEven ? 26 : 25;
        const footKnee = 180 - Math.abs(degreeTwoPoints(landmarks[footLandmark], landmarks[kneeLandmark]));

        const delta = Math.abs(asisShoulder - footKnee);
        if (delta > 15) values["اسکات جانبی خمیدگی به جلو"] = "1";

        degrees.push({
            landmarksUsed: [asisLandmark, shoulderLandmark],
            degree: asisShoulder,
            value: values["اسکات جانبی خمیدگی به جلو"]
        }, {
            landmarksUsed: [footLandmark, kneeLandmark],
            degree: footKnee,
            value: values["اسکات جانبی خمیدگی به جلو"]
        })
    }

    {
        const handLandmark = isEven ? 16 : 15;
        let arms = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[handLandmark]);
        if (!isEven) arms = 180 - arms;

        if (arms < 0) {
            values["اسکات جانبی دست ها در جلو"] = "1";
        } else {
            if (arms > 170) values["اسکات جانبی دست ها در جلو"] = "1";
        }

        degrees.push({
            landmarksUsed: [shoulderLandmark, handLandmark],
            degree: arms,
            value: values["اسکات جانبی دست ها در جلو"]
        })
    }

    if (editCanvasSize && userHeight) {
        const bottomLandmark = isEven ? 32 : 31;
        const centimeters = userHeight - 12;
        const pixels = (landmarks[bottomLandmark].y - landmarks[0].y) * editCanvasSize.height;
        const ratio = centimeters / pixels;

        degrees.push({
            landmarksUsed: [bottomLandmark, 0],
            degree: null,
            value: null
        })

        const H = (Math.abs(landmarks[37].x - landmarks[34].x)) * editCanvasSize.width;
        const HCentimeters = H * ratio;
        const L = (landmarks[35].y - landmarks[34].y) * editCanvasSize.height;
        const LCentimeters = L * ratio;
        const lumbarLordosisRadians = 4 * Math.atan((2 * HCentimeters) / LCentimeters);
        const lumbarLordosis = lumbarLordosisRadians * (180 / Math.PI);

        if (lumbarLordosis > 50) values["اسکات جانبی گود شدن کمر"] = "1";
        if (lumbarLordosis < 30) values["اسکات جانبی کمر صاف"] = "1";

        let lumbarLordosisValue = "0";
        if (values["اسکات جانبی گود شدن کمر"] === "1" || values["اسکات جانبی کمر صاف"] === "1") {
            lumbarLordosisValue = "1";
        }

        degrees.push({
            landmarksUsed: [34, 37, 35],
            degree: lumbarLordosis,
            value: lumbarLordosisValue
        })
    }

    return {
        values,
        degrees
    }
}

export default SquatSide_P;