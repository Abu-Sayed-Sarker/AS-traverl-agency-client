import { CiShare2 } from "react-icons/ci";
import { FacebookShareButton } from "react-share";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";


const StroyCard = ({ Storie }) => {
    const { user } = useAuth()
    const [isuser, setuser] = useState(true);

    const { title, storie, images } = Storie || {}

    useEffect(() => {
        if (user) {
            setuser(false);
        }
    }, [user])
    return (
        <div className="bg-secondary/20 rounded-2xl">
            <div className="p-5">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="my-3 flex flex-wrap gap-3 justify-center">
                    {images.map((img, i) => <div key={i} className="avatar">
                        <div className="w-20 rounded-xl">
                            <img src={img} />
                        </div>
                    </div>)}
                </div>
                <div>
                    <p>
                        {storie.substring(0, 200)} ...
                    </p>
                    <div className="mt-4">
                        <FacebookShareButton url="http://localhost:5173/" disabled={isuser} quote={""}>
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