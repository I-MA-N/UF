import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingBack_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'راه رفتن بالا آمدن ران': "0",
        'راه رفتن صاف شدن و چرخش به خارج پاها': '0',
    }
    const degrees: DegreeType[] = [];

    {
        const asis = -1 * degreeTwoPoints(landmarks[24], landmarks[23]);

        if (asis >= 3 || asis <= -3) values["راه رفتن بالا آمدن ران"] = "1";

        degrees.push({
            landmarksUsed: [23, 24],
            degree: asis,
            value: values["راه رفتن بالا آمدن ران"]
        })
    }

    {
        let footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
        let zaribRight = -1;
        if (footRight > 90) { footRight = 180 - footRight; zaribRight = 1; }
        footRight = zaribRight * (90 - footRight);
  
        let footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31]));
        let zaribLeft = 1;
        if (footLeft > 90) { footLeft = 180 - footLeft; zaribLeft = -1; }
        footLeft = zaribLeft * (90 - footLeft);
        
        let footRightValue = 0;
        if (footRight > 20 || footRight < 5) footRightValue = 1;

        let footLeftValue = 0;
        if (footLeft > 20 || footLeft < 5) footLeftValue = 1;

        values['راه رفتن صاف شدن و چرخش به خارج پاها'] = Math.max(footRightValue, footLeftValue).toString();

        degrees.push({
            landmarksUsed: [30, 32],
            degree: footRight,
            value: footRightValue.toString()
        })

        degrees.push({
            landmarksUsed: [29, 31],
            degree: footLeft,
            value: footLeftValue.toString()
        })
    }

    return {
        values,
        degrees
    };
}

export default WalkingBack_P;