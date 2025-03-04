import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonialIntervalRef = useRef(null);

    const testimonials = [
        {
            quote: "Raviro has transformed how we access and implement research findings. Their platform bridges a critical gap in our public health initiatives.",
            location: "Nairobi, Kenya"
        },
        {
            quote: "The research resources provided by Raviro have been instrumental in developing our community health programs with evidence-based approaches.",
            location: "Kampala, Uganda"
        },
        {
            quote: "Their knowledge hub helps us find research partners and funding opportunities that align perfectly with our regional health priorities.",
            location: "Addis Ababa, Ethiopia"
        },
        {
            quote: "Raviro's platform has enabled us to translate complex research into actionable programs that address our community's specific health challenges.",
            location: "Lagos, Nigeria"
        }
    ];

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

        // Testimonial rotation
        testimonialIntervalRef.current = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 7000);

        window.addEventListener('scroll', () => {
            const scrollElements = document.querySelectorAll('.scroll-fade');
            scrollElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight * 0.8) {
                    el.classList.add('visible');
                }
            });
        });

        // Trigger initial scroll check
        window.dispatchEvent(new Event('scroll'));

        return () => {
            if (testimonialIntervalRef.current) {
                clearInterval(testimonialIntervalRef.current);
            }
        };
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        // Reset the interval timer when manually changing
        if (testimonialIntervalRef.current) {
            clearInterval(testimonialIntervalRef.current);
            testimonialIntervalRef.current = setInterval(() => {
                setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
            }, 7000);
        }
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
        // Reset the interval timer when manually changing
        if (testimonialIntervalRef.current) {
            clearInterval(testimonialIntervalRef.current);
            testimonialIntervalRef.current = setInterval(() => {
                setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
            }, 7000);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow pt-24">
                {/* Minimal intro section */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-12 fade-in opacity-0 transition-all duration-1000">
                            About Raviro
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 fade-in opacity-0 transition-all duration-1000 delay-200">
                            We bridge the gap between public health research and real-world impact in developing regions.
                        </p>
                        <p className="text-gray-600 leading-relaxed fade-in opacity-0 transition-all duration-1000 delay-400">
                            Through knowledge brokering and collaborative solutions, we connect evidence to action, enabling better health outcomes where they're needed most.
                        </p>
                    </div>
                </section>

                {/* Our approach - ultra minimal with horizontal layout */}
                <section className="py-32 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-16 scroll-fade opacity-0 transition-all duration-700 transform translate-y-4">
                            Our Approach
                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="scroll-fade opacity-0 transition-all duration-700 delay-100 transform translate-y-4">
                                <h3 className="text-xl font-light text-blue-600 mb-4">Knowledge Equity</h3>
                                <p className="text-gray-600">
                                    Making research accessible and actionable for all stakeholders in public health.
                                </p>
                            </div>

                            <div className="scroll-fade opacity-0 transition-all duration-700 delay-200 transform translate-y-4">
                                <h3 className="text-xl font-light text-blue-600 mb-4">Collaboration</h3>
                                <p className="text-gray-600">
                                    Fostering partnerships between research institutions and implementing organizations.
                                </p>
                            </div>

                            <div className="scroll-fade opacity-0 transition-all duration-700 delay-300 transform translate-y-4">
                                <h3 className="text-xl font-light text-blue-600 mb-4">Impact</h3>
                                <p className="text-gray-600">
                                    Measuring success through tangible improvements in public health outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials section - replacing team section */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-16 text-center scroll-fade opacity-0 transition-all duration-700 transform translate-y-4">
                            What Our Clients Say
                        </h2>

                        <div className="relative">
                            {/* Testimonial carousel */}
                            <div className="relative min-h-[200px] scroll-fade opacity-0 transition-all duration-700 transform translate-y-4">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`absolute w-full transition-all duration-700 ${
                                            index === currentTestimonial
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-8 pointer-events-none'
                                        }`}
                                    >
                                        <blockquote className="text-lg md:text-xl font-light text-gray-700 italic mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <p className="text-blue-600 text-right">— {testimonial.location}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation dots */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentTestimonial
                                                ? 'bg-blue-500 w-4'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Navigation arrows */}
                            <button
                                onClick={prevTestimonial}
                                className="absolute top-1/2 -left-12 -translate-y-1/2 text-gray-300 hover:text-blue-500 transition-colors duration-300 hidden md:block"
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextTestimonial}
                                className="absolute top-1/2 -right-12 -translate-y-1/2 text-gray-300 hover:text-blue-500 transition-colors duration-300 hidden md:block"
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Simple CTA */}
                <section className="py-32 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-xl text-center scroll-fade opacity-0 transition-all duration-700 transform translate-y-4">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-8">
                            Want to know more?
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-4 text-blue-600 border border-blue-400 rounded-full font-light hover:bg-blue-50 transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;