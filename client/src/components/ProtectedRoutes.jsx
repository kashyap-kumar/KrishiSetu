import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;