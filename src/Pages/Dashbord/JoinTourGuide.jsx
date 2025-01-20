import { useForm } from "react-hook-form";
import useSecureAxios from "../../Hooks/useSecureAxios";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const JoinTourGuide = () => {
    const { register, reset, handleSubmit } = useForm();
    const axiosSecure = useSecureAxios();
    const { user } = useAuth();

    const { data: users = {} } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    })

    const onSubmit = async (data) => {

        const guideData = {
            name: users.name,
            email: user.email,
            photo: users.photo,
            cv_link: data.cv_link,
            detals: data.detals
        }

        const responce = await axiosSecure.post('/guide', guideData);
        console.log(responce.data)
        if (responce.data.insertedId) {
            reset();
        }

        console.log(guideData);
    }

    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">Join as tour guide</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">CV link*</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter CV link"
                            {...register('cv_link', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Why wants to be a Tour Guide</span>
                        </label>
                        <textarea {...register('detals')} className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                    </div>


                    <button className="btn bg-secondary/50 hover:bg-secondary mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinTourGuide;