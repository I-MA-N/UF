import { useNavigate } from "react-router-dom";
import Container from "../../../../../common/Container";
import PrevBtn from "../../../../../common/PrevBtn";

function NoDataElem() {
   const navigate = useNavigate();

   return (
      <Container>
         <h1 className="mb-6 lg:text-lg text-center">اطلاعاتی برای این فرم پیدا نشد!</h1>
         <PrevBtn type="button" onClick={() => navigate('/manager/dashboard/forms')} />
      </Container>
   );
};

export default NoDataElem;