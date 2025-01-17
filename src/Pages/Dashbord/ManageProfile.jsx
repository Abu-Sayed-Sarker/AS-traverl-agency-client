import useAuth from "../../Hooks/useAuth";

const ManageProfile = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">My Profile</h1>
            <div>
                <div className="flex flex-col mt-8 gap-5">
                    <h1 className="text-3xl">Hello {user?.displayName} Welcome <span className="text-accent">AS Travel</span> agency</h1>

                    <div className="w-32 lg:w-44 rounded-full overflow-hidden border-4 border-secondary">
                        <img className="lg:w-44 w-32" src={user?.photoURL} alt="" />
                    </div>

                    <p className="text-2xl font-semibold">{user?.displayName}</p>
                    <p className="text-xl">Email: {user?.email}</p>
                    <p>role</p>


                </div>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="px-5 py-2 bg-secondary/50 rounded-full">Edit Profile</button>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ManageProfile;