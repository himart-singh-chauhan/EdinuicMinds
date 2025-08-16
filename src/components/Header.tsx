import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Menu, X, Globe, BookOpen } from 'lucide-react';

    const Header: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-primary-dark to-accent-teal p-2 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-xl text-primary-dark">
                    Edunique Minds
                  </h1>
                  <p className="text-xs text-neutral-500 -mt-1">Academic Excellence</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/courses" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
                  Courses
                </Link>
                <Link to="/about" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
                  About
                </Link>
                <Link to="/services" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
                  Services
                </Link>
                <Link to="/testimonials" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
                  Testimonials
                </Link>
                <Link to="/contact" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
                  Contact
                </Link>
                <Link
                  to="/payment"
                  className="bg-gradient-to-r from-primary-dark to-accent-teal text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Payment
                </Link>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-neutral-700 hover:text-accent-teal transition-colors"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
                  <Link to="/courses" className="block w-full text-left px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors">
                    Courses
                  </Link>
                  <Link to="/about" className="block w-full text-left px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors">
                    About
                  </Link>
                  <Link to="/services" className="block w-full text-left px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors">
                    Services
                  </Link>
                  <Link to="/testimonials" className="block w-full text-left px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors">
                    Testimonials
                  </Link>
                  <Link to="/contact" className="block w-full text-left px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors">
                    Contact
                  </Link>
                  <Link
                    to="/payment"
                    className="w-full mt-4 bg-gradient-to-r from-primary-dark to-accent-teal text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Payment
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      );
    };

    export default Header;
