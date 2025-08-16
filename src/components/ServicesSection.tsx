import React from 'react';
import { FileText, BookOpen, Search, Presentation as PresentationChart, Users, GraduationCap, Calculator, Lightbulb } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Assignment Help',
      description: 'Expert assistance with essays, reports, and academic assignments across all subjects.',
      features: ['All Academic Levels', 'Multiple Subjects', 'Original Content', 'Timely Delivery'],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: GraduationCap,
      title: 'Thesis & Dissertation',
      description: 'Comprehensive support for your thesis and dissertation projects from proposal to defense.',
      features: ['Research Proposal', 'Literature Review', 'Data Analysis', 'Final Defense Prep'],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: Search,
      title: 'Research Papers',
      description: 'In-depth research papers with proper methodology and academic formatting.',
      features: ['Original Research', 'Peer Review Quality', 'Proper Citations', 'Statistical Analysis'],
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: PresentationChart,
      title: 'Case Studies',
      description: 'Detailed case study analysis with practical insights and recommendations.',
      features: ['Industry Analysis', 'Problem Solving', 'Strategic Recommendations', 'Visual Presentations'],
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      icon: BookOpen,
      title: 'Online Courses',
      description: 'Structured learning programs designed to enhance your academic and professional skills.',
      features: ['Interactive Content', 'Expert Instructors', 'Certification', 'Flexible Schedule'],
      color: 'from-teal-400 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
    },
    {
      icon: Users,
      title: 'Tutoring Services',
      description: 'One-on-one tutoring sessions with subject matter experts for personalized learning.',
      features: ['Personalized Learning', 'Flexible Timing', 'Progress Tracking', 'Exam Preparation'],
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-red-100',
    },
    {
      icon: Calculator,
      title: 'Technical Projects',
      description: 'Specialized assistance for engineering, computer science, and technical projects.',
      features: ['Programming Help', 'Engineering Design', 'Data Analysis', 'Technical Documentation'],
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
    },
    {
      icon: Lightbulb,
      title: 'Proposal Writing',
      description: 'Professional proposal writing for research, business, and project submissions.',
      features: ['Research Proposals', 'Grant Applications', 'Business Plans', 'Project Proposals'],
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive academic assistance tailored to your needs. From assignments to advanced research, 
            we provide expert support across all academic disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${service.bgColor} p-6 relative overflow-hidden`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-primary-dark to-accent-teal text-white py-3 px-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-12 text-white">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Every project is unique. Get a personalized quote based on your specific requirements, 
            deadline, and academic level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-dark font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Custom Quote →
            </button>
            <button className="border-2 border-white text-white font-heading font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary-dark transition-all duration-300">
              View Pricing Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
