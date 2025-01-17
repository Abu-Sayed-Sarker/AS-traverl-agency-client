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

                <div className="drawer-side bg-secondary/20 rounded-tl-3xl">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <h1 className="text-xl uppercase font-bold p-5 pb-0">AS <span className="text-primary">Travel</span></h1>
                    <ul className="backdrop-blur-3xl p-5 w-56">
                        <NavLink to={'/dashboard'}><li className="hover:bg-secondary p-3 rounded-2xl">Manage  profile</li></NavLink>
                        <NavLink to={'/dashboard/addpackage'}><li className="hover:bg-secondary p-3 rounded-2xl">Add Packages</li></NavLink>
                        <NavLink to={'/'}><li className="hover:bg-secondary p-3 rounded-2xl">Home</li></NavLink>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default DashNavbar;