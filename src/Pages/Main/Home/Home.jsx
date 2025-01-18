import Banner from "../../../Components/Home/Banner";
import FAQ from "../../../Components/Home/FAQ";
import Story from "../../../Components/Home/Story";
import TourismGuide from "../../../Components/Home/TourismGuide";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismGuide></TourismGuide>
            <Story></Story>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;