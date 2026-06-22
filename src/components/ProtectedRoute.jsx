import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
    const { user, authLoading } = useAuth();
    const location = useLocation();

    if (authLoading) {
        return <p style={{ padding: "20px" }}>Checking account...</p>;
    }

    if (!user) {
        return <Navigate to="/account" state={{ from: location.pathname }} replace />;
    }

    return children;
}