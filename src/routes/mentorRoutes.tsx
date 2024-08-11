import Aboutus from "../pages/aboutus/Aboutus";
import Mentor from "../pages/dashboard/mentor/Mentor";
import Home from "../pages/home/Home";
import MembersFirstLoad from "../pages/dashboard/mentor/memebersList/MembersFirstLoad";
import CheckUserNameFirstLoad from "../pages/dashboard/mentor/addSimpleuser/CheckUserNameFirstLoad";
import FormsFirstLoad from "../pages/dashboard/mentor/forms/FormsFirstLoad";

const mentorRoutes = [
   {
      path: '/mentor/home',
      element: <Home />
   },
   {
      path: '/mentor/aboutus',
      element: <Aboutus />
   },
   {
      path: '/mentor/dashboard',
      element: <Mentor />
   },
   {
      path: '/mentor/dashboard/members',
      element: <MembersFirstLoad />
   },
   {
      path: '/mentor/dashboard/members/:orgName',
      element: <CheckUserNameFirstLoad />
   },
   {
      path: '/mentor/dashboard/members/:orgName/:username',
      element: <FormsFirstLoad />
   },
]

export default mentorRoutes;