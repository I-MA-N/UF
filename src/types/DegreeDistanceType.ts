import DegreeType from "./DegreeType";

type DegreeDistanceType = {
   landmarksUsed: DegreeType["landmarksUsed"],
   degreesDistances: [number, number],
   values: [string, string],
}

export default DegreeDistanceType;