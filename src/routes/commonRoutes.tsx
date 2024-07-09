import ProgramFirstLoad from "../pages/dashboard/program/ProgramFirstLoad";

const commonRoutes = [
   {
      path: '/:role/:program/:formname/:username',
      element: <ProgramFirstLoad />
   },
]

export default commonRoutes;