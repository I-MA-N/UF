import { useNavigate, useParams } from "react-router-dom";
import AddSimpleuser from "./CheckUserName";
import PrevBtn from "../../../common/PrevBtn";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import { useMemo } from "react";
import splitArr from "../../../../utils/splitArr";

function CheckUserNameFirstLoad() {
   const params = useParams();
   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), [userData])
   const navigate = useNavigate();

   if (params?.orgName && orgNames.includes(params.orgName)) {
      return <AddSimpleuser orgName={params.orgName} />
   }

   return <div>
      <p className="text-yellow text-xs mb-4">نام سازمان اشتباه است!</p>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard/members')} />
   </div>
}

export default CheckUserNameFirstLoad