import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreesType from "../../../../../../types/DegreesType";

function WalkingBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'بالا آمدن ران': "0",
        'صاف شدن و چرخش به خارج پاها': "0",
    }
    const degrees: DegreesType[] = [];

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
    })

    if (asis >= 2.5) values["بالا آمدن ران"] = "1";

    const foot = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
    degrees.push({
        landmarksUsed: [29, 31],
        degree: foot,
    })

    if (foot >= 15) values["صاف شدن و چرخش به خارج پاها"] = "1";

    return {
        values,
        degrees
    };
}

export default WalkingBack_P;