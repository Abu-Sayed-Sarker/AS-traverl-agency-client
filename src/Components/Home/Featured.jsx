import { AiOutlineLike } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Featured = () => {
    return (
        <div className="mt-20 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Featured</h1>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                <div className="flex flex-col items-center gap-3">
                    <FaDollarSign className="text-6xl" />
                    <p className="text-xl">Best Price Guarantee</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <CiLock className="text-6xl" />
                    <p className="text-xl">Safe and Secure</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <AiOutlineLike className="text-6xl" />
                    <p className="text-xl">Best Travel Agents</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <GiHamburgerMenu className="text-6xl" />
                    <p className="text-xl">Travel Guidelines</p>
                </div>
            </div>

        </div>
    );
};

export default Featured;