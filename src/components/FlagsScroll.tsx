import React from 'react';

const FlagsScroll: React.FC = () => {
  const countries = [
    { code: 'US', name: 'USA', flag: '🇺🇸' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'RO', name: 'Romania', flag: '🇷🇴' },
    { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
    { code: 'GB', name: 'UK', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'AE', name: 'UAE', flag: '🇦🇪' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedCountries = [...countries, ...countries];

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-primary-dark mb-2">
          Serving Students Globally
        </h3>
        <p className="text-neutral-600">
          We've helped thousands of students across these countries achieve academic excellence
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-slide-left">
          {duplicatedCountries.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex-shrink-0 mx-8 group cursor-pointer"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent-teal/10 group-hover:to-accent-light/10">
                  {country.flag}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-teal/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <p className="text-center mt-3 text-sm font-medium text-neutral-600 group-hover:text-accent-teal transition-colors">
                {country.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Fade gradients for smooth infinite scroll */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default FlagsScroll;
