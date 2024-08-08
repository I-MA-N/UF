import ProgramFirstLoad from "../pages/dashboard/program/ProgramFirstLoad";
import ReportsFirstLoad from "../pages/dashboard/reports/ReportsFirstLoad";

const commonRoutes = [
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