import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlindEntry } from '@/components/BlindEntry';
import { Philosophy } from '@/components/Philosophy';
import { TheSpace } from '@/components/TheSpace';
import { MembershipPortal } from '@/components/MembershipPortal';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <AnimatePresence>
        {!isUnlocked && (
          <BlindEntry onUnlock={() => setIsUnlocked(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isUnlocked ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={!isUnlocked ? 'hidden' : 'block'}
      >
        <Philosophy />
        <TheSpace />
        <MembershipPortal />
      </motion.div>

      {/* Persistent Navigation (Minimal) */}
      {isUnlocked && (
        <nav className="fixed top-8 left-8 right-8 z-50 flex justify-between items-center pointer-events-none">
          <span className="font-display text-2xl tracking-[0.2em] pointer-events-auto mix-blend-difference text-white">
            KONTUR
          </span>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase pointer-events-auto mix-blend-difference text-white">
            <a href="#about" className="hover:opacity-50 transition-opacity">Philosophy</a>
            <a href="#booking" className="hover:opacity-50 transition-opacity">Request</a>
          </div>
        </nav>
      )}
    </main>
  );
};

export default Index;