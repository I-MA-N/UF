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
      <h1 className="mb-8 lg:text-lg">نام سازمان اشتباه است!</h1>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
   </Container>
}

export default CheckUserNameFirstLoad