import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'راه رفتن بالا آمدن ران': "0",
        'راه رفتن صاف شدن و چرخش به خارج پاها': '0',
    }
    const degrees: DegreeType[] = [];

    {
        const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
        if (asis >= 2.5) values["راه رفتن بالا آمدن ران"] = "1";

        degrees.push({
            landmarksUsed: [23, 24],
            degree: asis,
            value: values["راه رفتن بالا آمدن ران"]
        })
    }

    {
        const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
        let footRightValue = 0;
        if (footRight > 105) footRightValue = 1;

        const footLeft = 180 - Math.abs(degreeTwoPoints(landmarks[29], landmarks[31]));
        let footLeftValue = 0;
        if (footLeft > 105) footLeftValue = 1;

        values['راه رفتن صاف شدن و چرخش به خارج پاها'] = Math.max(footRightValue, footLeftValue).toString();

        degrees.push({
            landmarksUsed: [30, 32],
            degree: footRight,
            value: footRightValue.toString()
        })

        degrees.push({
            landmarksUsed: [29, 31],
            degree: footLeft,
            value: footLeftValue.toString()
        })
    }

    return {
        values,
        degrees
    };
}

export default WalkingBack_P;