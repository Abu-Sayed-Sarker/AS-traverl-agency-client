import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import useGuide from "../../../Hooks/useGuide";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import GuideProfile from "../../Guide/GuideProfile";
import AdminProfile from "../Admin/AdminProfile";
import ManageProfile from "../ManageProfile";

const ManageProfileAll = () => {
    const { isAdmin } = useAdmin();
    const { user } = useAuth();
    const { isGuide } = useGuide();
    const axiosSecure = useSecureAxios();


    const { data: users = {} } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    })
    return (
        <>
            {users.role === "Tourist" && <ManageProfile></ManageProfile>}
            {isAdmin && <AdminProfile></AdminProfile>}
            {isGuide && <GuideProfile></GuideProfile>}
        </>
    );
};

export default ManageProfileAll;