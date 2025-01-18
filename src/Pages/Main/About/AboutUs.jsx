import aboutImg from '../../../assets/About.png'
const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">About Us</h1>
            <div className="flex lg:flex-row lg:items-center flex-col-reverse">
                <div>
                    <p>Welcome to AS Travel, your ultimate destination for exploring the world&apos;s wonders and creating unforgettable travel experiences. At AS Travel, we are passionate about tourism and dedicated to providing exceptional service tailored to your needs.</p>
                    <div>
                        <h1 className="text-xl font-semibold">Our Team</h1>
                        <p>Our team at AS Travel comprises seasoned professionals with extensive experience in the tourism industry. From travel advisors who meticulously plan your itinerary to guides who enrich your journey with local insights, each member is committed to ensuring your trip exceeds expectations</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Experience</h1>
                        <p>With years of experience behind us, AS Travel has cultivated a deep understanding of what makes a journey remarkable. Whether you&apos;re seeking cultural immersion, adventure, or relaxation, our expertise allows us to craft bespoke travel packages that cater to diverse interests and preferences.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Services</h1>
                        <p>At AS Travel, we offer a comprehensive range of services designed to make your travel seamless and enjoyable. From booking accommodations and arranging transportation to organizing guided tours and suggesting hidden gems, we handle every detail with precision and care.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Future</h1>
                        <p>Looking ahead, AS Travel is committed to continuous innovation and enhancement of our services. We strive to incorporate the latest trends in travel, embrace sustainable practices, and expand our offerings to new destinations, ensuring that every journey with us is both responsible and extraordinary.</p>
                    </div>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;