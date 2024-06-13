import Manager from "../pages/dashboard/manager/Manager";
import AddMentor from "../pages/dashboard/manager/membersList/editMentors/addMentor/AddMentor";
import AddMentor2 from "../pages/dashboard/manager/membersList/editMentors/addMentor/AddMentor2";
import NewMentorContextProvider from "../pages/dashboard/manager/membersList/editMentors/addMentor/context/NewMentorContextProvider";
import EditMentors from "../pages/dashboard/manager/membersList/editMentors/EditMentors";
import MembersList from "../pages/dashboard/manager/membersList/MembersList";
import Reports from "../pages/dashboard/manager/reports/Reports";

const managerRoutes = [
   {
      path: '/manager/dashboard',
      element: <Manager />
   },
   {
      path: '/manager/dashboard/memberslist',
      element: <MembersList />
   },
   {
      path: '/manager/dashboard/memberslist/editmentors',
      element: <EditMentors />
   },
   {
      path: '/manager/dashboard/memberslist/editmentors/addmentor',
      element: <NewMentorContextProvider>
         <AddMentor />
      </NewMentorContextProvider>
   },
   {
      path: '/manager/dashboard/memberslist/editmentors/addmentor2',
      element: <NewMentorContextProvider>
         <AddMentor2 />
      </NewMentorContextProvider>
   },
   {
      path: '/manager/dashboard/reports',
      element: <Reports />
   },
]

export default managerRoutes;