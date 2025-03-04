import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const mainLinks = [
        { name: 'Research', url: '/research' },
        { name: 'Opportunities', url: '/opportunities' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' }
    ];

    const socialLinks = [
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'LinkedIn', icon: 'linkedin', url: '#' }
    ];

    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-6">
                {/* Simple two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left column */}
                    <div>
                        <div className="text-xl font-extralight text-gray-800 mb-6">Raviro</div>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Bridging the gap between public health research and real-world impact in developing regions.
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col md:items-end">
                        {/* Navigation links */}
                        <nav className="flex flex-wrap gap-6 mb-8">
                            {mainLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Social links */}
                        <div className="flex gap-6">
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    aria-label={link.name}
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    <i className={`fab fa-${link.icon} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-100 mt-12 pt-8 text-center">
                    <p className="text-xs text-gray-400">
                        © {currentYear} Raviro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;