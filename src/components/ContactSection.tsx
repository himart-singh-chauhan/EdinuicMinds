import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    queryType: '',
    message: ''
  });

  const countries = [
    'USA', 'Australia', 'Romania', 'Tanzania', 'UK', 'Canada', 
    'Germany', 'France', 'UAE', 'Singapore', 'Japan', 'Other'
  ];

  const queryTypes = [
    'Assignment Help', 'Thesis Writing', 'Research Paper', 'Case Study',
    'Online Course', 'Tutoring', 'Technical Project', 'General Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-dark to-primary-light text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Let's Get in Touch
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to start your academic journey with us? Get in touch and let's discuss how we can help you achieve excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-teal/20 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-white/80">support@eduniqueminds.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-teal/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-teal/20 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-white/80">123 Academic Street<br />Education District, Global City</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-teal/20 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-white/80">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-heading text-lg font-bold mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <button className="w-full bg-accent-teal hover:bg-accent-light text-white py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Start Live Chat</span>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Request Callback</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="font-heading text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                  >
                    <option value="" className="text-gray-800">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country} className="text-gray-800">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Query Type
                  </label>
                  <select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                  >
                    <option value="" className="text-gray-800">Select query type</option>
                    {queryTypes.map(type => (
                      <option key={type} value={type} className="text-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-teal to-accent-light text-white font-heading font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-white/70 text-sm">
                🔒 Your information is secure and confidential
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-heading font-bold mb-3">How do I get started?</h4>
              <p className="text-white/80 text-sm">
                Simply fill out our quote form with your requirements, and we'll provide you with an instant price and timeline.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-heading font-bold mb-3">Is my work guaranteed to be original?</h4>
              <p className="text-white/80 text-sm">
                Yes, we guarantee 100% original, plagiarism-free work with proper citations and references.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-heading font-bold mb-3">What if I need revisions?</h4>
              <p className="text-white/80 text-sm">
                We offer unlimited revisions within 30 days to ensure your complete satisfaction with the work.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-heading font-bold mb-3">How secure is my payment?</h4>
              <p className="text-white/80 text-sm">
                We use industry-standard encryption and secure payment gateways to protect your financial information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
