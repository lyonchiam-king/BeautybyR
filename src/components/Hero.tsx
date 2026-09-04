import React from 'react';
import { Calendar, Instagram, MapPin } from 'lucide-react';
import { salonImages } from '../data/images';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative w-full bg-[#2C2C2C] text-white overflow-hidden">
      {/* Background Hero Image - Rendered statically at final position */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonImages.heroRoom}
          alt="Bright calming treatment room at The Didsbury Salon"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45"
          width="1200"
          height="675"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/50 to-transparent" />
      </div>

      {/* Hero Content Container - Max 900px centered */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 py-16 sm:py-24 md:py-28 text-center flex flex-col items-center">
        {/* Location eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs tracking-wider uppercase font-semibold text-white/90 mb-6 border border-white/20">
          <MapPin size={12} className="text-[#D4A59A]" />
          <span>The Didsbury Salon • Manchester, UK</span>
        </div>

        {/* Hero Headline - Exact requested copy */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl mb-4">
          Calming Facials and Massage at The Didsbury Salon
        </h1>

        {/* Subcopy - Exact requested copy */}
        <p className="font-sans text-base sm:text-lg text-stone-200 max-w-xl mb-8 leading-relaxed">
          Book directly online without the DM wait. Professional, safe treatments tailored to you.
        </p>

        {/* CTA Buttons & Social Overlay */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto bg-[#D4A59A] hover:bg-[#C08E82] active:scale-98 text-white font-semibold text-base px-7 py-3.5 rounded-[8px] transition-all cursor-pointer shadow-none flex items-center justify-center gap-2 focus:ring-2 focus:ring-white focus:outline-none"
          >
            <Calendar size={18} />
            <span>Book Your Appointment</span>
          </button>

          <a
            href="https://www.instagram.com/beautybyroxannem"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 active:scale-98 text-white border border-white/30 font-medium text-sm px-5 py-3.5 rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Instagram size={16} />
            <span>@beautybyroxannem</span>
          </a>
        </div>
      </div>
    </section>
  );
};
