import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import GuideApplicationRow from "../../../Shared/GuideApplicationRow";
import { useState } from "react";
import PaginationBtn from "../../../Shared/PaginationBtn";

const ManageCandidates = () => {
    const axiosSecure = useSecureAxios();

    const { data: guides = [], refetch } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/guide`);
            return res.data;
        }
    })



    const count = guides.length
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const { data: pGuide = [] } = useQuery({
        queryKey: ['pGuide', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/guide/pagination`);
            return res.data;
        }
    })

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    const totelpage = pages.length;



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
                        pGuide.map(guide => <GuideApplicationRow key={guide._id} guide={guide} refetch={refetch}></GuideApplicationRow>)
                    }
                </tbody>
            </table>
            <PaginationBtn currentPage={currentPage} totelPage={totelpage} refetch={refetch} setCurrentPage={setCurrentPage}> </PaginationBtn>
        </div>
    );
};

export default ManageCandidates;