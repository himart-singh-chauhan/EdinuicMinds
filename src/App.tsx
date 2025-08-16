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
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ImpactCounters from './components/ImpactCounters';
import FlagsScroll from './components/FlagsScroll';
import StudentShowcase from './components/StudentShowcase';
import Testimonials from './components/ui/demo';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ImpactCounters />
      <FlagsScroll />
      <HowItWorks />
      <StudentShowcase />
      <Testimonials.Testimonials />
      <GetStartedSection />
    </>
  );
};

function App() {
  useScrollToTop();


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/testimonials" element={<Testimonials.Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
