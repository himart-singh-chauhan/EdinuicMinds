import React from 'react';
import { Shield, FileText, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react';

const TermsConditions: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Service Agreement',
      content: [
        'By using Edunique Minds services, you agree to these terms and conditions.',
        'Our services include academic assistance, tutoring, and educational content.',
        'All work provided is for reference and educational purposes only.',
        'Students are responsible for understanding their institution\'s academic integrity policies.'
      ]
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: [
        'Provide accurate information when placing orders.',
        'Respect intellectual property rights and academic integrity.',
        'Use our services ethically and in accordance with your institution\'s policies.',
        'Maintain confidentiality of login credentials and account information.'
      ]
    },
    {
      icon: Shield,
      title: 'Privacy & Confidentiality',
      content: [
        'We maintain strict confidentiality of all client information.',
        'Personal data is protected according to international privacy standards.',
        'We do not share client information with third parties without consent.',
        'All communications and transactions are encrypted and secure.'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      content: [
        'All work is original and plagiarism-free.',
        'We guarantee timely delivery according to agreed deadlines.',
        'Unlimited revisions within 30 days of delivery.',
        'Full refund if work does not meet specified requirements.'
      ]
    },
    {
      icon: Scale,
      title: 'Payment Terms',
      content: [
        'Payment is required before work begins on any project.',
        'We accept major credit cards, PayPal, and bank transfers.',
        'Prices are quoted in USD and include all applicable taxes.',
        'Refunds are processed within 5-7 business days when applicable.'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Limitations & Disclaimers',
      content: [
        'Our services are for educational and reference purposes only.',
        'We are not responsible for how clients use the provided materials.',
        'Clients must comply with their institution\'s academic policies.',
        'We reserve the right to refuse service for unethical requests.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By accessing Edunique Minds, 
            you agree to be bound by these terms and conditions.
          </p>
          <div className="mt-6 text-sm text-neutral-500">
            Last updated: January 2024
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-primary-dark/5 to-accent-teal/5 p-6 border-b border-neutral-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary-dark to-accent-teal p-3 rounded-xl">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-primary-dark">
                    {section.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Important Information */}
        <div className="mt-16 bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-8 text-white">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">
            Important Notice
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-heading font-bold mb-3">Academic Integrity</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                All materials provided are for reference and learning purposes. Students must ensure 
                compliance with their institution's academic integrity policies and use our services ethically.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-heading font-bold mb-3">Modification of Terms</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of 
                significant changes, and continued use constitutes acceptance of modified terms.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
          <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">
            Questions About These Terms?
          </h3>
          <p className="text-neutral-600 mb-6">
            If you have any questions about these terms and conditions, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@eduniqueminds.com"
              className="bg-gradient-to-r from-primary-dark to-accent-teal text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Email Legal Team
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-dark text-primary-dark px-6 py-3 rounded-full hover:bg-primary-dark hover:text-white transition-all duration-300 font-medium"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Acceptance */}
        <div className="mt-8 text-center">
          <p className="text-neutral-500 text-sm">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
