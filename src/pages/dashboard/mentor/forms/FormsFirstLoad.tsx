import { useNavigate, useParams } from "react-router-dom"
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import { useMemo } from "react";
import splitArr from "../../../../utils/splitArr";
import Forms from "./Forms";
import PrevBtn from "../../../common/PrevBtn";
import Container from "../../../common/Container";
import Loading from "../../../common/Loading";
import GFormNames from "../../../../api/common/form/GFormNames";

function FormsFirstLoad() {
   const params = useParams();
   const navigate = useNavigate();

   const { data, isError, isPending } = GFormNames(params?.username);

   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);

   if (isPending) return <Loading fillScreen />

   if (typeof data === "string") return <Container>
      <h1 className="mb-6 lg:text-lg text-center">{data}</h1>
      <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard')} />
   </Container>

   if (params?.orgName && params?.username && orgNames.includes(params.orgName) && data && !isError) {
      return <Forms username={params.username} formNames={data} />
   }

   return <Container>
      <h1 className="mb-6 lg:text-lg text-center">اطلاعات کاربری اشتباه است. دریافت نام فرم ها با خطا مواجه شد!</h1>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
   </Container>
}

export default FormsFirstLoad