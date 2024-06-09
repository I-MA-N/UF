import { RouterProvider, createHashRouter } from "react-router-dom"
import Header from "./pages/header/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Aboutus from "./pages/aboutus/Aboutus"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ForgotPass from "./pages/login/components/ForgotPass"
import ResetPass from "./pages/login/ResetPass"
import simpleuserRoutes from "./routes/simpleuserRoutes"
import mentorRoutes from "./routes/mentorRoutes"
import managerRoutes from "./routes/managerRoutes"

const router = createHashRouter([
    {
        path: '/',
        element: <Header />,
        errorElement: <NotFound />,
        children: [
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
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <ForgotPass />
            },
            {
                path: '/reset_password/:token',
                element: <ResetPass />
            },
            ...simpleuserRoutes,
            ...mentorRoutes,
            ...managerRoutes
        ]
    }
])

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            gcTime: 1000 * 60 * 2
        },
        mutations: {
            retry: 1,
            gcTime: 1000 * 60 * 2
        },
    }
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App