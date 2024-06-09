import ProtectedRoute from "../pages/authentication/ProtectedRoute";
import Simpleuser from "../pages/dashbord/simpleuser/Simpleuser";
import Forms from "../pages/dashbord/simpleuser/forms/Forms";
import UserTestsInfoProvider from "../pages/dashbord/simpleuser/forms/context/UserTestsInfoProvider";
import CorrectiveProgram from "../pages/dashbord/simpleuser/forms/program/CorrectiveProgram";
import FitnessProgram from "../pages/dashbord/simpleuser/forms/program/FitnessProgram";
import Reports from "../pages/dashbord/simpleuser/forms/reports/Reports";
import Tests from "../pages/dashbord/simpleuser/forms/tests/Tests";

const simpleuserRoutes = [
   {
      path: '/simpleuser',
      element: <ProtectedRoute>
         <UserTestsInfoProvider>
            <Simpleuser />
         </UserTestsInfoProvider>
      </ProtectedRoute>
   },
   {
      path: '/simpleuser/forms',
      element: <ProtectedRoute>
         <UserTestsInfoProvider>
            <Forms />
         </UserTestsInfoProvider>
      </ProtectedRoute>,
   },
   {
      path: '/simpleuser/forms/tests',
      element: <ProtectedRoute>
         <UserTestsInfoProvider>
            <Tests />
         </UserTestsInfoProvider>
      </ProtectedRoute>,
   },
   {
      path: '/simpleuser/forms/reports',
      element: <ProtectedRoute>
         <UserTestsInfoProvider>
            <Reports />
         </UserTestsInfoProvider>
      </ProtectedRoute>,
   },
   {
      path: '/simpleuser/forms/correctiveprogram',
      element: <ProtectedRoute>
         <CorrectiveProgram />
      </ProtectedRoute>,
   },
   {
      path: '/simpleuser/forms/fitnessprogram',
      element: <ProtectedRoute>
         <FitnessProgram />
      </ProtectedRoute>,
   },
]

export default simpleuserRoutes;