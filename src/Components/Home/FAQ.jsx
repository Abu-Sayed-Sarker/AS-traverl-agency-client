import faqImg from '../../assets/FAQ.png'

const FAQ = () => {
    return (
        <div className="w-11/12 mx-auto mt-5 pt-20 space-y-3">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">FAQ</h1>
            <div className="lg:flex md:flex items-center">
                <div className="lg:w-2/3 md:w-2/3">
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What are some popular tourist destinations?</div>
                        <div className="collapse-content">
                            <p>Popular tourist destinations vary by region, but some universally renowned ones include Paris (France), New York City (USA), Tokyo (Japan), and Sydney (Australia).</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">What should I pack for a trip?</div>
                        <div className="collapse-content">
                            <p>Packing essentials typically include clothing suitable for the destination&apos;s climate, toiletries, important documents (passport, ID, tickets), chargers, and any necessary medications. It&apos;s also wise to pack light and versatile items</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">How can I stay safe while traveling abroad?</div>
                        <div className="collapse-content">
                            <p>Research your destination beforehand to understand any safety concerns. Keep copies of important documents, stay aware of your surroundings, avoid displaying valuables openly, and use reputable transportation and accommodation options.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">How can I make the most of my travel budget?</div>
                        <div className="collapse-content">
                            <p>Plan and book in advance, travel during off-peak seasons, consider alternative accommodations like hostels or homestays, use public transportation, and look for free or discounted attractions and activities.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium"> What are some sustainable travel practices I should follow?</div>
                        <div className="collapse-content">
                            <p>Choose eco-friendly accommodations, reduce plastic waste by carrying a reusable water bottle and shopping bag, respect wildlife and natural habitats, and support local businesses and initiatives that promote sustainability.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/3">
                    <img src={faqImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;