import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import DistanceType from "../../../../../../types/DistanceType";

function SwimSide_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'شنا گود شدن کمر': "0",
        'شنا صاف شدن کمر': "0",
        'شنا بالا آمدن شانه': "0",
        'شنا هایپراکستنشن گردن': "0"
    }
    const degrees: DegreeType[] = [];
    const distances: DistanceType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const shoulderLandmark = isEven ? 12 : 11;
    const asisLandmark = isEven ? 24 : 23;
    const kneeLandmark = isEven ? 26 : 25;

    {
        const shoulderAsisLandmark = 180 - Math.abs(degreeTwoPoints(landmarks[shoulderLandmark], landmarks[asisLandmark]));
        const asisKneeLandmark = Math.abs(degreeTwoPoints(landmarks[asisLandmark], landmarks[kneeLandmark]));
        const back = shoulderAsisLandmark + asisKneeLandmark;
        if (back < 150) values["شنا صاف شدن کمر"] = "1";
        if (back > 180) values["شنا گود شدن کمر"] = "1";

        const backValue = Number(values["شنا صاف شدن کمر"]) || Number(values["شنا گود شدن کمر"]);
        degrees.push({
            landmarksUsed: [shoulderLandmark, asisLandmark, kneeLandmark],
            degree: back,
            value: backValue.toString()
        })
    }

    if (editCanvasSize && userHeight) {
        const centimeters = userHeight - 12;
        const secondLandmark = isEven ? 30 : 29;
        const pixels = Math.abs(landmarks[0].x - landmarks[secondLandmark].x) * editCanvasSize.width;
        const ratio = centimeters / pixels;

        degrees.push({
            landmarksUsed: [0, secondLandmark],
            degree: null,
            value: null
        })

        {
            const startLandmark = isEven ? 12 : 33;
            const endLandmark = isEven ? 33 : 11;
            const shoulderNeckPixels = (landmarks[startLandmark].x - landmarks[endLandmark].x) * editCanvasSize.width;
            const shoulderNeck = shoulderNeckPixels * ratio;
            if (shoulderNeck > 0) values["شنا بالا آمدن شانه"] = "1";

            distances.push({
                landmarksUsed: [startLandmark, endLandmark],
                distance: shoulderNeck,
                value: values["شنا بالا آمدن شانه"]
            })
        }
    }

    {
        const earLandmark = isEven ? 8 : 7;
        const shoulderEar = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[earLandmark]);
        if (shoulderEar < -20) values["شنا هایپراکستنشن گردن"] = "1";

        degrees.push({
            landmarksUsed: [shoulderLandmark, earLandmark],
            degree: shoulderEar,
            value: values["شنا هایپراکستنشن گردن"]
        })
    }

    return {
        values,
        degrees,
        distances
    };
}

export default SwimSide_P;