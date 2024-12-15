import Aboutus from "../pages/aboutus/Aboutus";
import FormsFirstLoad from "../pages/dashboard/manager/forms/FormsFirstLoad";
import ReportsFirstLoad from "../pages/dashboard/manager/forms/reports/ReportsFirstLoad";
import Manager from "../pages/dashboard/manager/Manager";
import AddMentor from "../pages/dashboard/manager/membersList/editMentors/addMentor/AddMentor";
import EditMentorsFirstLoad from "../pages/dashboard/manager/membersList/editMentors/EditMentorsFirstLoad";
import MembersFirstLoad from "../pages/dashboard/manager/membersList/MembersFirstLoad";
import Home from "../pages/home/Home";

const managerRoutes = [
   {
      path: '/manager/home',
      element: <Home />
   },
   {
      path: '/manager/aboutus',
      element: <Aboutus />
   },
   {
      path: '/manager/dashboard',
      element: <Manager />
   },
   {
      path: '/manager/dashboard/memberslist',
      element: <MembersFirstLoad />
   },
   {
      path: '/manager/dashboard/memberslist/editmentors',
      element: <EditMentorsFirstLoad />
   },
   {
      path: '/manager/dashboard/memberslist/editmentors/addmentor',
      element: <AddMentor />
   },
   {
      path: '/manager/dashboard/forms',
      element: <FormsFirstLoad />
   },
   {
      path: '/manager/dashboard/forms/reports',
      element: <ReportsFirstLoad />
   },
]

export default managerRoutes;