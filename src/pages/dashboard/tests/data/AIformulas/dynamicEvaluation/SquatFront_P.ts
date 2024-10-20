import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatFront_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'حرکت زانو به خارج راست': "0",
        'حرکت زانو به داخل راست': "0",
        'حرکت زانو به خارج چپ': "0",
        'حرکت زانو به داخل چپ': "0",
        'چرخش پا به خارج راست': "0",
        'چرخش پا به خارج چپ': "0",
        'چرخش پا به داخل راست': "0",
        'چرخش پا به داخل چپ': "0",
    }
    const degrees: DegreeType[] = [];

    const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
    const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
    const kneeSumRight = kneeTopRight + kneeBottomRight;
    if (kneeSumRight > 190) values["حرکت زانو به خارج راست"] = "1";
    if (kneeSumRight < 170) values["حرکت زانو به داخل راست"] = "1";

    const kneeSumRightValue = Number(values["حرکت زانو به خارج راست"]) || Number(values["حرکت زانو به داخل راست"]);
    degrees.push({
        landmarksUsed: [24, 26, 28],
        degree: kneeSumRight,
        value: kneeSumRightValue.toString()
    })

    const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
    const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
    const kneeSumLeft = kneeTopLeft + kneeBottomLeft;
    if (kneeSumLeft > 190) values["حرکت زانو به خارج چپ"] = "1";
    if (kneeSumLeft < 170) values["حرکت زانو به داخل چپ"] = "1";

    const kneeSumLeftValue = Number(values["حرکت زانو به خارج چپ"]) || Number(values["حرکت زانو به داخل چپ"]);
    degrees.push({
        landmarksUsed: [23, 25, 27],
        degree: kneeSumLeft,
        value: kneeSumLeftValue.toString()
    })

    const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
    if (footRight < 75) values["چرخش پا به خارج راست"] = "1";
    if (footRight > 95) values["چرخش پا به داخل راست"] = "1";

    const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
    if (footLeft > 15) values["چرخش پا به خارج چپ"] = "1";
    if (footLeft < 0) values["چرخش پا به داخل چپ"] = "1";

    const footRightValue = Number(values["چرخش پا به خارج راست"]) || Number(values["چرخش پا به داخل راست"]);
    const footLeftValue = Number(values["چرخش پا به خارج چپ"]) || Number(values["چرخش پا به داخل چپ"]);
    degrees.push({
        landmarksUsed: [30, 32],
        degree: footRight,
        value: footRightValue.toString()
    }, {
        landmarksUsed: [29, 31],
        degree: footLeft,
        value: footLeftValue.toString()
    })

    return {
        values,
        degrees
    };
}

export default SquatFront_P;