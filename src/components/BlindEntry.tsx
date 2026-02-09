import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlindEntry = ({ onUnlock }: { onUnlock: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPressing) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timerRef.current!);
            onUnlock();
            return 100;
          }
          return prev + 2;
        });
      }, 20);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPressing, onUnlock]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center cursor-none"
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onTouchStart={() => setIsPressing(true)}
      onTouchEnd={() => setIsPressing(false)}
    >
      <div className="relative">
        <h1 className="text-white font-display text-4xl tracking-[0.4em] uppercase opacity-20 select-none">
          Kontur
        </h1>
        <motion.div 
          className="absolute inset-0 text-white font-display text-4xl tracking-[0.4em] uppercase overflow-hidden select-none"
          style={{ width: `${progress}%` }}
        >
          Kontur
        </motion.div>
      </div>
      <p className="mt-12 text-zinc-600 text-[10px] tracking-[0.2em] uppercase select-none">
        Hold to illuminate
      </p>
      
      {/* Interaction Ring */}
      <div className="mt-8 w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
        <motion.div 
          className="bg-white rounded-full"
          animate={{ scale: isPressing ? 1.5 : 0 }}
          style={{ width: '4px', height: '4px' }}
        />
      </div>
    </motion.div>
  );
};

export default BlindEntry;
