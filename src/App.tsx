import { RouterProvider, createHashRouter } from "react-router-dom"
import Header from "./pages/header/Header"
import NotFound from "./pages/NotFound"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import simpleuserRoutes from "./routes/simpleuserRoutes"
import mentorRoutes from "./routes/mentorRoutes"
import managerRoutes from "./routes/managerRoutes"
import UserHeader from "./pages/header/UserHeader"
import ProtectedRoute from "./pages/authentication/ProtectedRoute"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import generalRoutes from "./routes/generalRoutes"
import commonRoutes from "./routes/commonRoutes"
import MuiTheme from "./pages/common/MuiTheme"
import WindowModelType from "./types/WindowModelType"

// ProtectedRoute -> Handle access token proccess,
// UserDataProvider -> Provide user data as context,
// UserHeader -> Show uniqe navbar for authenticated user   &
// use UserDataProvider to provide user data as context     &
// handle logic for accessing only related routes for role

const router = createHashRouter([
    {
        path: '/',
        element: <Header />,
        errorElement: <NotFound />,
        children: generalRoutes
    },
    {
        path: '/simpleuser',
        element: <ProtectedRoute>
            <UserHeader />
        </ProtectedRoute>,
        errorElement: <NotFound />,
        children: simpleuserRoutes
    },
    {
        path: '/mentor',
        element: <ProtectedRoute>
            <UserHeader />
        </ProtectedRoute>,
        errorElement: <NotFound />,
        children: mentorRoutes
    },
    {
        path: '/manager',
        element: <ProtectedRoute>
            <UserHeader />
        </ProtectedRoute>,
        errorElement: <NotFound />,
        children: managerRoutes
    },
    {
        path: '/:role',
        element: <ProtectedRoute>
            <UserHeader />
        </ProtectedRoute>,
        errorElement: <NotFound />,
        children: commonRoutes
    },
])

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            gcTime: 1000 * 60 * 2
        },
        mutations: {
            retry: 0,
            gcTime: 1000 * 60 * 2
        },
    }
})

declare global {
    interface Window {
        model: WindowModelType
    }
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MuiTheme>
                <RouterProvider router={router} />
            </MuiTheme>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default App