import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Raviro</h3>
                        <p className="text-gray-400">
                            Bridging the gap between public health research and real-world impact in developing regions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/research">Research Repository</FooterLink>
                            <FooterLink href="/opportunities">Opportunities</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/blog">Blog</FooterLink>
                            <FooterLink href="/publications">Publications</FooterLink>
                            <FooterLink href="/partnerships">Partnerships</FooterLink>
                            <FooterLink href="/faq">FAQ</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: contact@raviro.com</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Address: Your Address Here</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Raviro. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <SocialLink href="#" icon="twitter" />
                            <SocialLink href="#" icon="linkedin" />
                            <SocialLink href="#" icon="github" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children }) => (
    <li>
        <a
            href={href}
            className="text-gray-400 hover:text-white transition-colors duration-300"
        >
            {children}
        </a>
    </li>
);

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
    >
        <i className={`fab fa-${icon} text-xl`}></i>
    </a>
);

export default Footer;