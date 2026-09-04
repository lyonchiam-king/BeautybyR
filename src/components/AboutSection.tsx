import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, MapPin, Award } from 'lucide-react';
import { salonImages } from '../data/images';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#E5E5E5]" id="about">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Asymmetric 2-column grid: 60% text story, 40% photo portrait */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
          {/* Text Story Column (60%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 space-y-4"
          >
            <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A]">
              About Your Beautician
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C] leading-tight">
              Professional, Safe & Tailored Beauty Care
            </h2>

            <p className="text-sm text-[#2C2C2C] leading-relaxed">
              Hello, I'm Roxanne. Based inside <strong className="font-semibold text-[#2C2C2C]">The Didsbury Salon</strong> in Manchester, I provide dedicated facials, dermaplaning, massage therapy, and brow treatments in a quiet, hygienic setting.
            </p>

            <p className="text-sm text-[#2C2C2C] leading-relaxed">
              I believe skincare and body care should be restorative and transparent. Whether you are preparing for an upcoming holiday or taking a well-deserved break during your busy work week, every treatment is customized to your skin's unique needs without high-pressure sales or endless DM waiting lists.
            </p>

            {/* Verified Proof Badges */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-[#F9F7F5] rounded-[8px] border border-[#E5E5E5] flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#D4A59A]">
                  <Star size={16} className="fill-[#D4A59A]" />
                  <span className="font-bold text-xs text-[#2C2C2C]">5-Star Rated</span>
                </div>
                <span className="text-[11px] text-[#8C8C8C]">By Didsbury Locals</span>
              </div>

              <div className="p-3 bg-[#F9F7F5] rounded-[8px] border border-[#E5E5E5] flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#D4A59A]">
                  <ShieldCheck size={16} />
                  <span className="font-bold text-xs text-[#2C2C2C]">Safe & Certified</span>
                </div>
                <span className="text-[11px] text-[#8C8C8C]">Highest Hygiene</span>
              </div>

              <div className="p-3 bg-[#F9F7F5] rounded-[8px] border border-[#E5E5E5] flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#D4A59A]">
                  <MapPin size={16} />
                  <span className="font-bold text-xs text-[#2C2C2C]">Didsbury Salon</span>
                </div>
                <span className="text-[11px] text-[#8C8C8C]">Albert Hill St</span>
              </div>
            </div>
          </motion.div>

          {/* Photo Column (40%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="bg-[#F9F7F5] p-3 rounded-[8px] border border-[#E5E5E5] relative">
              <div className="aspect-[3/4] w-full rounded overflow-hidden">
                <img
                  src={salonImages.roxanne}
                  alt="Beautician Roxanne at The Didsbury Salon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width="300"
                  height="400"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="font-serif font-bold text-base text-[#2C2C2C]">Roxanne</p>
                <p className="text-xs text-[#8C8C8C]">Lead Beautician @ The Didsbury Salon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
