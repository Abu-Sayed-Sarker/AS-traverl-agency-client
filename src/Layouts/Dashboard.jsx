import { Outlet } from "react-router-dom";
import DashNavbar from "../Components/DashbordNavbar/DashNavbar";

const Dashboard = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row mt-10 w-11/12 mx-auto lg:gap-6">
                <DashNavbar></DashNavbar>
                <div className="lg:flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;