import React from 'react';
import { Star, Clock, Sparkles } from 'lucide-react';

export const HighlightsStrip: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] border-b border-[#E5E5E5] py-4">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center divide-x divide-[#E5E5E5]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2">
            <Star size={16} className="text-[#D4A59A] fill-[#D4A59A] shrink-0" />
            <span className="font-semibold text-xs sm:text-sm text-[#2C2C2C]">
              5-Star Rated
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2">
            <Clock size={16} className="text-[#D4A59A] shrink-0" />
            <span className="font-semibold text-xs sm:text-sm text-[#2C2C2C]">
              Direct Booking
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2">
            <Sparkles size={16} className="text-[#D4A59A] shrink-0" />
            <span className="font-semibold text-xs sm:text-sm text-[#2C2C2C]">
              Holiday Packages
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
