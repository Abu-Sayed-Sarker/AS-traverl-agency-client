import Banner from "../../../Components/Home/Banner";
import FAQ from "../../../Components/Home/FAQ";
import Featured from "../../../Components/Home/Featured";
import Overviow from "../../../Components/Home/Overviow";
import Story from "../../../Components/Home/Story";
import TourismGuide from "../../../Components/Home/TourismGuide";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overviow></Overviow>
            <TourismGuide></TourismGuide>
            <Story></Story>
            <Featured></Featured>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;