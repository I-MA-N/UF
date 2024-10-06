import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SwimSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'گود شدن  کمر': "0",
        'صاف شدن کمر': "0",
        'هایپراکستنشن گردن': "0"
    }
    const degrees: DegreeType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const shoulderLandmark = isEven ? 12 : 11;
    const asisLandmark = isEven ? 24 : 23;
    const kneeLandmark = isEven ? 26 : 25;
    const shoulderAsisLandmark = 180 - Math.abs(degreeTwoPoints(landmarks[shoulderLandmark], landmarks[asisLandmark]));
    const asisKneeLandmark = Math.abs(degreeTwoPoints(landmarks[asisLandmark], landmarks[kneeLandmark]));
    const back = shoulderAsisLandmark + asisKneeLandmark;
    if (back < 150) values["صاف شدن کمر"] = "1";
    if (back > 180) values["گود شدن  کمر"] = "1";

    const backValue = Number(values["صاف شدن کمر"]) || Number(values["گود شدن  کمر"]);
    degrees.push({
        landmarksUsed: [shoulderLandmark, asisLandmark, kneeLandmark],
        degree: back,
        value: backValue.toString()
    })

    const earLandmark = isEven ? 8 : 7;
    const shoulderEar = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[earLandmark]);
    if (shoulderEar < -20) values["هایپراکستنشن گردن"] = "1";

    degrees.push({
        landmarksUsed: [shoulderLandmark, earLandmark],
        degree: shoulderEar,
        value: values["هایپراکستنشن گردن"]
    })

    return {
        values,
        degrees
    };
}

export default SwimSide_P;