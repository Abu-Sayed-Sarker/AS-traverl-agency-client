import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import PackageCard from "../../../Shared/PackageCard";

const Trips = () => {
    const axiosPublic = usePublicAxios();

    const { data: packages = [] } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await axiosPublic.get('/package');
            return res.data;
        }
    })
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">All Trips</h1>
            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {
                    packages.map(pack => <PackageCard key={pack._id} pack={pack}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Trips;