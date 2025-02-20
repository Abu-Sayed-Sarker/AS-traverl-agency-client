import { Link } from "react-router-dom";

const PackageCard = ({ pack }) => {
    const { image, title, tour_type, price, _id, datails } = pack || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="h-52 overflow-hidden">
                    <img
                        className="object-cover w-full rounded-t-3xl"
                        src={image[0]}
                        alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title.substring(0, 40)} ...</h2>
                    <p className="">{datails.substring(0, 150)} ...</p>
                    <div className="flex justify-between">
                        <p className="">{tour_type}</p>
                        <p className="">{price} Taka</p>
                    </div>

                    <Link to={`/datels/${_id}`}><button className="btn bg-secondary/50 hover:bg-secondary">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;