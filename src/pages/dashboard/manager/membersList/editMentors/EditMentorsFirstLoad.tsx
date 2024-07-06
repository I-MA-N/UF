import managerGMentorsInfo from "../../../../../api/manager/managerGMentorsInfo";
import EditMentors from "./EditMentors";
import NoMentorsElem from "./components/NoMentorsElem";

function EditMentorsFirstLoad() {
   const { data, isPending, isError } = managerGMentorsInfo();

   if (isPending) return <h1>Loading...</h1>

   if (data && !isError) {
      return <EditMentors mentors={data} />
   }

   return <NoMentorsElem />
};

export default EditMentorsFirstLoad;