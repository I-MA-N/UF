import Aboutus from "../pages/aboutus/Aboutus";
import Mentor from "../pages/dashboard/mentor/Mentor";
import Forms from "../pages/dashboard/mentor/forms/Forms";
import Tests from "../pages/dashboard/mentor/forms/tests/Tests";
import Home from "../pages/home/Home";
import MembersFirstLoad from "../pages/dashboard/mentor/memebersList/MembersFirstLoad";
import CheckUserNameFirstLoad from "../pages/dashboard/mentor/addSimpleuser/CheckUserNameFirstLoad";

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
      element: <Forms />
   },
   {
      path: '/mentor/dashboard/members/:orgName/:username/:formName',
      element: <Tests />
   },
   // {
   //    path: '/mentor/dashboard/memberslist',
   //    element: <MentoringContextProvider>
   //       <MembersList />
   //    </MentoringContextProvider>
   // },
   // {
   //    path: '/mentor/dashboard/addsimpleuser',
   //    element: <MentoringContextProvider>
   //       <AddSimpleuser />
   //    </MentoringContextProvider>
   // },
   // {
   //    path: '/mentor/dashboard/forms',
   //    element: <MentoringContextProvider>
   //       <Forms />
   //    </MentoringContextProvider>
   // },
   // {
   //    path: '/mentor/dashboard/forms/tests',
   //    element: <MentoringContextProvider>
   //       <Tests />
   //    </MentoringContextProvider>
   // },
]

export default mentorRoutes;