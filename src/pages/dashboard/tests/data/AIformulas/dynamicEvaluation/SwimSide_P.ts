import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function SwimSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'هایپراکستنشن گردن': "0"
    }
    const degrees: DegreeType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;

    const shoulderLandmark = isEven ? 12 : 11;
    const earLandmark = isEven ? 8 : 7;
    const shoulderEar = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[earLandmark]);
    degrees.push({
        landmarksUsed: [shoulderLandmark, earLandmark],
        degree: shoulderEar,
    })
    
    if (shoulderEar < -20) values["هایپراکستنشن گردن"] = "1";

    return {
        values,
        degrees
    };
}

export default SwimSide_P;