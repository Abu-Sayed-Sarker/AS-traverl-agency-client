
const GuideCard = ({ guide }) => {
    const { photo, name, email } = guide || {}
    return (
        <div className="shadow-xl rounded-2xl">
            <div className="flex flex-col items-center gap-3 px-4 py-6">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src={photo} />
                    </div>
                </div>
                <h1 className="text-xl font-bold">{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default GuideCard;