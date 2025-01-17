
const PackageCard = ({ pack }) => {
    const { image, title, tour_type, price } = pack || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className="h-52">
                    <img
                        src={image[0]}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <p className="">{tour_type}</p>
                        <p className="">{price} Taka</p>
                    </div>

                    <button className="btn bg-secondary/50 hover:bg-secondary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;