import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <span className="text-sm tracking-[0.3em] uppercase mb-12 block text-zinc-400">01 / Philosophy</span>
        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-display leading-[0.9] tracking-tighter mb-16">
          TWELVE SEATS.<br />
          ONE PERSPECTIVE.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl">
            We reject the spectacle of modern gastronomy. Kontur is a study in silence, seasonality, and the architectural assembly of ingredients. Located in an undisclosed industrial basement, we serve only twelve guests per evening.
          </p>
          <div className="flex justify-end">
             <img 
                src="/images/interior_teaser.png" 
                alt="Minimalist dining surface" 
                className="w-full md:w-80 h-auto grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
