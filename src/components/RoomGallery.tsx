import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, MapPin } from 'lucide-react';
import { salonImages } from '../data/images';

export const RoomGallery: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = (initialX: number) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 }
      };
    }
    return {
      initial: { opacity: 0, x: initialX, y: 20 },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    };
  };

  return (
    <section className="py-16 bg-[#F9F7F5] border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A] mb-1">
            The Treatment Room
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Inside The Didsbury Salon
          </h2>
          <p className="text-sm text-[#8C8C8C] mt-1 max-w-md mx-auto">
            A quiet, clean, and bright sanctuary in the heart of Didsbury, Manchester.
          </p>
        </div>

        {/* Framed Photos Sliding In */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Framed Photo 1 - Slides from Left */}
          <motion.div
            {...animationProps(-50)}
            className="bg-[#FFFFFF] p-2.5 rounded-[8px] border border-[#E5E5E5] shadow-none transform md:-rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            <div className="relative h-56 w-full rounded overflow-hidden bg-[#F9F7F5]">
              <img
                src={salonImages.heroRoom}
                alt="Treatment room bed at The Didsbury Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="224"
              />
            </div>
            <p className="text-center text-xs font-serif font-bold text-[#2C2C2C] mt-2.5">
              Calming Treatment Space
            </p>
          </motion.div>

          {/* Framed Photo 2 - Fades Up Center */}
          <motion.div
            {...animationProps(0)}
            className="bg-[#FFFFFF] p-2.5 rounded-[8px] border border-[#D4A59A] shadow-none md:scale-105 z-10"
          >
            <div className="relative h-60 w-full rounded overflow-hidden bg-[#F9F7F5]">
              <img
                src={salonImages.hydrating}
                alt="Facial setup at The Didsbury Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="240"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded text-[11px] text-[#2C2C2C] font-semibold text-center border border-[#E5E5E5]">
                Hygiene & Safety Certified
              </div>
            </div>
            <p className="text-center text-xs font-serif font-bold text-[#2C2C2C] mt-2.5">
              Personalized Facial Suite
            </p>
          </motion.div>

          {/* Framed Photo 3 - Slides from Right */}
          <motion.div
            {...animationProps(50)}
            className="bg-[#FFFFFF] p-2.5 rounded-[8px] border border-[#E5E5E5] shadow-none transform md:rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            <div className="relative h-56 w-full rounded overflow-hidden bg-[#F9F7F5]">
              <img
                src={salonImages.massage}
                alt="Massage room setup at The Didsbury Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="224"
              />
            </div>
            <p className="text-center text-xs font-serif font-bold text-[#2C2C2C] mt-2.5">
              Aromatherapy & Body Care
            </p>
          </motion.div>
        </div>

        {/* Location note under gallery */}
        <div className="mt-8 text-center text-xs text-[#8C8C8C] flex items-center justify-center gap-1.5">
          <MapPin size={14} className="text-[#D4A59A]" />
          <span>6 Albert Hill St, Didsbury, Manchester M20 6RF</span>
        </div>
      </div>
    </section>
  );
};
