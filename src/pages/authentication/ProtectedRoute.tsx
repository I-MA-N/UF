import { PropsWithChildren } from "react";
import NotFound from "../NotFound";
import GUserData from "../../api/common/GUserData";
import AuthProvider from "./AuthProvider";
import { useLocation } from "react-router-dom";

function ProtectedRoute({ children }: PropsWithChildren) {
    const { data, isPending } = GUserData();
    const location = useLocation();
    const routeRole = location.pathname.split('/')[1];

    if (isPending) return <h1>Loading...</h1>

    if (routeRole === data?.role) return (
        <AuthProvider userData={data}>
            {children}
        </AuthProvider>
    )

    return <NotFound />
}

export default ProtectedRoute