import { CiShare2 } from "react-icons/ci";
import { FacebookShareButton } from "react-share";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";


const StroyCard = () => {
    const { user } = useAuth()
    const [isuser, setuser] = useState(true);

    useEffect(() => {
        if (user) {
            setuser(false);
        }
    }, [user])
    return (
        <div className="bg-secondary/20 rounded-2xl">
            <div className="p-5">
                <div className="flex gap-4 items-center">
                    <div className="w-10 rounded-full">
                        <img
                            className="w-10 rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    <h1 className="text-xl font-semibold">Tourest Name</h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quod nobis? Amet distinctio consectetur dolores sit blanditiis voluptatem cumque, nisi totam perferendis sapiente in saepe omnis sed culpa dolorum asperiores.
                    </p>
                    <div className="mt-4">
                        <FacebookShareButton url="https://example.com" disabled={isuser} quote={""}>
                            <p className="flex items-center gap-2 border border-secondary px-2 rounded-full">
                                Share on Facbook  <CiShare2 />
                            </p>
                        </FacebookShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StroyCard;