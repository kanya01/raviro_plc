import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
    describe('Content Rendering', () => {
        it('renders all three columns', () => {
            render(<Footer />);

            expect(screen.getByText(/about/i)).toBeInTheDocument();
            expect(screen.getByText(/quick links/i)).toBeInTheDocument();
            expect(screen.getByText(/contact us/i)).toBeInTheDocument();
        });

        it('displays current year in copyright notice', () => {
            render(<Footer />);

            const currentYear = new Date().getFullYear();
            expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
        });

        it('renders all social media links', () => {
            render(<Footer />);

            const socialLinks = screen.getAllByRole('link');
            const socialPlatforms = ['Twitter', 'LinkedIn', 'GitHub'];

            socialPlatforms.forEach(platform => {
                expect(
                    socialLinks.some(link => link.getAttribute('aria-label')?.includes(platform))
                ).toBe(true);
            });
        });
    });

    describe('Responsive Layout', () => {
        it('uses grid layout for columns', () => {
            const { container } = render(<Footer />);

            const footerGrid = container.firstChild;
            expect(footerGrid).toHaveClass('grid');
        });
    });

    describe('Links Functionality', () => {
        it('has proper href attributes for all links', () => {
            render(<Footer />);

            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).toHaveAttribute('href');
                expect(link.href).not.toBe('');
            });
        });

        it('opens social links in new tab', () => {
            render(<Footer />);

            const socialLinks = screen.getAllByRole('link');
            const externalLinks = socialLinks.filter(link =>
                link.getAttribute('aria-label')?.includes('Twitter') ||
                link.getAttribute('aria-label')?.includes('LinkedIn') ||
                link.getAttribute('aria-label')?.includes('GitHub')
            );

            externalLinks.forEach(link => {
                expect(link).toHaveAttribute('target', '_blank');
                expect(link).toHaveAttribute('rel', 'noopener noreferrer');
            });
        });
    });

    describe('Accessibility', () => {
        it('has proper ARIA labels for social icons', () => {
            render(<Footer />);

            const socialLinks = screen.getAllByRole('link');
            const socialPlatforms = ['Twitter', 'LinkedIn', 'GitHub'];

            socialPlatforms.forEach(platform => {
                const link = socialLinks.find(link =>
                    link.getAttribute('aria-label')?.includes(platform)
                );
                expect(link).toHaveAttribute('aria-label');
            });
        });

        it('has sufficient color contrast', () => {
            const { container } = render(<Footer />);

            const footerElement = container.firstChild;
            const computedStyle = window.getComputedStyle(footerElement);

            // Note: This is a basic check. You might want to use a color contrast testing library
            expect(computedStyle.backgroundColor).not.toBe(computedStyle.color);
        });
    });
});