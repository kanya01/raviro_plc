import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Bridging the gap between public health research and real-world impact in developing regions
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Through knowledge brokering, advocacy, and collaborative solutions
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90">
                                Explore Research
                            </button>
                            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800">
                                View Opportunities
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            Our Value Proposition
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Raviro empowers public health professionals and researchers in the Global South by connecting evidence to action through a comprehensive digital hub for research sharing, funding opportunities, and capacity building.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Our Core Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <FeatureCard
                            title="Research Repository"
                            description="Access and share cutting-edge public health research focused on developing regions"
                            icon="📚"
                        />
                        <FeatureCard
                            title="Opportunity Center"
                            description="Discover funding opportunities and research assistant positions"
                            icon="🔍"
                        />
                        <FeatureCard
                            title="Capacity Building"
                            description="Access training resources and professional development tools"
                            icon="📈"
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Make an Impact?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our network of public health professionals and researchers working to improve health outcomes in developing regions.
                    </p>
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default HomePage;