import { NavLink } from "react-router-dom";

const DashNavbar = () => {
    return (
        <div className="rounded-tl-3xl">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-between lg:hidden">
                    {/* Page content here */}
                    <div>
                        as-traverl
                    </div>
                    <label htmlFor="my-drawer-2" className="lg:hidden">
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
                    </label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-secondary/20 backdrop-blur-3xl min-h-screen w-56">
                        <li><NavLink to={'/dashboard'}>Manage  profile</NavLink></li>
                        <li><NavLink to={'/dashboard/mybooking'}>Home</NavLink></li>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default DashNavbar;