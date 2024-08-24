import ProgramFirstLoad from "../pages/dashboard/program/ProgramFirstLoad";
import ReportsFirstLoad from "../pages/dashboard/reports/ReportsFirstLoad";
import TestsFirstLoad from "../pages/dashboard/tests/TestsFirstLoad";

const commonRoutes = [
   {
      path: '/:role/tests/:formname/:username',
      element: <TestsFirstLoad />
   },
   {
      path: '/:role/:program/:formname/:username',
      element: <ProgramFirstLoad />
   },
   {
      path: '/:role/reports/:formname/:username',
      element: <ReportsFirstLoad />
   },
]

export default commonRoutes;