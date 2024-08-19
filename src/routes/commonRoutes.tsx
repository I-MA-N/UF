import ProgramFirstLoad from "../pages/dashboard/program/ProgramFirstLoad";
import ReportsFirstLoad from "../pages/dashboard/reports/ReportsFirstLoad";
import LandmarksFirstLoad from "../pages/dashboard/tests/landmarks/LandmarksFirstLoad";
import TestsFirstLoad from "../pages/dashboard/tests/TestsFirstLoad";

const commonRoutes = [
   {
      path: '/:role/tests/:formname/:username',
      element: <TestsFirstLoad />
   },
   {
      path: '/:role/tests/:formname/:username/landmarks',
      element: <LandmarksFirstLoad />
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