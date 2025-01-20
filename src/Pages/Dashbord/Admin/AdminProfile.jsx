import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useSecureAxios from "../../../Hooks/useSecureAxios";


const AdminProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const axiosSecure = useSecureAxios();
    const { register, handleSubmit, formState: { errors } } = useForm();




    const { data: users = {} } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    })
    const { data } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })


    const { data: stories = [] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/stories`);
            return res.data;
        }
    })
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/package`);
            return res.data;
        }
    })




    const onSubmit = data => {
        updateUserProfile(data.name || users.name, data.photoURL || users.photo)
            .then(() => {
                // create user entry in the database
                const userInfo = {
                    name: data.name || users.name,
                    email: users.email,
                    photo: data.photoURL || users.photo,
                    role: users.role
                }
                axiosSecure.put(`/users/${user.email}`, userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success("Profile update successfully.")
                        }
                    })


            })
            .catch(error => console.log(error))
        document.getElementById('my_modal_1').close()
    }
    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">My Profile</h1>
            <div>
                <div className="flex flex-col mt-8 gap-5">
                    <h1 className="text-3xl">Hello {user?.displayName} Welcome <span className="text-accent">AS Travel</span> agency</h1>

                    <div className="w-32 lg:w-44 lg:h-44  h-32 rounded-full overflow-hidden border-4 border-secondary">
                        <img className="object-cover" src={users?.photo} alt="" />
                    </div>

                    <p className="text-2xl font-semibold">{users?.name}</p>
                    <p className="text-xl">Email: {user?.email}</p>
                    <div className="flex">
                        <p className="py-1 px-4 rounded-full bg-primary/20 mb-4">{users.role === "admin" && "Admin"}{users.role === "Tourist" && "Tourist"}{users.role === "guide" && "Guide"}</p>
                    </div>

                </div>
                <div className="my-4">
                    <h3 className="text-xl font-medium">Admin Information</h3>
                    <div>
                        <p className="text-lg">Total Payment :</p>
                        <p className="text-lg">Total Tour Guides : {data && data.filter(u => u.role === "guide").length}</p>
                        <p className="text-lg">Total Packages : {packages.length}</p>
                        <p className="text-lg">Total Clients : {data && data.filter(u => u.role === "Tourist").length}</p>
                        <p className="text-lg">Total Stories : {stories.length}</p>
                    </div>
                </div>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn bg-secondary/50 hover:bg-secondary">Edit Profile</button>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name")} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <button className="btn bg-secondary/50 hover:bg-secondary mt-3">Save</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AdminProfile;