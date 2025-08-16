"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm w-full group" key={i}>
                  <div className="text-neutral-700 leading-relaxed mb-6 text-sm">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-accent-teal/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-bold text-primary-dark text-sm">{name}</div>
                      <div className="text-xs text-accent-teal font-medium">{role}</div>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex justify-center mt-4 space-x-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;
