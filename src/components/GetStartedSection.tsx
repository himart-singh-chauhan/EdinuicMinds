import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GetStartedSection: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 py-20 sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          opacity: 0.1
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text mb-6">
            Ready to Dive In?
          </h2>
          <p className="text-lg md:text-xl text-textSecondary mb-10">
            Join thousands of learners and take the next step in your career. Access expert-led courses, hands-on projects, and a vibrant community. Your future starts now.
          </p>
          <div className="flex justify-center">
            <Link
              to="/payment"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-primary/90"
            >
              <span className="flex items-center">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
