import DegreeType from "./DegreeType";
import DistanceType from "./DistanceType";

type DegreeDistanceType = {
   landmarksUsed: DegreeType["landmarksUsed"],
   degreesDistances: [DegreeType["degree"], DistanceType["distance"]],
   values: [DegreeType["value"], DistanceType["value"]],
}

export default DegreeDistanceType;