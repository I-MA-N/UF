import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import DegreeDistanceType from "../../../../../../types/DegreeDistanceType";

function SquatBack_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
    const values = {
        'انتقال نامتقارن': '0',
        'بلند شدن پاشنه راست': '0',
        'بلند شدن پاشنه چپ': '0',
        'چرخش پا به خارج راست': '0',
        'چرخش پا به خارج چپ': '0',
    }
    const degrees: DegreeType[] = [];
    const degreesDistances: DegreeDistanceType[] = [];

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    if (asis >= 2.5) values["انتقال نامتقارن"] = "1";

    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
        value: values["انتقال نامتقارن"]
    })

    if (editCanvasSize && userHeight) {
        const centimeters = userHeight - 12;
        const pixels = (landmarks[32].y - landmarks[0].y) * editCanvasSize.height;
        const ratio = centimeters / pixels;

        const heelsPixelRight = (landmarks[32].y - landmarks[30].y) * editCanvasSize.height;
        const heelsCentimetersRight = heelsPixelRight * ratio;
        if (heelsCentimetersRight > 5) values["بلند شدن پاشنه راست"] = "1";

        const footRight = 180 - Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
        if (footRight < 75) values["چرخش پا به خارج راست"] = "1";

        degreesDistances.push({
            landmarksUsed: [32, 30],
            degreesDistances: [footRight, heelsCentimetersRight],
            values: [values["چرخش پا به خارج راست"], values["بلند شدن پاشنه راست"]]
        })

        const heelsPixelLeft = (landmarks[31].y - landmarks[29].y) * editCanvasSize.height;
        const heelsCentimetersLeft = heelsPixelLeft * ratio;
        if (heelsCentimetersLeft > 5) values["بلند شدن پاشنه چپ"] = "1";

        const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31]));
        if (footLeft < 75) values["چرخش پا به خارج چپ"] = "1";

        degreesDistances.push({
            landmarksUsed: [31, 29],
            degreesDistances: [footLeft, heelsCentimetersLeft],
            values: [values["چرخش پا به خارج چپ"], values["بلند شدن پاشنه چپ"]]
        })
    }

    return {
        values,
        degrees,
        degreesDistances
    }
}

export default SquatBack_P;