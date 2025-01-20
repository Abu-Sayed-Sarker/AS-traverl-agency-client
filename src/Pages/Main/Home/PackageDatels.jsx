import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import { MdTour } from "react-icons/md";
import { TbCoinTakaFilled } from "react-icons/tb";

const PackageDatels = () => {
    const { id } = useParams();
    const axiosPublic = usePublicAxios();

    const { data: pack = {} } = useQuery({
        queryKey: ['pack'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/package/${id}`)
            return res.data
        }
    })

    const { datails, price, title, tour_type, image, tour_plane } = pack || {}


    return (
        <div className="w-11/12 mx-auto mt-10">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Package Details</h1>
            <div className="flex lg:flex-row flex-col gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 lg:w-1/2 place-items-center">
                    {image && image.map((image, index) => (
                        <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={image}
                                alt={`image-${index}`}
                                className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-6 lg:w-1/2">
                    <h1 className="text-3xl lg:text-4xl font-semibold">{title}</h1>
                    <p className="flex items-center justify-around text-lg gap-2 my-2"><span className="flex items-center gap-2"><MdTour ></MdTour>{tour_type}</span> <span className="flex items-center gap-2"><TbCoinTakaFilled ></TbCoinTakaFilled> {price}</span></p>

                    <div>
                        <h1 className="text-xl font-medium my-3">Guide</h1>

                        {/* starte */}

                        <div className="carousel carousel-vertical rounded-box h-60 w-full">
                            <div className="carousel-item *:ml-5 *:mt-5">
                                <div className="flex items-center gap-5">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">NAme oF guide</h1>
                                        <p>ashsabd56564@gaail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item *:ml-5 *:mt-5">
                                <div className="flex items-center gap-5">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">NAme oF guide</h1>
                                        <p>ashsabd56564@gaail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item *:ml-5 *:mt-5">
                                <div className="flex items-center gap-5">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">NAme oF guide</h1>
                                        <p>ashsabd56564@gaail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item *:ml-5 *:mt-5">
                                <div className="flex items-center gap-5">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">NAme oF guide</h1>
                                        <p>ashsabd56564@gaail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item *:ml-5 *:mt-5">
                                <div className="flex items-center gap-5">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">NAme oF guide</h1>
                                        <p>ashsabd56564@gaail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item *:ml-5 *:mt-5">
                                <div className="flex items-center gap-5">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">NAme oF guide</h1>
                                        <p>ashsabd56564@gaail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end  */}

                    </div>


                    <div className="mt-3">
                        {datails}
                    </div>
                    <div className="mt-5">
                        {
                            tour_plane && tour_plane.map((plane, index) => <div key={index} className="collapse bg-base-200 my-5 w-full">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">{index + 1} Day</div>
                                <div className="collapse-content">
                                    <p>{plane}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <Link to={`/booking/${id}/${title}`}> <button className="btn bg-secondary/50 hover:bg-secondary">Booking Now</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageDatels;