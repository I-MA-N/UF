import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'راه رفتن سر به جلو': "0",
        'راه رفتن شانه ها گرد می شود': "0",
        // 'راه رفتن گود شدن کمر': "0",
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

    return {
        values,
        degrees
    };
}

export default WalkingSide_P;