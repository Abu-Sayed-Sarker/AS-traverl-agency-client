import moment from "moment/moment";
import { MdOutlinePayments } from "react-icons/md";

const BookingRow = ({ booking }) => {
    const { packageName, guide, date, price, status } = booking || {}
    return (
        <tr>
            <td>{packageName}</td>
            <td>{guide}</td>
            <td>{date ? moment(date).format('MMM Do YY') : ""}</td>
            <td>{price} Taka</td>
            <td> {status}</td>
            <td className="text-2xl">
                <button><MdOutlinePayments /></button>
            </td>
        </tr>
    );
};

export default BookingRow;