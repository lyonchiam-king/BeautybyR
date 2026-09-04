import React from 'react';
import { Instagram, MapPin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-stone-300 py-12 border-t border-stone-800 font-sans">
      <div className="max-w-[900px] mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Col */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-white tracking-wide">
              Beauty By Roxanne
            </h3>
            <p className="text-xs text-stone-400 font-sans uppercase tracking-wider">
              @ The Didsbury Salon
            </p>
            <p className="text-xs text-stone-300 leading-relaxed max-w-xs">
              Calming facials, dermaplaning, massage therapy, and brow treatments tailored for busy professionals in Didsbury, Manchester.
            </p>
          </div>

          {/* Quick Details Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Salon Location & Contact
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D4A59A] shrink-0 mt-0.5" />
                <span>The Didsbury Salon, 6 Albert Hill St, Didsbury, Manchester M20 6RF, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D4A59A] shrink-0" />
                <a href="tel:+447469170342" className="hover:text-white transition-colors">
                  +44 7469 170342
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Follow On Instagram
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              See client before & after glow results and current treatment updates on our official Instagram:
            </p>
            <a
              href="https://www.instagram.com/beautybyroxannem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-[8px] border border-white/20 transition-all"
            >
              <Instagram size={16} className="text-[#D4A59A]" />
              <span>@beautybyroxannem</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Beauty By Roxanne @ The Didsbury Salon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#book" className="hover:text-white transition-colors">Direct Booking</a>
            <span>•</span>
            <span className="text-stone-400">Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
