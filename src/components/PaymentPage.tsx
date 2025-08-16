import React, { useState } from 'react';
import { CreditCard, Shield, Clock, CheckCircle, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

interface PaymentPageProps {
  onBack?: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    
    // Project Details
    projectType: '',
    subject: '',
    deadline: '',
    pages: '',
    academicLevel: '',
    instructions: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Agreement
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [orderSummary] = useState({
    basePrice: 299,
    urgencyFee: 50,
    qualityAssurance: 25,
    total: 374,
    currency: 'USD'
  });

  const countries = [
    'USA', 'Australia', 'Romania', 'Tanzania', 'UK', 'Canada', 
    'Germany', 'France', 'UAE', 'Singapore', 'Japan'
  ];

  const projectTypes = [
    'Assignment', 'Thesis', 'Research Paper', 'Case Study', 
    'Essay', 'Dissertation', 'Project Report', 'Proposal'
  ];

  const academicLevels = [
    'High School', 'Undergraduate', 'Graduate', 'Masters', 'PhD'
  ];

  const deadlines = [
    '24 Hours', '3 Days', '1 Week', '2 Weeks', '1 Month', '2+ Months'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment submitted:', formData);
  };

  const steps = [
    { id: 1, title: 'Project Details', icon: CheckCircle },
    { id: 2, title: 'Personal Info', icon: CheckCircle },
    { id: 3, title: 'Payment', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-accent-teal hover:text-accent-light transition-colors mb-4"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Quote</span>
            </button>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Secure Payment
          </h1>
          <p className="text-lg text-neutral-600">
            Complete your order with our secure payment system
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`flex items-center space-x-2 ${
                  currentStep >= step.id ? 'text-accent-teal' : 'text-neutral-400'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step.id 
                      ? 'bg-accent-teal text-white' 
                      : 'bg-neutral-200 text-neutral-400'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-bold">{step.id}</span>
                    )}
                  </div>
                  <span className="font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 ${
                    currentStep > step.id ? 'bg-accent-teal' : 'bg-neutral-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Project Details */}
              {currentStep === 1 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
                  <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">
                    Project Details
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Computer Science, Business"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Academic Level *
                      </label>
                      <select
                        name="academicLevel"
                        value={formData.academicLevel}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      >
                        <option value="">Select level</option>
                        {academicLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Deadline *
                      </label>
                      <select
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      >
                        <option value="">Select deadline</option>
                        {deadlines.map(deadline => (
                          <option key={deadline} value={deadline}>{deadline}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Number of Pages *
                      </label>
                      <input
                        type="number"
                        name="pages"
                        value={formData.pages}
                        onChange={handleInputChange}
                        required
                        min="1"
                        placeholder="e.g., 5"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-neutral-700 font-medium mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      name="instructions"
                      value={formData.instructions}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Please provide any specific requirements, formatting guidelines, or additional information..."
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full mt-6 bg-gradient-to-r from-primary-dark to-accent-teal text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Continue to Personal Info →
                  </button>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
                  <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-neutral-700 font-medium mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      >
                        <option value="">Select your country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 border-2 border-neutral-300 text-neutral-600 font-bold py-4 px-6 rounded-xl hover:bg-neutral-50 transition-all duration-300"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 bg-gradient-to-r from-primary-dark to-accent-teal text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Continue to Payment →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
                  <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">
                    Payment Information
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <label className="block text-neutral-700 font-medium mb-4">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 border-2 rounded-xl transition-all ${
                          paymentMethod === 'card'
                            ? 'border-accent-teal bg-accent-teal/5'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <CreditCard className="h-6 w-6 mx-auto mb-2 text-accent-teal" />
                        <span className="font-medium">Credit Card</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-4 border-2 rounded-xl transition-all ${
                          paymentMethod === 'paypal'
                            ? 'border-accent-teal bg-accent-teal/5'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="h-6 w-6 mx-auto mb-2 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          PP
                        </div>
                        <span className="font-medium">PayPal</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`p-4 border-2 rounded-xl transition-all ${
                          paymentMethod === 'bank'
                            ? 'border-accent-teal bg-accent-teal/5'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="h-6 w-6 mx-auto mb-2 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          $
                        </div>
                        <span className="font-medium">Bank Transfer</span>
                      </button>
                    </div>
                  </div>

                  {/* Credit Card Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-neutral-700 font-medium mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-neutral-700 font-medium mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-neutral-700 font-medium mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            placeholder="123"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-neutral-700 font-medium mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Terms Agreement */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-accent-teal border-neutral-300 rounded focus:ring-accent-teal"
                      />
                      <label className="text-sm text-neutral-600">
                        I agree to the <a href="#" className="text-accent-teal hover:underline">Terms & Conditions</a> and understand that all work is for reference purposes only.
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-accent-teal border-neutral-300 rounded focus:ring-accent-teal"
                      />
                      <label className="text-sm text-neutral-600">
                        I agree to the <a href="#" className="text-accent-teal hover:underline">Privacy Policy</a> and consent to data processing.
                      </label>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 border-2 border-neutral-300 text-neutral-600 font-bold py-4 px-6 rounded-xl hover:bg-neutral-50 transition-all duration-300"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary-dark to-accent-teal text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Lock className="h-5 w-5" />
                      <span>Complete Payment</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100 sticky top-8">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Base Price</span>
                  <span className="font-medium">${orderSummary.basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Urgency Fee</span>
                  <span className="font-medium">${orderSummary.urgencyFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Quality Assurance</span>
                  <span className="font-medium">${orderSummary.qualityAssurance}</span>
                </div>
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-primary-dark">Total</span>
                    <span className="font-bold text-primary-dark text-xl">
                      ${orderSummary.total} {orderSummary.currency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Secure Payment</span>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 256-bit SSL encryption</li>
                  <li>• PCI DSS compliant</li>
                  <li>• Money-back guarantee</li>
                  <li>• 24/7 fraud protection</li>
                </ul>
              </div>

              {/* Guarantees */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% Plagiarism Free</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Shield className="h-4 w-4 text-purple-500" />
                  <span>Confidential & Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
