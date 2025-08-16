import React from 'react';
    import { Link } from 'react-router-dom';
    import { Rocket } from 'lucide-react';

    const HeroSection: React.FC = () => {
      return (
        <section className="bg-gradient-to-br from-primary-dark to-accent-teal text-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Unlock Your Academic Potential
              </h1>
              <p className="text-lg sm:text-xl mb-8">
                Get personalized academic assistance and achieve your goals with Edunique Minds.
              </p>
              <div className="space-x-4">
                <Link
                  to="/payment"
                  className="bg-white text-primary-dark font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Rocket className="h-5 w-5" />
                  <span>Get Started</span>
                </Link>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300"
                >
                  Explore Services
                </button>
              </div>
              <div className="mt-8">
                <Link to="/terms" className="text-sm text-white/80 hover:underline">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default HeroSection;
