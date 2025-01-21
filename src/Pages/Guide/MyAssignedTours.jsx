import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useSecureAxios from "../../Hooks/useSecureAxios";
import MyAssignedTourRow from "../../Shared/MyAssignedTourRow";

const MyAssignedTours = () => {
    const { user } = useAuth()
    const axiosSecure = useSecureAxios();



    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/guide-order/${user.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">My Booking</h1>
            <table className="table mt-10">
                {/* head */}
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Tourist</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <MyAssignedTourRow key={order._id} order={order} refetch={refetch}></MyAssignedTourRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAssignedTours;