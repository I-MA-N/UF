import { useNavigate, useParams } from "react-router-dom"
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import { useMemo } from "react";
import splitArr from "../../../../utils/splitArr";
import mentorGFormNames from "../../../../api/mentor/mentorGFormNames";
import Forms from "./Forms";
import PrevBtn from "../../../common/PrevBtn";
import Container from "../../../common/Container";

function FormsFirstLoad() {
   const params = useParams();
   const navigate = useNavigate();

   const { data, isError, isPending } = mentorGFormNames(params?.username);

   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);

   if (isPending) return <h1>Loading...</h1>

   if (params?.orgName && params?.username && orgNames.includes(params.orgName) && data && !isError) {
      return <Forms username={params.username} formNames={data} />
   }

   return <Container>
      <p className="text-lg text-yellow mb-4">اطلاعات کاربری اشتباه است. دریافت نام فرم ها با خطا مواجه شد!</p>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
   </Container>
}

export default FormsFirstLoad