import React from 'react';
import { FileText, DollarSign, CreditCard, Play, Eye, Download } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Send Details',
      description: 'Share your requirements, guidelines, and any specific instructions for your academic work.',
      color: 'from-blue-400 to-blue-600',
      delay: '0s',
    },
    {
      icon: DollarSign,
      title: 'Get Quote',
      description: 'Receive an instant, transparent quote based on your requirements and deadline.',
      color: 'from-green-400 to-green-600',
      delay: '0.2s',
    },
    {
      icon: CreditCard,
      title: 'Payment First',
      description: 'Secure payment through our encrypted gateway. Your money is safe with us.',
      color: 'from-purple-400 to-purple-600',
      delay: '0.4s',
    },
    {
      icon: Play,
      title: 'Work Begins',
      description: 'Our expert writers and researchers start working on your project immediately.',
      color: 'from-orange-400 to-orange-600',
      delay: '0.6s',
    },
    {
      icon: Eye,
      title: 'Review & Revise',
      description: 'Review the completed work and request any revisions if needed. We ensure perfection.',
      color: 'from-teal-400 to-teal-600',
      delay: '0.8s',
    },
    {
      icon: Download,
      title: 'Final Delivery',
      description: 'Receive your completed, polished academic work on or before the agreed deadline.',
      color: 'from-red-400 to-red-600',
      delay: '1s',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Simple, transparent process from start to finish. Get your academic work done in just 6 easy steps.
          </p>
        </div>

        {/* Timeline for larger screens */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 via-orange-200 via-teal-200 to-red-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: step.delay }}
              >
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center text-sm font-bold text-primary-dark">
                    {index + 1}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:border-accent-teal/30">
                  <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical layout for mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 animate-fade-in-up"
              style={{ animationDelay: step.delay }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative`}>
                  <step.icon className="h-6 w-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center text-xs font-bold text-primary-dark">
                    {index + 1}
                  </div>
                </div>
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-neutral-200 to-neutral-100 ml-6 mt-2"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-neutral-100">
                <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow">
            Start Your Project Now →
          </button>
          <p className="mt-4 text-neutral-500">
            Join thousands of satisfied students worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
