import { useNavigate } from "react-router-dom";
import Container from "../../../common/Container";
import PrevBtn from "../../../common/PrevBtn";
import Forms from "./Forms";
import managerGFormNames from "../../../../api/manager/managerGFormNames";
import Loading from "../../../common/Loading";

function FormsFirstLoad() {
   const { data, isError, isPending } = managerGFormNames();
   const navigate = useNavigate();

   if (isPending) return <Loading fillScreen />

   if (!isError && data) return <Forms formNames={data} />

   return (
      <Container>
         <h1 className="mb-6 lg:text-lg text-center">دریافت نام فرم ها با خطا مواجه شد.</h1>
         <PrevBtn type="button" onClick={() => navigate('/manager/dashboard')} />
      </Container>
   );
};

export default FormsFirstLoad;