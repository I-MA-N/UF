import { useNavigate, useParams } from "react-router-dom";
import AddSimpleuser from "./CheckUserName";
import PrevBtn from "../../../common/PrevBtn";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import { useMemo } from "react";
import splitArr from "../../../../utils/splitArr";
import Container from "../../../common/Container";

function CheckUserNameFirstLoad() {
   const params = useParams();
   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), [userData])
   const navigate = useNavigate();

   if (params?.orgName && orgNames.includes(params.orgName)) {
      return <AddSimpleuser orgName={params.orgName} />
   }

   return <Container>
      <p className="text-lg text-yellow mb-4">نام سازمان اشتباه است!</p>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
   </Container>
}

export default CheckUserNameFirstLoad