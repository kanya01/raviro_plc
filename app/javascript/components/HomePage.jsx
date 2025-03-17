import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
    useEffect(() => {
        const animateElements = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 150 * index);
            });
        };

        animateElements();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
            {/* Subtle dot grid pattern - Using CSS background */}
            <div
                className="absolute inset-0 opacity-[0.25] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#4a90e2 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            ></div>

            {/* Abstract minimal shapes */}
            <div className="absolute top-20 -right-24 w-64 h-64 rounded-full border border-gray-200 opacity-20"></div>
            <div className="absolute top-40 -right-32 w-96 h-96 rounded-full border border-gray-200 opacity-10"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border border-gray-100 opacity-20"></div>

            {/* Wave-like shape */}
            <div className="absolute right-0 top-1/3 w-1/4 h-64 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-300">
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,76.2,45.3C68.6,60,57.8,74.1,43.4,83.5C29,92.9,11,97.6,-4.4,94.1C-19.8,90.5,-32.7,78.9,-42.4,66.5C-52.2,54.1,-58.9,41,-66.1,27.3C-73.3,13.7,-81.1,-0.5,-81.3,-15.1C-81.6,-29.7,-74.2,-44.7,-63.1,-55.3C-51.9,-65.9,-36.9,-72,-22.8,-78.2C-8.7,-84.4,4.5,-90.8,19.1,-90.3C33.8,-89.8,49.8,-82.5,58.5,-86.3C67.1,-90.1,67.3,-105.2,64.7,-112.2"
                          transform="translate(100 100)" />
                </svg>
            </div>

            <Header />

            <main className="flex-grow">
                {/* Hero Section with gradient overlay */}
                <section className="h-screen flex items-center px-4 relative">
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none"></div>

                    {/* Extremely subtle gradient line */}
                    <div className="absolute left-0 top-1/3 h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>

                    <div className="container mx-auto max-w-3xl relative z-10">
                        <div className="fade-in opacity-0 transition-all duration-1000 delay-300">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-800 leading-tight mb-8">
                                Bridging research and impact in global health
                            </h1>
                            <p className="text-xl text-gray-500 mb-12 max-w-xl">
                                Connecting evidence to action in developing regions
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="/blog"
                                    className="px-8 py-3 text-blue-600 hover:text-blue-700 transition-colors duration-300 inline-flex items-center group"
                                >
                                    Read Our Blog
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                                <a
                                    href="/about"
                                    className="px-8 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-300 inline-flex items-center group"
                                >
                                    About Us
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Single Value Statement */}
                <section className="py-32 px-4 bg-gray-50 relative">
                    {/* Abstract corner shapes */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path fill="#4a90e2" d="M39.9,-65.7C52.9,-60.1,65.7,-51.5,74.2,-39.1C82.8,-26.8,87.1,-10.7,85.5,4.7C83.9,20,76.4,34.7,66.4,47.2C56.4,59.7,43.9,70,29.7,75.6C15.5,81.1,-0.4,81.9,-15.6,77.8C-30.8,73.7,-45.3,64.8,-56.5,52.7C-67.7,40.6,-75.5,25.3,-79.7,8.3C-83.9,-8.8,-84.5,-27.6,-76.3,-41.2C-68.1,-54.7,-51.1,-63.1,-35.8,-67.1C-20.4,-71.1,-6.8,-70.7,6.7,-71.8C20.2,-72.9,40.4,-75.4,43.5,-71.5C46.6,-67.6,27,-57.3,27,-57.3L39.9,-65.7Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <div className="container mx-auto max-w-2xl text-center relative z-10">
                        <p className="text-xl md:text-2xl font-extralight text-gray-700 leading-relaxed fade-in opacity-0 transition-all duration-1000 delay-500">
                            "Raviro empowers health professionals in the Global South by creating pathways for research to drive tangible improvements in public health outcomes."
                        </p>
                    </div>
                </section>

                {/* Latest Blog Posts Preview */}
                <section className="py-32 px-4 relative">
                    {/* Dot pattern - different density */}
                    <div
                        className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(#4a90e2 0.8px, transparent 0.8px)`,
                            backgroundSize: '20px 20px'
                        }}
                    ></div>

                    <div className="container mx-auto max-w-4xl relative z-10">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-16 fade-in opacity-0 transition-all duration-1000 delay-600">
                            Latest Insights
                        </h2>

                        <div className="space-y-16 fade-in opacity-0 transition-all duration-1000 delay-700">
                            {/* Blog Post 1 */}
                            <div className="group">
                                <a href="/blog/implementation-research-explained" className="block group-hover:opacity-90 transition-opacity">
                                    <span className="text-xs text-blue-600 uppercase tracking-wider">Research</span>
                                    <h3 className="text-xl font-light text-gray-800 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                                        Implementation Research Explained: Bridging the Know-Do Gap
                                    </h3>
                                    <p className="text-gray-600">
                                        Learn how implementation research is transforming the way we approach public health challenges in resource-limited settings.
                                    </p>
                                    <div className="mt-4 text-sm text-gray-500">March 2, 2025</div>
                                </a>
                            </div>

                            {/* Blog Post 2 */}
                            <div className="group">
                                <a href="/blog/evidence-based-practices" className="block group-hover:opacity-90 transition-opacity">
                                    <span className="text-xs text-blue-600 uppercase tracking-wider">Best Practices</span>
                                    <h3 className="text-xl font-light text-gray-800 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                                        Five Ways to Improve Evidence-Based Practice in Global Health
                                    </h3>
                                    <p className="text-gray-600">
                                        Practical strategies for public health professionals to integrate research findings into their daily practice.
                                    </p>
                                    <div className="mt-4 text-sm text-gray-500">February 18, 2025</div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-16 text-center fade-in opacity-0 transition-all duration-1000 delay-800">
                            <a
                                href="/blog"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
                            >
                                View all articles
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA - Ultra Minimal with subtle shape background */}
                <section className="py-32 px-4 bg-gray-50 relative">
                    {/* Abstract shape */}
                    <div className="absolute left-0 bottom-0 w-2/3 h-32 opacity-10">
                        <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path fill="none" stroke="#4a90e2" strokeWidth="1" d="M0,100 C150,200 350,0 600,100" />
                        </svg>
                    </div>

                    <div className="container mx-auto max-w-md text-center fade-in opacity-0 transition-all duration-1000 delay-900 relative z-10">
                        <a
                            href="/contact"
                            className="inline-block px-12 py-4 border border-blue-400 text-blue-600 rounded-full font-light hover:bg-blue-50 transition-all duration-300"
                        >
                            Join Our Network
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;