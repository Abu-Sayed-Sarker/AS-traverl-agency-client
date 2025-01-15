import { FaLongArrowAltRight } from 'react-icons/fa';
import bannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div
            className="bg-center bg-cover h-[70vh]"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className='h-[70vh] bg-black/15 flex items-center'>
                <div className='w-10/12 mx-auto'>
                    <h3 className='text-xl font-semibold text-secondary'>AS Travel agency</h3>
                    <h1 className='text-6xl font-bold text-white max-w-xl'>
                        Best Travel Agent
                        in Asia
                    </h1>
                    <button className='flex items-center gap-2 px-5 rounded-3xl py-2 bg-secondary mt-4'>Learn more  <FaLongArrowAltRight className='mt-1' /></button>
                </div>
            </div>

        </div>
    );
};

export default Banner;