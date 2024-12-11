import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import DegreeDistanceType from "../../../../../../types/DegreeDistanceType";

function SquatBack_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'اسکات خلفی انتقال نامتقارن': '0',
        'اسکات خلفی بلند شدن پاشنه': '0',
        'اسکات خلفی صاف شدن پا': '0',
    }
    const degrees: DegreeType[] = [];
    const degreesDistances: DegreeDistanceType[] = [];

    {
        const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
        if (asis >= 2.5) values["اسکات خلفی انتقال نامتقارن"] = "1";

        degrees.push({
            landmarksUsed: [23, 24],
            degree: asis,
            value: values["اسکات خلفی انتقال نامتقارن"]
        })
    }

    if (editCanvasSize && userHeight) {
        const centimeters = userHeight - 12;
        const pixels = (landmarks[32].y - landmarks[0].y) * editCanvasSize.height;
        const ratio = centimeters / pixels;

        degrees.push({
            landmarksUsed: [32, 0],
            degree: null,
            value: null
        })

        {
            const heelsPixelRight = (landmarks[32].y - landmarks[30].y) * editCanvasSize.height;
            const heelsCentimetersRight = heelsPixelRight * ratio;
            let heelsRight = 0;
            if (heelsCentimetersRight > 5) heelsRight = 1;

            const heelsPixelLeft = (landmarks[31].y - landmarks[29].y) * editCanvasSize.height;
            const heelsCentimetersLeft = heelsPixelLeft * ratio;
            let heelsLeft = 0;
            if (heelsCentimetersLeft > 5) heelsLeft = 1;

            values["اسکات خلفی بلند شدن پاشنه"] = Math.max(heelsRight, heelsLeft).toString();

            const footRight = 180 - Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
            let footRightS = 0;
            if (footRight < 75) footRightS = 1;

            const footLeft = 180 - Math.abs(degreeTwoPoints(landmarks[29], landmarks[31]));
            let footLeftS = 0;
            if (footLeft < 75) footLeftS = 1;

            values["اسکات خلفی صاف شدن پا"] = Math.max(footRightS, footLeftS).toString();

            degreesDistances.push({
                landmarksUsed: [32, 30],
                degreesDistances: [footRight, heelsCentimetersRight],
                values: [footRightS.toString(), heelsRight.toString()]
            })

            degreesDistances.push({
                landmarksUsed: [31, 29],
                degreesDistances: [footLeft, heelsCentimetersLeft],
                values: [footLeftS.toString(), heelsLeft.toString()]
            })
        }
    }

    return {
        values,
        degrees,
        degreesDistances
    }
}

export default SquatBack_P;