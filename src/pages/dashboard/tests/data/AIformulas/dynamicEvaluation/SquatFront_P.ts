import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatFront_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'حرکت زانوها به خارج راست': "0",
        'حرکت زانوها به خارج چپ': "0",
        'حرکت زانوها به داخل راست': "0",
        'حرکت زانوها به داخل چپ': "0",
        'چرخش پاها به خارج راست': "0",
        'چرخش پاها به خارج چپ': "0",
    }
    const degrees: DegreeType[] = [];

    const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
    const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
    const kneeSumLeft = kneeTopLeft + kneeBottomLeft;
    if (kneeSumLeft <= 173) values["حرکت زانوها به داخل چپ"] = "1";
    if (kneeSumLeft >= 180) values["حرکت زانوها به خارج چپ"] = "1";

    degrees.push({
        landmarksUsed: [23, 25, 27],
        degree: kneeSumLeft,
        value: values["حرکت زانوها به داخل چپ"]
    })

    const kneeTopRight = Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
    const kneeBottomRight = 180 - Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
    const kneeSumRight = kneeTopRight + kneeBottomRight;
    if (kneeSumRight <= 173) values["حرکت زانوها به داخل چپ"] = "1";
    if (kneeSumRight >= 180) values["حرکت زانوها به خارج چپ"] = "1";

    degrees.push({
        landmarksUsed: [24, 26, 28],
        degree: kneeSumRight,
        value: values["حرکت زانوها به خارج چپ"]
    })

    const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
    const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
    if (footLeft >= 15) values["چرخش پاها به خارج چپ"] = "1";
    if (footRight < 75) values["چرخش پاها به خارج راست"] = "1";

    degrees.push({
        landmarksUsed: [29, 31],
        degree: footLeft,
        value: values["چرخش پاها به خارج چپ"]
    }, {
        landmarksUsed: [30, 32],
        degree: footRight,
        value: values["چرخش پاها به خارج راست"]
    })

    return {
        values,
        degrees
    };
}

export default SquatFront_P;