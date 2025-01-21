import moment from "moment";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import useSecureAxios from "../Hooks/useSecureAxios";

const MyAssignedTourRow = ({ order, refetch }) => {
    const axiosSecure = useSecureAxios();
    const { packageName, name, date, price, status, _id } = order || {};

    const acceptedTour = (id) => {
        const data = { status: "Accepted" }
        axiosSecure.put(`/status/${id}`, data)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }
    const rejecteddTour = (id) => {
        const data = { status: "Rejected" }
        axiosSecure.put(`/status/${id}`, data)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }


    return (
        <tr>
            <td>{packageName}</td>
            <td>{name}</td>
            <td>{date ? moment(date).format('MMM Do YY') : ""}</td>
            <td>{price} Taka</td>
            <td> {status}</td>
            <td className="flex items-center gap-3">
                <button
                    onClick={() => acceptedTour(_id)}
                    disabled={status === "Pending" || status === "Accepted" || status === "Rejected"}
                    className="text-xl disabled:cursor-not-allowed">
                    <FaCheck />
                </button>
                <button
                    onClick={() => rejecteddTour(_id)}
                    disabled={status === "In-review" || status === "Accepted" || status === "Rejected"}
                    className="text-2xl font-extrabold disabled:cursor-not-allowed"
                >
                    <IoCloseSharp />
                </button>
            </td>
        </tr>
    );
};

export default MyAssignedTourRow;