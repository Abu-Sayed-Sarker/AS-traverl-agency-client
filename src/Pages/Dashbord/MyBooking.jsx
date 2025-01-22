import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useSecureAxios from "../../Hooks/useSecureAxios";
import BookingRow from "../../Shared/BookingRow";
import Confetti from 'react-confetti'
import PaginationBtn from "../../Shared/PaginationBtn";
import { useEffect, useState } from "react";

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


    const count = bookings.length
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const { data: pbooking = [], refetch } = useQuery({
        queryKey: ['pbookings', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking/pagination/${user.email}?page=${currentPage}`);
            return res.data;
        }
    })

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    const totelpage = pages.length



    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsActive(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);




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
                        pbooking.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)
                    }
                </tbody>
            </table>
            <div>
                {bookings.length >= 3 && isActive && <Confetti tweenDuration={5000}
                />}
            </div>
            <PaginationBtn currentPage={currentPage} totelPage={totelpage} refetch={refetch} setCurrentPage={setCurrentPage}> </PaginationBtn>
        </div>
    );
};

export default MyBooking;