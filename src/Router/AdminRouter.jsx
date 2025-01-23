import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import Loder from "../Shared/Loder";


const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const { isAdmin, isAdminLoading } = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loder></Loder>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRouter;