
const ManageUserRow = ({ user2 }) => {
    const { photo, name, email, role } = user2 || {};
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
            <td>{email}</td>
            <td> {role}</td>
        </tr>
    );
};

export default ManageUserRow;