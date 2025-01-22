import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import useSecureAxios from "../Hooks/useSecureAxios";


const GuideApplicationRow = ({ guide, refetch }) => {
    const { name, photo, cv_link, detals, _id, email } = guide || {};
    const axiosSecure = useSecureAxios();
    const deleteGuide = (id) => {
        axiosSecure.delete(`/guide/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }

    const addGuide = (email, id) => {
        const data = { role: "guide" }
        axiosSecure.put(`/guide/${email}`, data)
            .then(res => {
                console.log(res.data);
                axiosSecure.delete(`/guide/${id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch()
                    })
            })
    }


    return (
        <tr>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img
                        src={photo}
                        alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{detals && detals.substring(0, 30)} ...</td>
            <td><a className="text-blue-600 underline" href={cv_link}>CV Link</a></td>
            <td className="flex items-center gap-3">
                <button onClick={() => addGuide(email, _id)} className="text-xl"><FaCheck /></button>
                <button onClick={() => deleteGuide(_id)} className="text-2xl font-extrabold"><IoCloseSharp /></button>
            </td>
        </tr>
    );
};

export default GuideApplicationRow;