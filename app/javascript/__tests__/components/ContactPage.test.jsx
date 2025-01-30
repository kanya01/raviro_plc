import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../../components/ContactPage';

// Mock fetch globally
global.fetch = jest.fn();

describe('ContactPage', () => {
    // Reset all mocks before each test
    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch.mockClear();
    });

    // Initial Rendering Tests
    describe('Initial Rendering', () => {
        it('renders all form fields correctly', () => {
            render(<ContactPage />);

            // Check for form fields
            expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
        });

        it('renders with empty fields initially', () => {
            render(<ContactPage />);

            // Check initial field values
            expect(screen.getByLabelText(/name/i)).toHaveValue('');
            expect(screen.getByLabelText(/email/i)).toHaveValue('');
            expect(screen.getByLabelText(/message/i)).toHaveValue('');
        });

        it('displays form labels and placeholders', () => {
            render(<ContactPage />);

            // Check for proper labeling
            expect(screen.getByText(/name/i)).toBeInTheDocument();
            expect(screen.getByText(/email/i)).toBeInTheDocument();
            expect(screen.getByText(/message/i)).toBeInTheDocument();

            // Check placeholders if they exist
            const nameInput = screen.getByLabelText(/name/i);
            const emailInput = screen.getByLabelText(/email/i);
            const messageInput = screen.getByLabelText(/message/i);

            expect(nameInput).toHaveAttribute('placeholder', expect.any(String));
            expect(emailInput).toHaveAttribute('placeholder', expect.any(String));
            expect(messageInput).toHaveAttribute('placeholder', expect.any(String));
        });
    });

    // Form Validation Tests
    describe('Form Validation', () => {
        it('shows validation errors for empty required fields', async () => {
            render(<ContactPage />);

            // Try to submit empty form
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check for error messages
            await waitFor(() => {
                expect(screen.getByText(/name is required/i)).toBeInTheDocument();
                expect(screen.getByText(/email is required/i)).toBeInTheDocument();
                expect(screen.getByText(/message is required/i)).toBeInTheDocument();
            });
        });

        it('validates email format', async () => {
            render(<ContactPage />);

            // Type invalid email
            await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');

            // Try to submit
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check for email format error
            await waitFor(() => {
                expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
            });
        });

        it('validates message length', async () => {
            render(<ContactPage />);

            // Type short message
            await userEvent.type(screen.getByLabelText(/message/i), 'Short');

            // Try to submit
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check for length error
            await waitFor(() => {
                expect(screen.getByText(/message must be at least/i)).toBeInTheDocument();
            });
        });

        it('clears validation errors when fields are corrected', async () => {
            render(<ContactPage />);

            // Submit empty form to trigger errors
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Wait for errors
            await waitFor(() => {
                expect(screen.getByText(/name is required/i)).toBeInTheDocument();
            });

            // Fill in name field
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');

            // Check that name error is cleared
            await waitFor(() => {
                expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
            });
        });
    });

    // Form Submission Tests
    describe('Form Submission', () => {
        it('successfully submits form with valid data', async () => {
            // Mock successful response
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'success' })
            });

            render(<ContactPage />);

            // Fill form with valid data
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message');

            // Submit form
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Verify API call
            await waitFor(() => {
                expect(global.fetch).toHaveBeenCalledWith(
                    '/api/inquiries',
                    expect.objectContaining({
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: 'John Doe',
                            email: 'john@example.com',
                            message: 'This is a test message'
                        })
                    })
                );
            });

            // Check success message
            await waitFor(() => {
                expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
            });
        });

        it('handles API errors during submission', async () => {
            // Mock API error
            global.fetch.mockRejectedValueOnce(new Error('API Error'));

            render(<ContactPage />);

            // Fill form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

            // Submit form
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check error message
            await waitFor(() => {
                expect(screen.getByText(/error submitting form/i)).toBeInTheDocument();
            });
        });
    });

    // Loading State Tests
    describe('Loading States', () => {
        it('displays loading state during submission', async () => {
            // Mock delayed response
            global.fetch.mockImplementationOnce(() =>
                new Promise(resolve => setTimeout(() => resolve({
                    ok: true,
                    json: async () => ({ status: 'success' })
                }), 100))
            );

            render(<ContactPage />);

            // Fill and submit form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check loading state
            expect(screen.getByRole('button', { name: /submitting/i })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /submitting/i })).toBeDisabled();
        });
    });

    // Success Modal Tests
    describe('Success Modal', () => {
        it('displays success modal after successful submission', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'success' })
            });

            render(<ContactPage />);

            // Submit form with valid data
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check modal content
            await waitFor(() => {
                expect(screen.getByRole('dialog')).toBeInTheDocument();
                expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
            });
        });

        it('closes modal when clicking outside', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'success' })
            });

            render(<ContactPage />);

            // Submit form
            await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Wait for modal
            await waitFor(() => {
                expect(screen.getByRole('dialog')).toBeInTheDocument();
            });

            // Click outside modal
            fireEvent.click(document.body);

            // Check modal is closed
            await waitFor(() => {
                expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
            });
        });
    });

    // Accessibility Tests
    describe('Accessibility', () => {
        it('has proper ARIA labels', () => {
            render(<ContactPage />);

            expect(screen.getByRole('form')).toHaveAttribute('aria-label', 'Contact Form');
            expect(screen.getByLabelText(/name/i)).toHaveAttribute('aria-required', 'true');
            expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-required', 'true');
            expect(screen.getByLabelText(/message/i)).toHaveAttribute('aria-required', 'true');
        });

        it('associates error messages with form fields', async () => {
            render(<ContactPage />);

            // Submit empty form
            fireEvent.click(screen.getByRole('button', { name: /submit/i }));

            // Check error messages are properly associated
            await waitFor(() => {
                const nameInput = screen.getByLabelText(/name/i);
                const emailInput = screen.getByLabelText(/email/i);
                const messageInput = screen.getByLabelText(/message/i);

                expect(nameInput).toHaveAttribute('aria-invalid', 'true');
                expect(nameInput).toHaveAttribute('aria-errormessage');
                expect(emailInput).toHaveAttribute('aria-invalid', 'true');
                expect(emailInput).toHaveAttribute('aria-errormessage');
                expect(messageInput).toHaveAttribute('aria-invalid', 'true');
                expect(messageInput).toHaveAttribute('aria-errormessage');
            });
        });
    });
});