import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
const Overviow = () => {
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Overview</h1>

            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 mt-10'>

                <div className='rounded-2xl overflow-hidden'>
                    <img src={img1} alt="" />
                    <h1 className='text-center font-semibold text-lg mt-3 text-accent'>Home page</h1>
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={img3} alt="" />
                    <h1 className='text-center font-semibold text-lg mt-3 text-accent'>FAQ section</h1>
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={img2} alt="" />
                    <h1 className='text-center font-semibold text-lg mt-3 text-accent'>Turism section</h1>
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={img4} alt="" />
                    <h1 className='text-center font-semibold text-lg mt-3 text-accent'>About page</h1>
                </div>
            </div>
        </div>
    );
};

export default Overviow;