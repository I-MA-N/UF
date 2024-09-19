import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function degreeTwoPoints(p1: NormalizedLandmark, p2: NormalizedLandmark) {
    const deltaX = p1.x - p2.x;
    const deltaY = p1.y - p2.y;

    const angleInRadians = Math.atan2(deltaY, deltaX);

    const angleInDegrees = angleInRadians * (180 / Math.PI);

    return angleInDegrees;
}

export default degreeTwoPoints;