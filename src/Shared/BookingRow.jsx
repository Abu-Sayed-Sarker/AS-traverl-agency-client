import moment from "moment/moment";
import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";

const BookingRow = ({ booking }) => {
    const { packageName, guide, date, price, status, _id } = booking || {}
    return (
        <tr>
            <td>{packageName}</td>
            <td>{guide}</td>
            <td>{date ? moment(date).format('MMM Do YY') : ""}</td>
            <td>{price} Taka</td>
            <td> {status}</td>
            <td className="text-2xl">
                <Link to={`/dashboard/payment/${_id}`}><button><MdOutlinePayments /></button></Link>
            </td>
        </tr>
    );
};

export default BookingRow;