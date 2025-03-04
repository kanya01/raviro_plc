import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const BlogPage = () => {
    useEffect(() => {
        const animateElements = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 100 * index);
            });
        };

        animateElements();

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
    }, []);

    // Sample blog posts data
    const blogPosts = [
        {
            slug: 'implementation-research-explained',
            title: 'Implementation Research Explained: Bridging the Know-Do Gap',
            excerpt: 'Learn how implementation research is transforming the way we approach public health challenges in resource-limited settings.',
            category: 'Research',
            date: 'March 2, 2025',
            readTime: '6 min read'
        },
        {
            slug: 'evidence-based-practices',
            title: 'Five Ways to Improve Evidence-Based Practice in Global Health',
            excerpt: 'Practical strategies for public health professionals to integrate research findings into their daily practice.',
            category: 'Best Practices',
            date: 'February 18, 2025',
            readTime: '8 min read'
        },
        {
            slug: 'knowledge-translation',
            title: 'Knowledge Translation: Moving from Research to Policy',
            excerpt: 'Exploring the critical process of transforming research evidence into effective policy changes in developing regions.',
            category: 'Policy',
            date: 'February 3, 2025',
            readTime: '7 min read'
        },
        {
            slug: 'community-engagement',
            title: 'The Role of Community Engagement in Sustainable Health Initiatives',
            excerpt: 'How meaningful community participation leads to more effective and sustainable public health outcomes.',
            category: 'Community',
            date: 'January 22, 2025',
            readTime: '5 min read'
        },
        {
            slug: 'digital-health-interventions',
            title: 'Digital Health Interventions: Opportunities and Challenges',
            excerpt: 'Examining the potential of digital technologies to address health challenges in resource-constrained environments.',
            category: 'Technology',
            date: 'January 10, 2025',
            readTime: '9 min read'
        },
        {
            slug: 'research-funding-strategies',
            title: 'Securing Research Funding in Competitive Environments',
            excerpt: 'Strategic approaches to improve success rates when applying for research funding in the global health sector.',
            category: 'Funding',
            date: 'December 15, 2024',
            readTime: '6 min read'
        }
    ];

    // Categories for filter
    const categories = [...new Set(blogPosts.map(post => post.category))];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow pt-24">
                {/* Blog Header */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6 fade-in opacity-0 transition-all duration-1000">
                            Insights
                        </h1>
                        <p className="text-lg text-gray-600 fade-in opacity-0 transition-all duration-1000 delay-200">
                            Perspectives on implementation research, evidence-based practice, and global health impact
                        </p>
                    </div>
                </section>

                {/* Subtle divider */}
                <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent fade-in opacity-0 transition-all duration-1000 delay-300"></div>

                {/* Blog Posts */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        {/* Categories Filter (Optional) */}
                        <div className="mb-16 overflow-x-auto whitespace-nowrap fade-in opacity-0 transition-all duration-1000 delay-400">
                            <div className="inline-flex space-x-4">
                                <button className="px-4 py-1 text-sm text-blue-600 border-b-2 border-blue-600">
                                    All
                                </button>
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-1 text-sm text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Blog Post Grid */}
                        <div className="space-y-20">
                            {blogPosts.map((post, index) => (
                                <article
                                    key={index}
                                    className="scroll-fade opacity-0 transition-all duration-700 transform translate-y-4"
                                    style={{transitionDelay: `${index * 100}ms`}}
                                >
                                    <a href={`/blog/${post.slug}`} className="block group">
                                        <div className="mb-3">
                                            <span className="text-xs text-blue-600 uppercase tracking-wider">{post.category}</span>
                                        </div>
                                        <h2 className="text-2xl font-light text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span>{post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Subscribe - Optional */}
                <section className="py-20 px-4 bg-gray-50 mt-16">
                    <div className="container mx-auto max-w-xl text-center scroll-fade opacity-0 transition-all duration-700 transform translate-y-4">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Subscribe to receive the latest insights directly in your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-400 rounded-md font-light hover:bg-blue-50 transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;