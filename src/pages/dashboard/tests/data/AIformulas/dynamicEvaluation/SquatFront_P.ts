import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatFront_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'حرکت زانوی راست به خارج': "0",
        'حرکت زانوی راست به داخل': "0",
        'حرکت زانوی چپ به خارج': "0",
        'حرکت زانوی چپ به داخل': "0",
        'چرخش پای راست به خارج': "0",
        'چرخش پای چپ به خارج': "0",
        'چرخش پای راست به داخل': "0",
        'چرخش پای چپ به داخل': "0",
    }
    const degrees: DegreeType[] = [];

    const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
    const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
    const kneeSumRight = kneeTopRight + kneeBottomRight;
    if (kneeSumRight > 190) values["حرکت زانوی راست به خارج"] = "1";
    if (kneeSumRight < 170) values["حرکت زانوی راست به داخل"] = "1";

    const kneeSumRightValue = Number(values["حرکت زانوی راست به خارج"]) || Number(values["حرکت زانوی راست به داخل"]);
    degrees.push({
        landmarksUsed: [24, 26, 28],
        degree: kneeSumRight,
        value: kneeSumRightValue.toString()
    })

    const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
    const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
    const kneeSumLeft = kneeTopLeft + kneeBottomLeft;
    if (kneeSumLeft > 190) values["حرکت زانوی چپ به خارج"] = "1";
    if (kneeSumLeft < 170) values["حرکت زانوی چپ به داخل"] = "1";

    const kneeSumLeftValue = Number(values["حرکت زانوی چپ به خارج"]) || Number(values["حرکت زانوی چپ به داخل"]);
    degrees.push({
        landmarksUsed: [23, 25, 27],
        degree: kneeSumLeft,
        value: kneeSumLeftValue.toString()
    })

    const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
    if (footRight < 75) values["چرخش پای راست به خارج"] = "1";
    if (footRight > 95) values["چرخش پای راست به داخل"] = "1";

    const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
    if (footLeft > 15) values["چرخش پای چپ به خارج"] = "1";
    if (footLeft < 0) values["چرخش پای چپ به داخل"] = "1";

    const footRightValue = Number(values["چرخش پای راست به خارج"]) || Number(values["چرخش پای راست به داخل"]);
    const footLeftValue = Number(values["چرخش پای چپ به خارج"]) || Number(values["چرخش پای چپ به داخل"]);
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