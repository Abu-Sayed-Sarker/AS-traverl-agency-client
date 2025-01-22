import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Select from 'react-select';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import ManageUserRow from '../../../Shared/ManageUserRow';
const options = [
    { value: 'Tourist', label: 'Tourist' },
    { value: 'guide', label: 'Guide' },
    { value: 'admin', label: 'Admin' },
];
const ManageUsers = () => {
    const axiosSecure = useSecureAxios();
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState("");

    const { data: adminUsers = [] } = useQuery({
        queryKey: ['adminUsers', name, selectedOption],
        queryFn: async () => {
            const res = await axiosSecure.get(`/search-users?name=${encodeURIComponent(name)}&role=${selectedOption.value}`);
            return res.data;
        }
    });



    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">Manage Users</h1>
            <div className='flex flex-col gap-4 lg:flex-row lg:justify-between my-5'>
                <input onChange={(e) => setName(e.target.value)} className='input input-bordered' type="text" placeholder="Search on user name" />
                <Select
                    className='lg:w-60 w-full'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <table className="table mt-10">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminUsers.map(user2 => <ManageUserRow key={user2._id} user2={user2}></ManageUserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;