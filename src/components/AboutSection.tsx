import React from 'react';
import { Shield, Clock, Users, Award, Globe, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '100% Plagiarism-Free',
      description: 'Every piece of work is original and thoroughly checked for authenticity.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver quality work within the agreed timeframe.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      title: 'Expert Writers',
      description: 'Our team consists of qualified professionals with advanced degrees.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We ensure the highest standards of academic excellence in every project.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving students across 20+ countries with localized support.',
      color: 'from-teal-400 to-teal-600',
    },
    {
      icon: CheckCircle,
      title: 'Confidential & Secure',
      description: 'Your privacy and data security are our top priorities.',
      color: 'from-red-400 to-red-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            About Edunique Minds
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are a premium academic assistance platform dedicated to helping students worldwide achieve 
            excellence in their educational journey. With years of experience and a commitment to quality, 
            we provide comprehensive support for all your academic needs.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-primary-dark/5 to-accent-teal/5 rounded-2xl p-8 border border-neutral-100">
            <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              To empower students globally by providing exceptional academic assistance that bridges the gap 
              between learning challenges and academic success. We believe every student deserves access to 
              quality educational support, regardless of their location or background.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent-teal/5 to-primary-dark/5 rounded-2xl p-8 border border-neutral-100">
            <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
              To become the world's most trusted academic assistance platform, known for our commitment to 
              excellence, integrity, and innovation. We envision a future where every student has the tools 
              and support they need to achieve their academic goals.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-12">
            Why Choose Edunique Minds?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-heading text-lg font-bold text-primary-dark mb-2">
                  {feature.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-12 text-white">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Ready to Experience Excellence?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of satisfied students who have achieved academic success with our help.
          </p>
          <button className="bg-white text-primary-dark font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get Started Today →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
