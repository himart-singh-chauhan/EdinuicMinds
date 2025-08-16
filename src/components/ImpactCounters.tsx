import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, GraduationCap, Globe, Star } from 'lucide-react';

const ImpactCounters: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    assignments: 0,
    theses: 0,
    countries: 0,
    rating: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    assignments: 5000,
    theses: 1200,
    countries: 20,
    rating: 4.9,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        const progress = Math.min(currentStep / steps, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setCounts({
          assignments: Math.floor(targetCounts.assignments * easeOutProgress),
          theses: Math.floor(targetCounts.theses * easeOutProgress),
          countries: Math.floor(targetCounts.countries * easeOutProgress),
          rating: Math.min(targetCounts.rating * easeOutProgress, targetCounts.rating),
        });

        currentStep++;
        if (currentStep > steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const cleanup = animateCounters();
    return cleanup;
  }, [isVisible]);

  const stats = [
    {
      icon: CheckCircle,
      count: counts.assignments.toLocaleString(),
      label: 'Assignments Delivered',
      suffix: '+',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: GraduationCap,
      count: counts.theses.toLocaleString(),
      label: 'Theses Completed',
      suffix: '+',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Globe,
      count: counts.countries.toString(),
      label: 'Countries Served',
      suffix: '+',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: Star,
      count: counts.rating.toFixed(1),
      label: 'Average Rating',
      suffix: '/5',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-100',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to academic excellence and student success worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="mb-2">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark">
                    {stat.count}
                  </span>
                  <span className="font-heading text-2xl font-bold text-accent-teal ml-1">
                    {stat.suffix}
                  </span>
                </div>
                
                <p className="text-neutral-600 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
