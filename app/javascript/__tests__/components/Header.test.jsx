import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../../components/Header';

// Mock router if you're using React Router
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    Link: ({ children, to }) => <a href={to}>{children}</a>
}));

describe('Header', () => {
    describe('Desktop View', () => {
        it('renders all navigation links', () => {
            render(<Header />);

            expect(screen.getByText(/Research/i)).toBeInTheDocument();
            expect(screen.getByText(/About/i)).toBeInTheDocument();
            expect(screen.getByText(/Contact/i)).toBeInTheDocument();
        });

        it('renders brand logo/text', () => {
            render(<Header />);

            expect(screen.getByAltText(/brand logo/i)).toBeInTheDocument();
        });

        it('navigates when clicking links', () => {
            render(<Header />);

            const aboutLink = screen.getByText(/about/i);
            expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
        });
    });

    describe('Mobile View', () => {
        it('shows hamburger menu on mobile view', () => {
            render(<Header />);

            expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
        });

        it('toggles mobile menu when clicking hamburger', async () => {
            render(<Header />);

            const menuButton = screen.getByRole('button', { name: /menu/i });
            await userEvent.click(menuButton);

            expect(screen.getByRole('navigation')).toHaveClass('mobile-menu-open');

            await userEvent.click(menuButton);
            expect(screen.getByRole('navigation')).not.toHaveClass('mobile-menu-open');
        });

        it('closes mobile menu when selecting a link', async () => {
            render(<Header />);

            const menuButton = screen.getByRole('button', { name: /menu/i });
            await userEvent.click(menuButton);

            const aboutLink = screen.getByText(/about/i);
            await userEvent.click(aboutLink);

            expect(screen.getByRole('navigation')).not.toHaveClass('mobile-menu-open');
        });
    });

    describe('Accessibility', () => {
        it('has proper ARIA labels', () => {
            render(<Header />);

            expect(screen.getByRole('banner')).toBeInTheDocument();
            expect(screen.getByRole('navigation')).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /menu/i })).toHaveAttribute('aria-expanded');
        });

        it('handles keyboard navigation', () => {
            render(<Header />);

            const menuItems = screen.getAllByRole('link');
            menuItems[0].focus();

            expect(document.activeElement).toBe(menuItems[0]);
            fireEvent.keyDown(document.activeElement, { key: 'Tab' });
            expect(document.activeElement).toBe(menuItems[1]);
        });
    });
});