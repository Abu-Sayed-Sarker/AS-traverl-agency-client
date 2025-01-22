import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginImg from '../../assets/login.png'
import usePublicAxios from "../../Hooks/usePublicAxios";

const Login = () => {

    const { signIn, googleSignIn, setUser } = useAuth();
    const axiosPublic = usePublicAxios();

    const navigate = useNavigate()

    const location = useLocation()



    const handleLoginSubmission = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");


        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                e.target.reset();
                toast.success("Log In Success");
                navigate(location.state.from.pathname)

            })
            .catch((error) => {
                const errorCode = error.code;

                toast.error(errorCode)


            });


    }


    const googleLogInBtn = () => {
        googleSignIn()
            .then(result => {
                toast.success("log in success")
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    role: 'Tourist'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(location.state.from.pathname)
                    })
            })
    }
    return (
        <div className="lg:w-10/12 flex mx-auto items-center flex-row-reverse mt-10 lg:mt-5">
            <div className="card bg-third-color w-full max-w-lg shrink-0 shadow-2xl py-8">
                <h2 className="text-center font-semibold text-4xl lg:pb-5">Login your account</h2>
                <form onSubmit={handleLoginSubmission} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={"/Forgat"}><span href="#" className="label-text-alt link link-hover">Forgot password?</span></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn bg-secondary/50 hover:bg-secondary">Login</button>
                    </div>
                </form>
                <div className="mx-auto pb-3">
                    <button onClick={googleLogInBtn} className="text-left btn bg-transparent hover:bg-secondary"><span className="text-accent"><FaGoogle /> </span>Login with Google</button>
                </div>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to={"/register"} className="text-accent">Register</Link></p>
            </div>
            <div className="lg:block hidden md:block">
                <img className="w-4/5" src={loginImg} alt="loginimg" />
            </div>
        </div>
    );
};

export default Login;