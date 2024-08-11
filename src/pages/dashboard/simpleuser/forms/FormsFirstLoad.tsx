import { useNavigate } from "react-router-dom";
import GFormNames from "../../../../api/common/form/GFormNames";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import Container from "../../../common/Container";
import PrevBtn from "../../../common/PrevBtn";
import Forms from "./Forms";
import Loading from "../../../common/Loading";

function FormsFirstLoad() {
   const navigate = useNavigate();

   const userData = useUserDataContext();
   const { data, isPending } = GFormNames(userData.username);

   if (isPending) return <Loading />

   if (typeof data === "string") return <Container>
      <h1 className="mb-6 lg:text-lg text-center">{data}</h1>
      <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard')} />
   </Container>

   if (data) return <Forms username={userData.username} formNames={data} />

   return <Container>
      <h1 className="mb-6 lg:text-lg text-center">اطلاعات کاربری اشتباه است. دریافت نام فرم ها با خطا مواجه شد!</h1>
      <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard')} />
   </Container>
}

export default FormsFirstLoad;