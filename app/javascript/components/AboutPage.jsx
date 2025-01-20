import React from 'react';
import { UserCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamMember = ({ name, role, bio }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <UserCircle size={80} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-blue-600 mb-3">{role}</p>
        <p className="text-gray-600 text-center">{bio}</p>
    </div>
);

const AboutPage = () => {
    const teamMembers = [
        {
            name: "Dr. Lucy Kanya",
            role: "Executive Director",
            bio: "Dr. Lucy Kanya has a background in health economics and policy with experience in Sub-Saharan Africa. She has evaluated health financing programs in Kenya and Uganda and worked on research and evaluation in maternal and newborn health, sexual reproductive health, HIV/AIDS, and malaria programs in the region"
        },
        // {
        //     name: "Michael Chen",
        //     role: "Research Director",
        //     bio: "Leading our research initiatives with expertise in epidemiology and health systems strengthening."
        // },
        {
            name: "Flo Thungu",
            role: "Partnerships Lead",
            bio: "Specializing in building collaborative relationships between research institutions and implementing partners."
        },
        {
            name: "Moses Kanya",
            role: "Product Engineer",
            bio: "Driving our digital transformation initiatives and platform development."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Mission Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl font-bold mb-6">About Raviro</h1>
                            <p className="text-xl leading-relaxed">
                                Raviro is dedicated to bridging the gap between public health research
                                and real-world impact in developing regions. We believe in the power
                                of knowledge sharing and collaborative solutions to address global
                                health challenges.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Knowledge Equity</h3>
                                    <p className="text-gray-600">
                                        We believe in making research accessible and actionable for all
                                        stakeholders in public health.
                                    </p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                                    <p className="text-gray-600">
                                        We foster partnerships that bridge research institutions with
                                        implementing organizations.
                                    </p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                                    <p className="text-gray-600">
                                        We leverage technology to create effective solutions for
                                        knowledge sharing and capacity building.
                                    </p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Impact</h3>
                                    <p className="text-gray-600">
                                        We measure our success through the tangible improvements in
                                        public health outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Interested in collaborating or learning more about our work?
                            We'd love to hear from you.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                            Contact Us
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;