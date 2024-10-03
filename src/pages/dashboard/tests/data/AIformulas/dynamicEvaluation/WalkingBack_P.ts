import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'بالا آمدن ران': "0",
        'صاف شدن و چرخش به خارج پاها': "0",
    }
    const degrees: DegreeType[] = [];

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    if (asis >= 2.5) values["بالا آمدن ران"] = "1";

    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
        value: values["بالا آمدن ران"]
    })

    const foot = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
    if (foot >= 15) values["صاف شدن و چرخش به خارج پاها"] = "1";

    degrees.push({
        landmarksUsed: [29, 31],
        degree: foot,
        value: values["صاف شدن و چرخش به خارج پاها"]
    })

    return {
        values,
        degrees
    };
}

export default WalkingBack_P;