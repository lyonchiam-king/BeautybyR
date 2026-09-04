import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';

interface MobileFloatingBarProps {
  onBookClick: () => void;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onBookClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar once scrolled past ~280px (hero area)
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E5E5E5] p-3 shadow-none"
        >
          <div className="flex items-center gap-2 max-w-[900px] mx-auto">
            {/* Call Salon Button */}
            <a
              href="tel:+447469170342"
              className="flex-1 bg-[#F9F7F5] border border-[#E5E5E5] text-[#2C2C2C] font-semibold text-xs py-3 rounded-[8px] flex items-center justify-center gap-1.5 active:scale-98 transition-all cursor-pointer"
            >
              <Phone size={14} className="text-[#D4A59A]" />
              <span>Call Salon</span>
            </a>

            {/* Book Online Button */}
            <button
              onClick={() => {
                onBookClick();
                const el = document.querySelector('#book');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 bg-[#D4A59A] text-white font-semibold text-xs py-3 rounded-[8px] flex items-center justify-center gap-1.5 active:scale-98 transition-all cursor-pointer shadow-none"
            >
              <Calendar size={14} />
              <span>Book Online</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
