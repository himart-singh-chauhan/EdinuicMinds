import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Edunique Minds transformed my academic journey. Their expert guidance helped me achieve excellence in my thesis with outstanding research quality and timely delivery.",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sarah Johnson",
    role: "MBA Graduate, Harvard",
  },
  {
    text: "The assignment help I received was exceptional. Original content, perfect formatting, and delivered ahead of schedule. Highly recommend their services!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Michael Chen",
    role: "Computer Science Student",
  },
  {
    text: "Professional research paper assistance that exceeded my expectations. The depth of analysis and quality of writing helped me secure top grades.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Emma Rodriguez",
    role: "Psychology PhD Candidate",
  },
  {
    text: "Outstanding dissertation support from proposal to defense. Their expertise in my field was evident, and the final work was publication-ready.",
    image: "https://images.pexels.com/photos/912274/pexels-photo-912274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "David Thompson",
    role: "Engineering PhD",
  },
  {
    text: "The case study analysis was comprehensive and insightful. Perfect structure, excellent research, and delivered exactly as promised.",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Lisa Wang",
    role: "Business Administration",
  },
  {
    text: "Exceptional tutoring services that helped me understand complex concepts. Patient, knowledgeable, and always available when needed.",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "James Wilson",
    role: "Mathematics Student",
  },
  {
    text: "The online course content was engaging and comprehensive. Interactive lessons and expert instruction made learning enjoyable and effective.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Maria Garcia",
    role: "Marketing Professional",
  },
  {
    text: "Technical project assistance was outstanding. Complex programming concepts were explained clearly, and the final code was clean and well-documented.",
    image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alex Kumar",
    role: "Software Engineering",
  },
  {
    text: "Research proposal writing service was exceptional. Professional guidance throughout the process resulted in approval on the first submission.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Rachel Brown",
    role: "Research Scholar",
  },
  {
    text: "The quality of academic writing and attention to detail was remarkable. Every requirement was met with precision and professionalism.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ahmed Hassan",
    role: "Literature Student",
  },
  {
    text: "Excellent support for statistical analysis and data interpretation. Made complex research methodology accessible and understandable.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sophie Miller",
    role: "Data Science Graduate",
  },
  {
    text: "Professional presentation design and content creation. The final presentation was visually stunning and academically rigorous.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Carlos Rodriguez",
    role: "Business Strategy",
  },
];


const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);


const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark/5 to-accent-teal/5 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mb-16"
        >
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm border border-accent-teal/20 py-2 px-6 rounded-full text-accent-teal font-medium">
              ⭐ Student Testimonials
            </div>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-6 text-primary-dark">
            What Our Students Say
          </h2>
          <p className="text-lg text-neutral-600 mt-6 max-w-2xl leading-relaxed">
            Discover how we've helped thousands of students worldwide achieve academic excellence through our premium assistance services.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[900px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-neutral-600 mb-6">
              Experience the same level of excellence that has helped thousands of students achieve their academic goals.
            </p>
            <button className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Today →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default { Testimonials };
