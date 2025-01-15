import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <div className=""><Navbar></Navbar></div>

            <div className="pt-[68px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;