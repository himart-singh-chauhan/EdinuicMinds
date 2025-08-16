import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import PaymentPage from './components/PaymentPage';
import GetStartedSection from './components/GetStartedSection';
import Footer from './components/Footer';
import useScrollToTop from '@hooks/useScrollToTop';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import { TestimonialsColumn } from './components/ui/testimonials-columns-1';
import Testimonials from './components/ui/demo';

// Placeholder for Services Section
const Services = () => {
  console.log("Services component rendered");
  return (
    <section className="py-20 bg-yellow-300 text-gray-800" style={{ border: '2px solid red', zIndex: 10, display: 'block', padding: '20px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg">Explore our services.</p>
      </div>
    </section>
  );
};

function App() {
  useScrollToTop();

  console.log("GetStartedSection component rendered");

  return (
    <div className="min-h-screen bg-white" style={{ backgroundColor: 'lightcoral' }}> {/* Added background color */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<GetStartedSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials.Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
