import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Simulate API call
      try {
          const response = await fetch('/api/inquiries', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': document.querySelector('[name="csrf-token"]')?.content
              },
              body: JSON.stringify({
                  inquiry: {
                      name: formData.name,
                      email: formData.email,
                      inquiry: formData.inquiry
                  }
              })
          });
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.errors || 'Failed to submit inquiry');
          }
          setIsSubmitted(true);
      } catch (err) {
            setError(err.message || 'An error occurred. Please try again.');
      } finally {
            setIsSubmitting(false);
      }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-gray-500 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="bg-red-50 border-red-200 text-red-600 px-4 py-3 rounded-md">
                                    {error}
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                                    Inquiry
                                </label>
                                <textarea
                                    id="inquiry"
                                    name="inquiry"
                                    required
                                    rows="4"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}
                  transition-colors duration-200 ease-in-out`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    ) : (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                                name: '',
                                email: '',
                                inquiry: ''
                            });
                        }}>
                            <div
                                className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4 text-center space-y-4 transform-all duration-300 "
                                onClick={(e) => e.stopPropagation()}
                                >
                            <div className="text-green-500 text-5xl mb-4">✓</div>
                            <h2 className="text-2xl font-semibold text-gray-900">Thank you for submitting your
                                query</h2>
                            <p className="text-gray-600">We will get back to you shortly.</p>
                            <p className="text-sm text-gray-500 mt-4">(Click outside to dismiss)</p>
                        </div>
                            </div>
                    )}
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;