"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'Chandra combines strong product sense with reliable execution. He builds thoughtful, modern interfaces and ships with confidence.',
    name: 'Client Feedback',
    role: 'Product & Startup Collaborator',
  },
  {
    quote: 'His approach to AI products is practical and fast-moving. He turns complex ideas into polished, usable experiences.',
    name: 'Team Partner',
    role: 'AI Product Builder',
  },
  {
    quote: 'Every project he touches feels intentional—clean architecture, strong UI, and a clear focus on user value.',
    name: 'Peer Review',
    role: 'Developer Community',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            What people <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">say</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A few reflections from collaborators, clients, and peers who have worked with me.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-slate-200">“{current.quote}”</p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-white">{current.name}</p>
                <p className="text-sm text-slate-400">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-indigo-400' : 'w-2.5 bg-slate-600'}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
