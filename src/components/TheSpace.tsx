import React from 'react';
import { motion } from 'framer-motion';

export const TheSpace = () => {
  return (
    <section className="bg-zinc-100 py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-7 relative z-10">
            <motion.div
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 1 }}
            >
              <img 
                src="/images/hero_reveal.png" 
                alt="Abstract culinary detail" 
                className="w-full aspect-[16/9] object-cover grayscale"
              />
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-5 md:-ml-20 relative z-20">
            <div className="bg-black p-12 text-white">
              <span className="text-[10px] tracking-widest uppercase mb-6 block text-zinc-500">02 / Atmosphere</span>
              <h3 className="text-4xl font-display mb-6">BRUTALIST <br/>REFINEMENT</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Raw concrete. Salvaged oak. Sharp shadows. The space is designed to disappear, leaving only the conversation between the diner and the dish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSpace;
