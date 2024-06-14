import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import splitArr from "../../../../utils/splitArr";
import mentorGSimpleusersData from "../../../../api/mentor/mentorGSimpleusersData";
import PrevBtn from "../../../common/PrevBtn";
import Members from "./Members";

function MembersFirstLoad() {
   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);
   const [orgSelected, setOrgSelected] = useState(orgNames[0]);

   const { data, isError, isPending } = mentorGSimpleusersData(orgSelected);

   const navigate = useNavigate();

   if (isPending) return <h1>Loading...</h1>

   if (data && !isError) {
      return <Members orgSelected={orgSelected} setOrgSelected={setOrgSelected} orgNames={orgNames} users={data} />
   }

   return <div>
      <p className="text-yellow text-xs mb-4">مشکلی در دریافت اطلاعات مورد نیاز بوجود آمده است!</p>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard')} />
   </div>
}

export default MembersFirstLoad