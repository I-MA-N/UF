import { useNavigate, useParams } from "react-router-dom";
import PProgram from "../../../api/common/PProgram";
import Container from "../../common/Container";
import PrevBtn from "../../common/PrevBtn";
import Program from "./Program";

function ProgramFirstLoad() {
   const { program, formname, username } = useParams();
   const { data, isError, isPending } = PProgram(program, username, formname);
   const navigate = useNavigate();

   if (isPending) return <h1>Loading...</h1>;

   if (isError || !data ) {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">در ارتباط با سرور مشکلی رخ داده است!</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   if (typeof data === "string") {
      return <Container>
         <h1 className="mb-6 lg:text-lg text-center">{data}</h1>
         <PrevBtn type="button" onClick={() => navigate(-1)} />
      </Container>
   }

   return (
      <Program programData={data} username={username!} />
   );
};

export default ProgramFirstLoad;