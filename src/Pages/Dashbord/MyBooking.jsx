import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useSecureAxios from "../../Hooks/useSecureAxios";
import BookingRow from "../../Shared/BookingRow";

const MyBooking = () => {
    const { user } = useAuth();
    const axiosSecure = useSecureAxios();



    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking/${user.email}`);
            return res.data;
        }
    })

    console.log(bookings)
    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">My Booking</h1>
            <table className="table mt-10">
                {/* head */}
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Guide</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBooking;