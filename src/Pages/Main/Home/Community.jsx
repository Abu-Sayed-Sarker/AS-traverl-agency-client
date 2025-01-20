import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import StroyCard from "../../../Shared/StroyCard";

const Community = () => {
    const axiosPublic = usePublicAxios();

    const { data: stories = [] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories');
            return res.data;
        }
    })

    return (
        <div className="mt-10 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">Community</h1>
            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {
                    stories.map(storie => <StroyCard key={storie._id} Storie={storie}></StroyCard>)
                }
            </div>
        </div>
    );
};

export default Community;