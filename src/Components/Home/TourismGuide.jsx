import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import usePublicAxios from "../../Hooks/usePublicAxios";
import { useQuery } from "@tanstack/react-query";
import PackageCard from "../../Shared/PackageCard";
import GuideCard from "../../Shared/GuideCard";


const TourismGuide = () => {

    const axiosPublic = usePublicAxios();

    const { data: packages = [] } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await axiosPublic.get('/rendom-package');
            return res.data;
        }
    })


    const { data: guides = [] } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/rendom-guide`);
            return res.data;
        }
    })




    return (
        <div className="mt-20 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Tourism and Travel Guide</h1>

            <p className="lg:text-xl">Our tourism and Travel Guide Heare...</p>
            <div className="mt-10">
                <Tabs>
                    <TabList>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid mt-5 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
                            {
                                packages.map(pack => <PackageCard key={pack._id} pack={pack}></PackageCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid mt-5 lg:grid-cols-4 gap-6 md:grid-cols-3 grid-cols-1">
                            {
                                guides.map(guide => <GuideCard key={guide._id} guide={guide}></GuideCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourismGuide;