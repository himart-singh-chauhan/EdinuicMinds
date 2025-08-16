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
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="courses">
        <CoursesSection />
      </div>
      <ImpactCounters />
      <FlagsScroll />
      <HowItWorks />
      <StudentShowcase />
      <div id="testimonials">
        <Testimonials.Testimonials />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
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
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
