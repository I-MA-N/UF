import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import DegreeDistanceType from "../../../../../../types/DegreeDistanceType";

function SquatBack_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'اسکات خلفی انتقال نامتقارن ': '0',
        'اسکات خلفی بلند شدن پاشنه': '0',
        'اسکات خلفی صاف شدن پا': '0',
    }
    const degrees: DegreeType[] = [];
    const degreesDistances: DegreeDistanceType[] = [];

    {
        const asis = -1 * degreeTwoPoints(landmarks[24], landmarks[23]);
        if (asis >= 2.5 || asis <= -2.5) values["اسکات خلفی انتقال نامتقارن "] = "1";

        degrees.push({
            landmarksUsed: [23, 24],
            degree: asis,
            value: values["اسکات خلفی انتقال نامتقارن "]
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
            if (heelsCentimetersRight > 3) heelsRight = 1;

            const heelsPixelLeft = (landmarks[31].y - landmarks[29].y) * editCanvasSize.height;
            const heelsCentimetersLeft = heelsPixelLeft * ratio;
            let heelsLeft = 0;
            if (heelsCentimetersLeft > 3) heelsLeft = 1;

            values["اسکات خلفی بلند شدن پاشنه"] = Math.max(heelsRight, heelsLeft).toString();

            let ankleRight = Math.abs(degreeTwoPoints(landmarks[28], landmarks[30]));
            let zaribRight = -1;
            if (ankleRight > 90) { ankleRight = 180 - ankleRight; zaribRight = 1; }
            ankleRight = zaribRight * (90 - ankleRight);
      
            let ankleLeft = Math.abs(degreeTwoPoints(landmarks[27], landmarks[29]));
            let zaribLeft = 1;
            if (ankleLeft > 90) { ankleLeft = 180 - ankleLeft; zaribLeft = -1; }
            ankleLeft = zaribLeft * (90 - ankleLeft);

            let ankleRightKh = 0;
            if (ankleRight >= 2.5) ankleRightKh = 1;

            let ankleLeftKh = 0;
            if (ankleLeft >= 2.5) ankleLeftKh = 1;

            values["اسکات خلفی صاف شدن پا"] = Math.max(ankleRightKh, ankleLeftKh).toString();

            degreesDistances.push({
                landmarksUsed: [28, 30, 32],
                degreesDistances: [ankleRight, heelsCentimetersRight],
                values: [ankleRightKh.toString(), heelsRight.toString()]
            })

            degreesDistances.push({
                landmarksUsed: [27, 29, 31],
                degreesDistances: [ankleLeft, heelsCentimetersLeft],
                values: [ankleLeftKh.toString(), heelsLeft.toString()]
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