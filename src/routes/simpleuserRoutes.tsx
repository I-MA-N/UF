import Aboutus from "../pages/aboutus/Aboutus";
import Simpleuser from "../pages/dashboard/simpleuser/Simpleuser";
import FormsFirstLoad from "../pages/dashboard/simpleuser/forms/FormsFirstLoad";
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
      element: <Simpleuser />
   },
   {
      path: '/simpleuser/dashboard/forms',
      element: <FormsFirstLoad />
   },
]

export default simpleuserRoutes;