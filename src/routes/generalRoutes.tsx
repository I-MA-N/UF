import Aboutus from "../pages/aboutus/Aboutus";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ResetPass from "../pages/login/ResetPass";
import ForgotPass from "../pages/login/components/ForgotPass";

const generalRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/aboutus',
        element: <Aboutus />
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPass />
    },
    {
        path: '/reset_password/:token',
        element: <ResetPass />
    },
]

export default generalRoutes;