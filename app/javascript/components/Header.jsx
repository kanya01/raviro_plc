import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="text-2xl font-extralight tracking-wide text-gray-800">
                        Raviro
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {/*{['Research', 'Opportunities', 'About', 'Contact'].map((item) => (*/}
                        {[ 'Blog','About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm font-light text-gray-600 hover:text-blue-500 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${
                        isMobileMenuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="rounded-md bg-white p-4 space-y-3 shadow-sm">
                        {/*{['Research', 'Opportunities', 'About', 'Contact'].map((item) => (*/}
                        {[ 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="block text-sm py-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;