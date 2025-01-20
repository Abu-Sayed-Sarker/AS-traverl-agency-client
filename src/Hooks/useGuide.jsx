import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";


const useGuide = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useSecureAxios();
    const { data: isGuide, isPending: isGuideLoading } = useQuery({
        queryKey: [user?.email, 'isGuide'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/guide/${user.email}`);
            return res.data?.guide;
        }
    })
    return { isGuide, isGuideLoading }
};

export default useGuide;