import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import PackageCard from "../../../Shared/PackageCard";
import { useState } from "react";

const Trips = () => {
    const axiosPublic = usePublicAxios();

    const { data: packages = [] } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await axiosPublic.get('/package');
            return res.data;
        }
    })


    const [sortedPackages, setSortedPackages] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    // Function to toggle sorting order
    const handleSortByPrice = () => {
        const sorted = [...packages].sort((a, b) =>
            sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
        setSortedPackages(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">All Trips</h1>
            <div className="flex justify-end mb-4">
                <button
                    className="btn bg-secondary/50 hover:bg-secondary"
                    onClick={handleSortByPrice}
                >
                    Sort by Price {sortOrder === 'asc' ? '(Low to High)' : '(High to Low)'}
                </button>
            </div>
            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {(sortedPackages.length > 0 ? sortedPackages : packages).map((pack) => (
                    <PackageCard key={pack._id} pack={pack} />
                ))}
            </div>
        </div>
    );
};

export default Trips;