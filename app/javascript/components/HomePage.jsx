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
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                {/* Hero Section - Ultra Minimal */}
                <section className="h-screen flex items-center px-4 relative">
                    {/* Extremely subtle gradient line */}
                    <div className="absolute left-0 top-1/3 h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>

                    <div className="container mx-auto max-w-3xl">
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
                <section className="py-32 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-2xl text-center">
                        <p className="text-xl md:text-2xl font-extralight text-gray-700 leading-relaxed fade-in opacity-0 transition-all duration-1000 delay-500">
                            "Raviro empowers health professionals in the Global South by creating pathways for research to drive tangible improvements in public health outcomes."
                        </p>
                    </div>
                </section>

                {/* Latest Blog Posts Preview */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-4xl">
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

                {/* CTA - Ultra Minimal */}
                <section className="py-32 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-md text-center fade-in opacity-0 transition-all duration-1000 delay-900">
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