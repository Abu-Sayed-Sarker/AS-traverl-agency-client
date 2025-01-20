import { Link } from "react-router-dom";
import StroyCard from "../../Shared/StroyCard";
import usePublicAxios from "../../Hooks/usePublicAxios";
import { useQuery } from "@tanstack/react-query";


const Story = () => {

    const axiosPublic = usePublicAxios();

    const { data: stories = [] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/rendom-stories');
            return res.data;
        }
    })



    return (
        <div className="mt-20 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Tourist Story</h1>

            <div className="mt-10 grid grid-cols-4 gap-6">
                {
                    stories.map(storie => <StroyCard key={storie._id} Storie={storie}></StroyCard>)
                }
            </div>


            <div className="mt-5 flex gap-3">
                <Link><button className="btn bg-secondary/50 hover:bg-secondary">All Stories</button></Link>
                <Link><button className="btn bg-secondary/50 hover:bg-secondary">Add Stories</button></Link>
            </div>
        </div>
    );
};

export default Story;