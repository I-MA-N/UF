import ProtectedRoute from "../pages/authentication/ProtectedRoute";
import Manager from "../pages/dashbord/manager/Manager";
import AddMentor from "../pages/dashbord/manager/membersList/editMentors/addMentor/AddMentor";
import AddMentor2 from "../pages/dashbord/manager/membersList/editMentors/addMentor/AddMentor2";
import NewMentorContextProvider from "../pages/dashbord/manager/membersList/editMentors/addMentor/context/NewMentorContextProvider";
import EditMentors from "../pages/dashbord/manager/membersList/editMentors/EditMentors";
import MembersList from "../pages/dashbord/manager/membersList/MembersList";
import Reports from "../pages/dashbord/manager/reports/Reports";

const managerRoutes = [
   {
      path: '/manager',
      element: <ProtectedRoute>
         <Manager />
      </ProtectedRoute>
   },
   {
      path: '/manager/memberslist',
      element: <ProtectedRoute>
         <MembersList />
      </ProtectedRoute>
   },
   {
      path: '/manager/memberslist/editmentors',
      element: <ProtectedRoute>
         <EditMentors />
      </ProtectedRoute>
   },
   {
      path: '/manager/memberslist/editmentors/addmentor',
      element: <ProtectedRoute>
         <NewMentorContextProvider>
            <AddMentor />
         </NewMentorContextProvider>
      </ProtectedRoute>
   },
   {
      path: '/manager/memberslist/editmentors/addmentor2',
      element: <ProtectedRoute>
         <NewMentorContextProvider>
            <AddMentor2 />
         </NewMentorContextProvider>
      </ProtectedRoute>
   },
   {
      path: '/manager/reports',
      element: <ProtectedRoute>
         <Reports />
      </ProtectedRoute>
   },
]

export default managerRoutes;