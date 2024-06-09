import ProtectedRoute from "../pages/authentication/ProtectedRoute";
import Mentor from "../pages/dashbord/mentor/Mentor";
import MentoringContextProvider from "../pages/dashbord/mentor/context/MentoringContextProvider";
import AddSimpleuser from "../pages/dashbord/mentor/mentoring/addSimpleuser/AddSimpleuser";
import Forms from "../pages/dashbord/mentor/mentoring/forms/Forms";
import Tests from "../pages/dashbord/mentor/mentoring/forms/tests/Tests";
import MembersList from "../pages/dashbord/mentor/mentoring/memebersList/MembersList";

const mentorRoutes = [
   {
      path: '/mentor',
      element: <ProtectedRoute>
         <Mentor />
      </ProtectedRoute>,
   },
   {
      path: '/mentor/mentoring/memberslist',
      element: <ProtectedRoute>
         <MentoringContextProvider>
            <MembersList />
         </MentoringContextProvider>
      </ProtectedRoute>,
   },
   {
      path: '/mentor/mentoring/addsimpleuser',
      element: <ProtectedRoute>
         <MentoringContextProvider>
            <AddSimpleuser />
         </MentoringContextProvider>
      </ProtectedRoute>,
   },
   {
      path: '/mentor/mentoring/forms',
      element: <ProtectedRoute>
         <MentoringContextProvider>
            <Forms />
         </MentoringContextProvider>
      </ProtectedRoute>,
   },
   {
      path: '/mentor/mentoring/forms/tests',
      element: <ProtectedRoute>
         <MentoringContextProvider>
            <Tests />
         </MentoringContextProvider>
      </ProtectedRoute>,
   },
]

export default mentorRoutes;