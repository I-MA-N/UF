import { useNavigate, useParams } from "react-router-dom";
import GProgram from "../../../api/common/GProgram";
import Container from "../../common/Container";
import PrevBtn from "../../common/PrevBtn";
import Program from "./Program";
import Loading from "../../common/Loading";
import ErrorElem from "./components/errorElem/ErrorElem";

function ProgramFirstLoad() {
   const { program, formname, username } = useParams();
   const { data, isError, isPending } = GProgram(program, username, formname);
   const navigate = useNavigate();

   if (isPending) return <Loading fillScreen />;

   if (isError || !data) {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">در ارتباط با سرور مشکلی رخ داده است!</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if ("errorMsg" in data) {
      return <ErrorElem data={data} />
   }

   return (
      <Program programData={data} username={username!} />
   );
};

export default ProgramFirstLoad;