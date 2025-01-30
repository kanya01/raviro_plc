import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../../components/ContactPage';

// Mock the Header and Footer components
jest.mock('../../components/Header', () => {
    return function MockHeader() {
        return <div data-testid="mock-header">Header</div>;
    };
});

jest.mock('../../components/Footer', () => {
    return function MockFooter() {
        return <div data-testid="mock-footer">Footer</div>;
    };
});

// Mock fetch
global.fetch = jest.fn();

describe('ContactPage', () => {
    // Reset all mocks before each test
    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch.mockClear();
    });

    describe('Initial Rendering', () => {
        it('renders the page layout correctly', () => {
            render(<ContactPage />);

            expect(screen.getByTestId('mock-header')).toBeInTheDocument();
            expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
            expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
            expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument();
        });

        it('renders the contact form with all fields', () => {
            render(<ContactPage />);

            expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/inquiry/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
        });

        it('initializes form fields as empty', () => {
            render(<ContactPage />);

            expect(screen.getByLabelText(/name/i)).toHaveValue('');
            expect(screen.getByLabelText(/email/i)).toHaveValue('');
            expect(screen.getByLabelText(/inquiry/i)).toHaveValue('');
        });
    });

    describe('Form Interactions', () => {
        it('updates form fields when typing', async () => {
            render(<ContactPage />);

            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/inquiry/i), 'Test message');

            expect(screen.getByLabelText(/name/i)).toHaveValue('John Doe');
            expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com');
            expect(screen.getByLabelText(/inquiry/i)).toHaveValue('Test message');
        });

        it('displays required field validation', async () => {
            render(<ContactPage />);

            const submitButton = screen.getByRole('button', { name: /submit/i });
            fireEvent.click(submitButton);

            // HTML5 validation will prevent form submission and show validation messages
            expect(screen.getByLabelText(/name/i)).toBeInvalid();
            expect(screen.getByLabelText(/email/i)).toBeInvalid();
            expect(screen.getByLabelText(/inquiry/i)).toBeInvalid();
        });

        it('validates email format', async () => {
            render(<ContactPage />);

            const emailInput = screen.getByLabelText(/email/i);
            await userEvent.type(emailInput, 'invalid-email');

            // HTML5 email validation
            expect(emailInput).toBeInvalid();
        });
    });

    describe('Form Submission', () => {
        it('handles successful submission', async () => {
            // Mock successful API response
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'success' })
            });

            render(<ContactPage />);

            // Fill out form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/inquiry/i), 'Test message');

            // Submit form
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check loading state
            expect(screen.getByRole('button')).toHaveTextContent(/submitting/i);
            expect(screen.getByRole('button')).toBeDisabled();

            // Wait for success modal
            await waitFor(() => {
                expect(screen.getByText(/thank you for submitting your query/i)).toBeInTheDocument();
            });

            // Verify API call
            expect(fetch).toHaveBeenCalledWith('/api/inquiries', expect.objectContaining({
                method: 'POST',
                headers: expect.objectContaining({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    inquiry: {
                        name: 'John Doe',
                        email: 'john@example.com',
                        inquiry: 'Test message'
                    }
                })
            }));
        });
//fix the following tests handling submission errors, and network errors find a way to combine the two tests and remove the skip
        test.skip('handles submission errors', async () => {
            // Mock API error response
            global.fetch.mockResolvedValueOnce({
                ok: false,
                json: async () => ({ errors: ['Server error'] })
            });

            render(<ContactPage />);

            // Fill and submit form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/inquiry/i), 'Test message');

            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check for error message
            await waitFor(() => {
                expect(screen.getByText(/failed to submit inquiry/i)).toBeInTheDocument();
            });
        });

        test.skip('handles network errors', async () => {
            // Mock network error
            global.fetch.mockRejectedValueOnce(new Error('Network error'));

            render(<ContactPage />);

            // Fill and submit form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/inquiry/i), 'Test message');

            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check for error message
            await waitFor(() => {
                expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
            });
        });
    });

    describe('Success Modal', () => {
        it('closes modal on outside click', async () => {
            // Mock successful submission
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'success' })
            });

            render(<ContactPage />);

            // Submit form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/inquiry/i), 'Test message');

            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Wait for modal
            await waitFor(() => {
                expect(screen.getByText(/thank you for submitting your query/i)).toBeInTheDocument();
            });

            // Click outside modal
            fireEvent.click(screen.getByText(/click outside to dismiss/i).parentElement.parentElement);

            // Modal should close and form should reset
            await waitFor(() => {
                expect(screen.queryByText(/thank you for submitting your query/i)).not.toBeInTheDocument();
                expect(screen.getByLabelText(/name/i)).toHaveValue('');
                expect(screen.getByLabelText(/email/i)).toHaveValue('');
                expect(screen.getByLabelText(/inquiry/i)).toHaveValue('');
            });
        });
    });

    describe('Accessibility', () => {
        it('has proper form labeling', () => {
            render(<ContactPage />);

            expect(screen.getByLabelText(/name/i)).toHaveAttribute('id', 'name');
            expect(screen.getByLabelText(/email/i)).toHaveAttribute('id', 'email');
            expect(screen.getByLabelText(/inquiry/i)).toHaveAttribute('id', 'inquiry');
        });

        it('maintains focus management during submission', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'success' })
            });

            render(<ContactPage />);

            const submitButton = screen.getByRole('button', { name: /submit/i });
            submitButton.focus();
            expect(document.activeElement).toBe(submitButton);

            fireEvent.click(submitButton);

            // Button should remain focused while submitting
            expect(document.activeElement).toBe(submitButton);
        });
    });
});