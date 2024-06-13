import Aboutus from "../pages/aboutus/Aboutus";
import Mentor from "../pages/dashboard/mentor/Mentor";
import MentoringContextProvider from "../pages/dashboard/mentor/context/MentoringContextProvider";
import AddSimpleuser from "../pages/dashboard/mentor/addSimpleuser/AddSimpleuser";
import Forms from "../pages/dashboard/mentor/forms/Forms";
import Tests from "../pages/dashboard/mentor/forms/tests/Tests";
import MembersList from "../pages/dashboard/mentor/memebersList/MembersList";
import Home from "../pages/home/Home";

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
      path: '/mentor/dashboard/memberslist',
      element: <MentoringContextProvider>
         <MembersList />
      </MentoringContextProvider>
   },
   {
      path: '/mentor/dashboard/addsimpleuser',
      element: <MentoringContextProvider>
         <AddSimpleuser />
      </MentoringContextProvider>
   },
   {
      path: '/mentor/dashboard/forms',
      element: <MentoringContextProvider>
         <Forms />
      </MentoringContextProvider>
   },
   {
      path: '/mentor/dashboard/forms/tests',
      element: <MentoringContextProvider>
         <Tests />
      </MentoringContextProvider>
   },
]

export default mentorRoutes;