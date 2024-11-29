import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SquatFront_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'اسکات قدامی حرکت زانوها به خارج': "0",
        'اسکات قدامی حرکت زانوها به داخل': "0",
        'اسکات قدامی چرخش به خارج پاها': "0",
        'اسکات قدامی صاف شدن پاها': "0",
    }
    const degrees: DegreeType[] = [];

    {
        const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
        const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
        const kneeRight = kneeTopRight + kneeBottomRight;

        const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
        const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
        const kneeLeft = kneeTopLeft + kneeBottomLeft;

        let kneeRightZ = 0;
        let kneeRightP = 0;
        if (kneeRight < 170) kneeRightZ = 1;
        if (kneeRight > 190) kneeRightP = 1;

        let kneeLeftZ = 0;
        let kneeLeftP = 0;
        if (kneeLeft < 170) kneeLeftZ = 1;
        if (kneeLeft > 190) kneeLeftP = 1;

        const kneeRightValue = Math.max(kneeRightZ, kneeRightP).toString();
        const kneeLeftValue = Math.max(kneeLeftZ, kneeLeftP).toString();

        values["اسکات قدامی حرکت زانوها به داخل"] = Math.max(kneeRightZ, kneeLeftZ).toString();
        values["اسکات قدامی حرکت زانوها به خارج"] = Math.max(kneeRightP, kneeLeftP).toString();

        degrees.push({
            landmarksUsed: [24, 26, 28],
            degree: kneeRight,
            value: kneeRightValue
        })

        degrees.push({
            landmarksUsed: [23, 25, 27],
            degree: kneeLeft,
            value: kneeLeftValue
        })
    }

    {
        const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
        const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;

        let footRightKh = 0;
        let footRightD = 0;
        if (footRight < 75) footRightKh = 1;
        if (footRight > 95) footRightD = 1;

        let footLeftKh = 0;
        let footLeftD = 0;
        if (footLeft > 15) footLeftKh = 1;
        if (footLeft < 0) footLeftD = 1;

        const footRightValue = Math.max(footRightKh, footRightD).toString();
        const footLeftValue = Math.max(footLeftKh, footLeftD).toString();

        values["اسکات قدامی چرخش به خارج پاها"] = Math.max(footRightKh, footLeftKh).toString();
        values["اسکات قدامی صاف شدن پاها"] = Math.max(footRightD, footLeftD).toString();

        degrees.push({
            landmarksUsed: [30, 32],
            degree: footRight,
            value: footRightValue
        })

        degrees.push({
            landmarksUsed: [29, 31],
            degree: footLeft,
            value: footLeftValue
        })
    }

    return {
        values,
        degrees
    };
}

export default SquatFront_P;