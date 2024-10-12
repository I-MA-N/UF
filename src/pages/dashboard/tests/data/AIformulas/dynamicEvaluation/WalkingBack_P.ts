import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'بالاآمدن ران': "0",
        'چرخش داخلی یا خارجی پا راست': '0',
        'چرخش داخلی یا خارجی پا چپ': '0',
    }
    const degrees: DegreeType[] = [];

    const asis = 180 - Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
    if (asis >= 2.5) values["بالاآمدن ران"] = "1";

    degrees.push({
        landmarksUsed: [23, 24],
        degree: asis,
        value: values["بالاآمدن ران"]
    })

    const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
    if (footRight > 105 || footRight < 75) values['چرخش داخلی یا خارجی پا راست'] = "1";

    degrees.push({
        landmarksUsed: [30, 32],
        degree: footRight,
        value: values['چرخش داخلی یا خارجی پا راست']
    })

    const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31]));
    if (footLeft < 75 || footLeft > 105) values['چرخش داخلی یا خارجی پا چپ'] = "1";

    degrees.push({
        landmarksUsed: [29, 31],
        degree: footLeft,
        value: values['چرخش داخلی یا خارجی پا چپ']
    })

    return {
        values,
        degrees
    };
}

export default WalkingBack_P;