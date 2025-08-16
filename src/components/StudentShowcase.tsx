import React, { useState } from 'react';
import { Star, GraduationCap, BookOpen, Award, X } from 'lucide-react';

const StudentShowcase: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const students = [
    {
      name: 'Maria Rodriguez',
      country: 'Australia',
      flag: '🇦🇺',
      project: 'MBA Thesis',
      grade: 'Grade A+',
      subject: 'Business Strategy',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Edunique Minds helped me achieve excellence in my MBA thesis. Their attention to detail and research quality exceeded my expectations.',
      rating: 5,
      university: 'University of Melbourne',
    },
    {
      name: 'James Thompson',
      country: 'Canada',
      flag: '🇨🇦',
      project: 'Research Paper',
      grade: 'Grade A',
      subject: 'Computer Science',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The quality of work and timely delivery made all the difference in my academic success. Highly recommend their services!',
      rating: 5,
      university: 'University of Toronto',
    },
    {
      name: 'Aisha Patel',
      country: 'UK',
      flag: '🇬🇧',
      project: 'Dissertation',
      grade: 'Grade A',
      subject: 'Psychology',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Professional, reliable, and delivered beyond expectations. My dissertation was perfectly structured and well-researched.',
      rating: 5,
      university: 'King\'s College London',
    },
    {
      name: 'Michael Chen',
      country: 'Singapore',
      flag: '🇸🇬',
      project: 'Case Study',
      grade: 'Grade A+',
      subject: 'Finance',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Exceptional analytical depth and presentation quality. The case study analysis was comprehensive and insightful.',
      rating: 5,
      university: 'National University of Singapore',
    },
    {
      name: 'Sophie Mueller',
      country: 'Germany',
      flag: '🇩🇪',
      project: 'Assignment',
      grade: 'Grade A',
      subject: 'Engineering',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Technical precision and clear explanations. They understood complex engineering concepts and presented them perfectly.',
      rating: 5,
      university: 'Technical University of Munich',
    },
    {
      name: 'David Wilson',
      country: 'USA',
      flag: '🇺🇸',
      project: 'Thesis',
      grade: 'Grade A+',
      subject: 'Marketing',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Outstanding research quality and innovative marketing insights. This thesis helped me secure my dream job!',
      rating: 5,
      university: 'Harvard Business School',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real students, real results. See how we've helped students worldwide achieve academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedStudent(index)}
            >
              {/* Student Image */}
              <div className="relative overflow-hidden">
                <img
                  src={student.image}
                  alt={`${student.name} - Academic Success`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                  <span className="text-lg">{student.flag}</span>
                  <span className="text-sm font-medium text-primary-dark">{student.country}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {student.grade}
                </div>
              </div>

              {/* Student Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg font-bold text-primary-dark">
                    {student.name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(student.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <BookOpen className="h-4 w-4 text-accent-teal" />
                    <span className="text-sm">{student.project} - {student.subject}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <GraduationCap className="h-4 w-4 text-accent-teal" />
                    <span className="text-sm">{student.university}</span>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                  "{student.testimonial.slice(0, 120)}..."
                </p>

                <button className="mt-4 text-accent-teal font-medium text-sm hover:text-accent-light transition-colors">
                  Read Full Story →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedStudent !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={students[selectedStudent].image}
                  alt={students[selectedStudent].name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-primary-dark" />
                </button>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                  {students[selectedStudent].grade}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary-dark">
                      {students[selectedStudent].name}
                    </h3>
                    <p className="text-accent-teal font-medium">
                      {students[selectedStudent].country} {students[selectedStudent].flag}
                    </p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(students[selectedStudent].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-xl">
                    <BookOpen className="h-6 w-6 text-accent-teal" />
                    <div>
                      <p className="font-medium text-primary-dark">Project Type</p>
                      <p className="text-sm text-neutral-600">{students[selectedStudent].project}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-xl">
                    <Award className="h-6 w-6 text-accent-teal" />
                    <div>
                      <p className="font-medium text-primary-dark">Subject</p>
                      <p className="text-sm text-neutral-600">{students[selectedStudent].subject}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-accent-teal" />
                    <div>
                      <p className="font-medium text-primary-dark">University</p>
                      <p className="text-sm text-neutral-600">{students[selectedStudent].university}</p>
                    </div>
                  </div>
                </div>

                <blockquote className="bg-gradient-to-br from-accent-teal/5 to-accent-light/5 p-6 rounded-xl border-l-4 border-accent-teal">
                  <p className="text-neutral-700 italic leading-relaxed mb-4">
                    "{students[selectedStudent].testimonial}"
                  </p>
                  <footer className="text-accent-teal font-medium">
                    — {students[selectedStudent].name}, {students[selectedStudent].country}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <button className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get Your Success Story →
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;
