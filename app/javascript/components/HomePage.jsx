import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import ExploreButton from "./ExploreButton";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll border-2 border-blue-500">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PublicationCard = ({ title, authors, date, abstract }) => (
  <div className="bg-white rounded-lg shadow-md p-6 animate-on-scroll">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{authors.join(", ")}</p>
    <p className="text-sm text-gray-500 mb-3">{date}</p>
    <p className="text-gray-700">{abstract}</p>
    <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
      Read More →
    </button>
  </div>
);

const OpportunityCard = ({ title, organization, deadline, type }) => (
  <div className="bg-white rounded-lg shadow-md p-6 animate-on-scroll">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {type}
      </span>
    </div>
    <p className="text-gray-600 mb-2">{organization}</p>
    <p className="text-sm text-gray-500">Deadline: {deadline}</p>
    <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
      View Details →
    </button>
  </div>
);

const HomePage = ({ featuredPublications = [], recentOpportunities = [] }) => {
  useEffect(() => {
    // Use querySelectorAll instead of querySelector for multiple elements
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe all animated elements
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bridging the gap between public health research and real-world
                impact in developing regions
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Through knowledge brokering, advocacy, and collaborative
                solutions
              </p>
              <div className="flex justify-center gap-4">
                <ExploreButton
                  text="Explore Projects"
                  href="/partnerships"
                  variant="primary"
                />

                <ExploreButton
                  text="View Opportunities"
                  variant="secondary"
                  href="/opportunities"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Value Proposition
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Raviro empowers public health professionals and researchers in
                the Global South by connecting evidence to action through a
                comprehensive digital hub for research sharing, funding
                opportunities, and capacity building.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Core Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FeatureCard
                title="Research Repository"
                description="Access and share cutting-edge public health research focused on developing regions"
                icon="📚"
              />
              <FeatureCard
                title="Opportunity Center"
                description="Discover funding opportunities and research assistant positions"
                icon="🔍"
              />
              <FeatureCard
                title="Capacity Building"
                description="Access training resources and professional development tools"
                icon="📈"
              />
            </div>
          </div>
        </section>

        {/* Featured Publications Section */}
        {featuredPublications.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Featured Research
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredPublications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    publication={publication}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Opportunities Section */}
        {recentOpportunities.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Latest Opportunities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {recentOpportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our network of public health professionals and researchers
              working to improve health outcomes in developing regions.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
