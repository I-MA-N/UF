import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import splitArr from "../../../../utils/splitArr";
import mentorGSimpleusersData from "../../../../api/mentor/mentorGSimpleusersData";
import PrevBtn from "../../../common/PrevBtn";
import Members from "./Members";
import Container from "../../../common/Container";
import Loading from "../../../common/Loading";

function MembersFirstLoad() {
   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);
   const [orgSelected, setOrgSelected] = useState(orgNames[0]);

   const { data, isError, isPending } = mentorGSimpleusersData(orgSelected);

   const navigate = useNavigate();

   if (isPending) return <Loading fillScreen />
   
   if (data && !isError) {
      return <Members orgSelected={orgSelected} setOrgSelected={setOrgSelected} orgNames={orgNames} users={data} />
   }

   return <Container>
      <h1 className="mb-6 lg:text-lg text-center">دریافت نام کاربران با مشکل مواجه شد!</h1>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard')} />
   </Container>
}

export default MembersFirstLoad