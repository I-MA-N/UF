import { useNavigate, useParams } from "react-router-dom";
import GFormData from "../../../../api/common/form/GFormData";
import Loading from "../../../common/Loading";
import Container from "../../../common/Container";
import PrevBtn from "../../../common/PrevBtn";
import Landmarks from "./Landmarks";

function LandmarksFirstLoad() {
   const { role, formname, username } = useParams();
   const navigate = useNavigate();

   const { data, isPending } = GFormData(username, formname);

   if (isPending) return <Loading />

   if (typeof data === "string") return <Container>
      <h1 className="mb-6 lg:text-lg text-center">{data}</h1>
      <PrevBtn type="button" onClick={() => navigate(-1)} />
   </Container>

   if (role && username && formname && data.access !== 'false') return (
      <Landmarks username={username} />
   )
};

export default LandmarksFirstLoad;