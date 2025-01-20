import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="bg-secondary/20 backdrop-blur-md fixed z-10 w-full">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={"/"}>Home</NavLink>

                        </ul>
                    </div>
                    <NavLink to={"/"}><h1 className="text-xl uppercase font-bold">AS <span className="text-primary">Travel</span></h1></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 uppercase *:font-semibold">
                        <NavLink to={"/"}> <li className="hover:bg-secondary/50 rounded-md px-3 py-2">Home</li> </NavLink>
                        <NavLink to={"/community"}> <li className="hover:bg-secondary/50 rounded-md px-3 py-2">Community</li> </NavLink>
                        <NavLink to={"/aboutus"}> <li className="hover:bg-secondary/50 rounded-md px-3 py-2">About Us</li> </NavLink>
                        <NavLink to={"/trips"}> <li className="hover:bg-secondary/50 rounded-md px-3 py-2">Trips</li> </NavLink>
                        <NavLink to={"/login"}> <li className="hover:bg-secondary/50 rounded-md px-3 py-2">Login</li> </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-white">
                                <img
                                    referrerPolicy="no referrer"
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        {user && <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow flex flex-col gap-3">
                            <li>{user.displayName}</li>
                            <li>{user.email}</li>
                            <NavLink to={'/dashboard'}><li className="font-semibold hover:bg-secondary px-2 py-1 rounded-md">Dashboard</li></NavLink>
                            <button className="font-semibold bg-secondary/50 hover:bg-secondary px-2 py-1 rounded-md" onClick={() => logOut()}>Log Out</button>
                        </ul>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;