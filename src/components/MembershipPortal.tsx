import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const MembershipPortal = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-24 px-6 md:px-24">
      <div className="max-w-4xl mx-auto w-full">
        <header className="mb-20">
          <span className="text-sm tracking-[0.3em] uppercase mb-4 block text-zinc-500">03 / Access</span>
          <h2 className="text-6xl md:text-8xl font-display">APPLICATION</h2>
        </header>

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] tracking-widest uppercase text-zinc-500">Identity</label>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] tracking-widest uppercase text-zinc-500">Contact</label>
              <input 
                type="email" 
                placeholder="Electronic Mail" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] tracking-widest uppercase text-zinc-500">Narrative</label>
            <textarea 
              rows={4}
              placeholder="Why Kontur?" 
              className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <motion.button 
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-xl tracking-widest uppercase pt-8"
          >
            Submit Request
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </form>

        <footer className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start gap-8 opacity-40 text-xs tracking-widest uppercase">
          <p>© KONTUR 2024</p>
          <p>Location: Undisclosed</p>
          <p>By invitation only</p>
        </footer>
      </div>
    </section>
  );
};

export default MembershipPortal;
