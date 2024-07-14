import managerGMentorsInfo from "../../../../../api/manager/managerGMentorsInfo";
import Loading from "../../../../common/Loading";
import EditMentors from "./EditMentors";
import NoMentorsElem from "./components/NoMentorsElem";

function EditMentorsFirstLoad() {
   const { data, isPending, isError } = managerGMentorsInfo();

   if (isPending) return <Loading />

   if (data && !isError) {
      return <EditMentors mentors={data} />
   }

   return <NoMentorsElem />
};

export default EditMentorsFirstLoad;