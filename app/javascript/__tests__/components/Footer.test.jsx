import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
    beforeEach(() => {
        // Add FontAwesome classes to jsdom
        document.body.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    `;
    });

    describe('Content Sections', () => {
        it('renders company section with correct content', () => {
            render(<Footer />);

            expect(screen.getByText('Raviro')).toBeInTheDocument();
            expect(screen.getByText(/Bridging the gap between public health research/i))
                .toBeInTheDocument();
        });

        it('renders quick links section with all links', () => {
            render(<Footer />);
            const quickLinks = ['Research Repository', 'Opportunities', 'About Us', 'Contact'];

            expect(screen.getByText('Quick Links')).toBeInTheDocument();
            quickLinks.forEach(link => {
                const linkElement = screen.getByText(link);
                expect(linkElement).toBeInTheDocument();
                expect(linkElement.closest('a')).toHaveAttribute('href');
            });
        });

        it('renders resources section with all links', () => {
            render(<Footer />);
            const resourceLinks = ['Blog', 'Publications', 'Partnerships', 'FAQ'];

            expect(screen.getByText('Resources')).toBeInTheDocument();
            resourceLinks.forEach(link => {
                const linkElement = screen.getByText(link);
                expect(linkElement).toBeInTheDocument();
                expect(linkElement.closest('a')).toHaveAttribute('href');
            });
        });

        it('renders contact section with correct information', () => {
            render(<Footer />);

            expect(screen.getByText('Contact Us')).toBeInTheDocument();
            expect(screen.getByText(/Email: contact@raviro.com/)).toBeInTheDocument();
            expect(screen.getByText(/Phone: \+1 234 567 890/)).toBeInTheDocument();
            expect(screen.getByText(/Address:/)).toBeInTheDocument();
        });
    });

    describe('Link Functionality', () => {
        it('renders all footer links with correct attributes', () => {
            render(<Footer />);
            const links = {
                'Research Repository': '/research',
                'Opportunities': '/opportunities',
                'About Us': '/about',
                'Contact': '/contact',
                'Blog': '/blog',
                'Publications': '/publications',
                'Partnerships': '/partnerships',
                'FAQ': '/faq'
            };

            Object.entries(links).forEach(([text, path]) => {
                const linkElement = screen.getByText(text).closest('a');
                expect(linkElement).toHaveAttribute('href', path);
                expect(linkElement).toHaveClass('text-gray-400');
                expect(linkElement).toHaveClass('hover:text-white');
                expect(linkElement).toHaveClass('transition-colors');
            });
        });
    });

    describe('Social Links', () => {
        it('renders social media links with correct attributes', () => {
            render(<Footer />);
            const socialLinks = ['twitter', 'linkedin', 'github'];

            const bottomSection = screen.getByText(/© \d{4} Raviro/).parentElement
                .parentElement;
            const socialIcons = bottomSection.querySelectorAll('a[target="_blank"]');

            expect(socialIcons).toHaveLength(socialLinks.length);

            socialIcons.forEach(icon => {
                expect(icon).toHaveAttribute('rel', 'noopener noreferrer');
                expect(icon).toHaveClass('text-gray-400');
                expect(icon).toHaveClass('hover:text-white');
            });
        });
    });

    describe('Layout and Styling', () => {
        it('has correct container and grid classes', () => {
            const { container } = render(<Footer />);

            expect(container.querySelector('.container')).toHaveClass('mx-auto', 'px-4', 'py-12');
            expect(container.querySelector('.grid')).toHaveClass(
                'grid-cols-1',
                'md:grid-cols-4',
                'gap-8'
            );
        });

        it('has correct responsive bottom bar layout', () => {
            const { container } = render(<Footer />);
            const bottomBar = container.querySelector('.border-t');

            expect(bottomBar).toHaveClass('border-gray-800', 'mt-8', 'pt-8');
            expect(bottomBar.firstElementChild).toHaveClass(
                'flex',
                'flex-col',
                'md:flex-row',
                'justify-between',
                'items-center'
            );
        });
    });

    describe('Dynamic Content', () => {
        it('displays current year in copyright text', () => {
            render(<Footer />);
            const currentYear = new Date().getFullYear();

            expect(screen.getByText(new RegExp(`© ${currentYear} Raviro`)))
                .toBeInTheDocument();
        });
    });

    describe('Accessibility', () => {
        it('uses semantic HTML structure', () => {
            const { container } = render(<Footer />);

            expect(container.querySelector('footer')).toBeInTheDocument();
            expect(container.querySelectorAll('h4')).toHaveLength(3);
            expect(container.querySelectorAll('ul')).toHaveLength(3);
        });

        it('has readable text colors', () => {
            const { container } = render(<Footer />);

            const textElements = container.querySelectorAll('.text-gray-400');
            textElements.forEach(element => {
                expect(element).toHaveClass('text-gray-400');
            });
        });
    });
});