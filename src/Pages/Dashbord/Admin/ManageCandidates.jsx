import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import GuideApplicationRow from "../../../Shared/GuideApplicationRow";

const ManageCandidates = () => {
    const axiosSecure = useSecureAxios();

    const { data: guides = [], refetch } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/guide`);
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">Manage Candidates</h1>
            <table className="table mt-10">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>CV</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guides.map(guide => <GuideApplicationRow key={guide._id} guide={guide} refetch={refetch}></GuideApplicationRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageCandidates;