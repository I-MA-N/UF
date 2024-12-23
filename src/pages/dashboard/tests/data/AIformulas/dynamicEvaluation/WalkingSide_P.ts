import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingSide_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'راه رفتن سر به جلو': "0",
        'راه رفتن شانه ها گرد می شود': "0",
        'راه رفتن گود شدن کمر': "0",
    }
    const degrees: DegreeType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    {
        const earLandmark = isEven ? 8 : 7;
        let earC7 = Math.abs(degreeTwoPoints(landmarks[earLandmark], landmarks[33]));
        if (!isEven) earC7 = 180 - earC7;
        if (earC7 <= 70) values["راه رفتن سر به جلو"] = "1";

        degrees.push({
            landmarksUsed: [earLandmark, 33],
            degree: earC7,
            value: values["راه رفتن سر به جلو"]
        })
    }

    {
        const shoulderLandmark = isEven ? 12 : 11;
        let shoulderC7 = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[33]);
        if (!isEven) shoulderC7 = 180 - shoulderC7;
        if (shoulderC7 <= 50) values["راه رفتن شانه ها گرد می شود"] = "1";

        degrees.push({
            landmarksUsed: [shoulderLandmark, 33],
            degree: shoulderC7,
            value: values["راه رفتن شانه ها گرد می شود"]
        })
    }

    if (editCanvasSize && userHeight) {
        const bottomLandmark = isEven ? 32 : 31;
        const centimeters = userHeight - 12;
        const pixels = (landmarks[bottomLandmark].y - landmarks[0].y) * editCanvasSize.height;
        const ratio = centimeters / pixels;

        degrees.push({
            landmarksUsed: [32, 0],
            degree: null,
            value: null
        })

        const H = (Math.abs(landmarks[37].x - landmarks[34].x)) * editCanvasSize.width;
        const HCentimeters = H * ratio;
        const L = (landmarks[35].y - landmarks[34].y) * editCanvasSize.height;
        const LCentimeters = L * ratio;
        const lumbarLordosisRadians = 4 * Math.atan((2 * HCentimeters) / LCentimeters);
        const lumbarLordosis = lumbarLordosisRadians * (180 / Math.PI);

        if (lumbarLordosis >= 45) values["راه رفتن گود شدن کمر"] = "1";

        degrees.push({
            landmarksUsed: [34, 37, 35],
            degree: lumbarLordosis,
            value: values["راه رفتن گود شدن کمر"]
        })
    }

    return {
        values,
        degrees
    };
}

export default WalkingSide_P;