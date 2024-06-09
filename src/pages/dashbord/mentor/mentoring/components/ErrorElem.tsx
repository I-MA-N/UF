import { useNavigate } from 'react-router-dom'
import Container from '../../../../common/Container';
import PrevBtn from '../../../../common/PrevBtn';

function ErrorElem() {
   const navigate = useNavigate();

   return (
      <Container>
         <h1>اطلاعات کاربری ناقص است!</h1>
         <PrevBtn type="button" onClick={() => navigate("/mentor/mentoring/memberslist", { replace: true })} className="mx-auto mt-8" />
      </Container>
   )
}

export default ErrorElem