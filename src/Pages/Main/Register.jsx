import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import registerImg from '../../assets/Sign-up.png'
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import usePublicAxios from "../../Hooks/usePublicAxios";

const Register = () => {

    const { googleSignIn, updateUserProfile, createUser } = useAuth();
    const axiosPublic = usePublicAxios()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();



    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    toast.success("User register successfully.")
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    const googleLogInBtn = () => {
        googleSignIn()
            .then(result => {
                toast.success("log in success")
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }
    return (
        <div className="lg:w-10/12 mx-auto flex lg:justify-between items-center mt-10">
            <div className="card bg-third-color w-full max-w-lg shrink-0 shadow-2xl py-8">
                <h2 className="text-center font-semibold text-4xl">Register your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-secondary/50 hover:bg-secondary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <div className="mx-auto pb-3">
                    <button onClick={googleLogInBtn} className="text-left btn bg-transparent hover:bg-secondary"><span className="text-accent"><FaGoogle /> </span> Login with Google</button>
                </div>
                <p className="text-center font-semibold">Already Have An Account ? <Link to={"/login"} className="text-accent">Log In</Link></p>
            </div>
            <div className="lg:block hidden pt-8">
                <img src={registerImg} alt="" />

            </div>
        </div>
    );
};

export default Register;