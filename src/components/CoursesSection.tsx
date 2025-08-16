import React, { useState } from 'react';
import { BookOpen, Users, Clock, Star, Play, Award, ChevronRight, Filter } from 'lucide-react';

const CoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const categories = [
    'All', 'B-Tech CSE', 'MBA', 'BCA', 'MCA', 'Marketing', 
    'Data Science', 'MSc', 'M-Tech', 'BSc', 'Diploma'
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced Data Structures & Algorithms',
      category: 'B-Tech CSE',
      duration: '12 weeks',
      students: 2450,
      rating: 4.9,
      price: 299,
      originalPrice: 399,
      instructor: 'Dr. Sarah Johnson',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master complex data structures and algorithmic thinking for technical interviews and real-world applications.',
      features: ['Live Coding Sessions', 'Interview Prep', 'Project Portfolio', 'Certificate'],
      modules: 24,
      isPopular: true,
    },
    {
      id: 2,
      title: 'Strategic Management & Leadership',
      category: 'MBA',
      duration: '16 weeks',
      students: 1890,
      rating: 4.8,
      price: 449,
      originalPrice: 599,
      instructor: 'Prof. Michael Chen',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Develop strategic thinking and leadership skills essential for modern business management.',
      features: ['Case Studies', 'Leadership Simulations', 'Peer Networking', 'MBA Credit'],
      modules: 32,
      isPopular: false,
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      category: 'BCA',
      duration: '20 weeks',
      students: 3200,
      rating: 4.9,
      price: 399,
      originalPrice: 549,
      instructor: 'Alex Rodriguez',
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete web development bootcamp covering frontend, backend, and deployment.',
      features: ['Real Projects', 'Industry Mentorship', 'Job Placement', 'Portfolio Building'],
      modules: 40,
      isPopular: true,
    },
    {
      id: 4,
      title: 'Machine Learning & AI Fundamentals',
      category: 'MCA',
      duration: '14 weeks',
      students: 1650,
      rating: 4.7,
      price: 499,
      originalPrice: 699,
      instructor: 'Dr. Priya Sharma',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive introduction to ML algorithms, neural networks, and AI applications.',
      features: ['Hands-on Projects', 'Industry Tools', 'Research Papers', 'Capstone Project'],
      modules: 28,
      isPopular: false,
    },
    {
      id: 5,
      title: 'Digital Marketing Mastery',
      category: 'Marketing',
      duration: '10 weeks',
      students: 2800,
      rating: 4.8,
      price: 249,
      originalPrice: 349,
      instructor: 'Emma Thompson',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master modern digital marketing strategies, SEO, social media, and analytics.',
      features: ['Live Campaigns', 'Analytics Tools', 'Social Media Strategy', 'Google Ads'],
      modules: 20,
      isPopular: true,
    },
    {
      id: 6,
      title: 'Data Science with Python',
      category: 'Data Science',
      duration: '18 weeks',
      students: 2100,
      rating: 4.9,
      price: 549,
      originalPrice: 749,
      instructor: 'Dr. James Wilson',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete data science pipeline from data collection to machine learning deployment.',
      features: ['Python Libraries', 'Real Datasets', 'Visualization', 'ML Models'],
      modules: 36,
      isPopular: true,
    },
    {
      id: 7,
      title: 'Advanced Physics & Research Methods',
      category: 'MSc',
      duration: '24 weeks',
      students: 890,
      rating: 4.6,
      price: 699,
      originalPrice: 899,
      instructor: 'Prof. David Kumar',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced physics concepts with focus on research methodology and scientific writing.',
      features: ['Lab Simulations', 'Research Projects', 'Publication Support', 'Thesis Guidance'],
      modules: 48,
      isPopular: false,
    },
    {
      id: 8,
      title: 'Software Engineering Principles',
      category: 'M-Tech',
      duration: '16 weeks',
      students: 1200,
      rating: 4.8,
      price: 599,
      originalPrice: 799,
      instructor: 'Dr. Lisa Anderson',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced software engineering practices, architecture design, and project management.',
      features: ['System Design', 'Code Reviews', 'Agile Methods', 'Industry Projects'],
      modules: 32,
      isPopular: false,
    },
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Master Skills That Matter
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Comprehensive courses designed by industry experts to accelerate your academic and professional growth
          </p>
          <button className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Learning Today →
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-dark to-accent-teal text-white shadow-lg'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCourse(course.id)}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {course.isPopular && (
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🔥 Popular
                    </span>
                  )}
                  <span className="bg-accent-teal text-white px-3 py-1 rounded-full text-xs font-bold">
                    {course.level}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary-dark">${course.price}</span>
                    <span className="text-sm text-neutral-500 line-through ml-2">${course.originalPrice}</span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-xs font-medium">
                    {course.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-neutral-600">{course.rating}</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-primary-dark mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">by {course.instructor}</span>
                  <button className="bg-gradient-to-r from-primary-dark to-accent-teal text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const course = courses.find(c => c.id === selectedCourse)!;
                return (
                  <div>
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedCourse(null)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-4">
                          <div>
                            <span className="text-2xl font-bold text-primary-dark">${course.price}</span>
                            <span className="text-lg text-neutral-500 line-through ml-2">${course.originalPrice}</span>
                          </div>
                          <button className="bg-gradient-to-r from-primary-dark to-accent-teal text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-sm font-medium">
                              {course.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-5 w-5 text-yellow-400 fill-current" />
                              <span className="font-medium">{course.rating}</span>
                              <span className="text-neutral-500">({course.students.toLocaleString()} students)</span>
                            </div>
                          </div>

                          <h1 className="font-heading text-3xl font-bold text-primary-dark mb-4">
                            {course.title}
                          </h1>

                          <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                            {course.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-neutral-50 p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <Clock className="h-5 w-5 text-accent-teal" />
                                <span className="font-medium">Duration</span>
                              </div>
                              <span className="text-neutral-600">{course.duration}</span>
                            </div>
                            <div className="bg-neutral-50 p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <BookOpen className="h-5 w-5 text-accent-teal" />
                                <span className="font-medium">Modules</span>
                              </div>
                              <span className="text-neutral-600">{course.modules} modules</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">
                              What You'll Learn
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {course.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                                  <span className="text-neutral-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-1">
                          <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl border border-neutral-200 sticky top-4">
                            <div className="text-center mb-6">
                              <img
                                src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100`}
                                alt={course.instructor}
                                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                              />
                              <h4 className="font-heading font-bold text-primary-dark">{course.instructor}</h4>
                              <p className="text-sm text-neutral-600">Course Instructor</p>
                            </div>

                            <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                <span className="text-neutral-600">Level:</span>
                                <span className="font-medium">{course.level}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-neutral-600">Students:</span>
                                <span className="font-medium">{course.students.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-neutral-600">Rating:</span>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="font-medium">{course.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Limited Time Offers */}
        <div className="mt-20 bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-12 text-white text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            🔥 Limited Time Bundle Offers
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Get 3 courses for the price of 2! Offer ends in:
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <button className="bg-white text-primary-dark font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Claim Bundle Deal →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
