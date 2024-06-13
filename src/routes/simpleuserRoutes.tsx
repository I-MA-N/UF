import Aboutus from "../pages/aboutus/Aboutus";
import Simpleuser from "../pages/dashboard/simpleuser/Simpleuser";
import Forms from "../pages/dashboard/simpleuser/forms/Forms";
import UserTestsInfoProvider from "../pages/dashboard/simpleuser/forms/context/UserTestsInfoProvider";
import CorrectiveProgram from "../pages/dashboard/simpleuser/forms/program/CorrectiveProgram";
import FitnessProgram from "../pages/dashboard/simpleuser/forms/program/FitnessProgram";
import Reports from "../pages/dashboard/simpleuser/forms/reports/Reports";
import TestsFirstLoad from "../pages/dashboard/simpleuser/forms/tests/TestsFirstLoad";
import Home from "../pages/home/Home";

const simpleuserRoutes = [
   {
      path: '/simpleuser/home',
      element: <Home />
   },
   {
      path: '/simpleuser/aboutus',
      element: <Aboutus />
   },
   {
      path: '/simpleuser/dashboard',
      element: <UserTestsInfoProvider>
         <Simpleuser />
      </UserTestsInfoProvider>
   },
   {
      path: '/simpleuser/dashboard/forms',
      element: <UserTestsInfoProvider>
            <Forms />
         </UserTestsInfoProvider>
   },
   {
      path: '/simpleuser/dashboard/forms/tests',
      element: <UserTestsInfoProvider>
            <TestsFirstLoad />
         </UserTestsInfoProvider>
   },
   {
      path: '/simpleuser/dashboard/forms/reports',
      element: <UserTestsInfoProvider>
            <Reports />
         </UserTestsInfoProvider>
   },
   {
      path: '/simpleuser/dashboard/forms/correctiveprogram',
      element: <CorrectiveProgram />
   },
   {
      path: '/simpleuser/dashboard/forms/fitnessprogram',
      element: <FitnessProgram />
   },
]

export default simpleuserRoutes;