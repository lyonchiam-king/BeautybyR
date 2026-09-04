import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServiceFinderProps {
  onSelectServiceAndBook: (service: ServiceItem) => void;
}

type MainGoal = 'Relax' | 'Refresh' | 'Maintain';

export const ServiceFinder: React.FC<ServiceFinderProps> = ({ onSelectServiceAndBook }) => {
  const [selectedGoal, setSelectedGoal] = useState<MainGoal | null>(null);
  const [secondaryChoice, setSecondaryChoice] = useState<string | null>(null);

  const handleGoalSelect = (goal: MainGoal) => {
    setSelectedGoal(goal);
    // Set smart defaults for secondary choice
    if (goal === 'Relax') setSecondaryChoice('full-body');
    else if (goal === 'Refresh') setSecondaryChoice('dermaplaning');
    else setSecondaryChoice('brows');
  };

  const getRecommendedService = (): ServiceItem => {
    if (selectedGoal === 'Relax') {
      return servicesData.find(s => s.id === 'full-body-massage') || servicesData[1];
    }
    if (selectedGoal === 'Refresh') {
      if (secondaryChoice === 'hydrating') {
        return servicesData.find(s => s.id === 'hydrating-facial') || servicesData[2];
      }
      return servicesData.find(s => s.id === 'dermaplaning-facial') || servicesData[0];
    }
    if (selectedGoal === 'Maintain') {
      return servicesData.find(s => s.id === 'eyebrow-treatment') || servicesData[3];
    }
    return servicesData[0]; // fallback
  };

  const recommendedService = getRecommendedService();

  return (
    <section className="py-12 bg-[#F9F7F5] border-b border-[#E5E5E5]" id="finder">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A] mb-1">
            Tailored Treatment Matcher
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Find Your Ideal Treatment
          </h2>
          <p className="text-sm text-[#8C8C8C] mt-1 max-w-md mx-auto">
            Select what you need today in 3 taps and get pre-selected instant booking.
          </p>
        </div>

        {/* 3 Main Buttons (Relax, Refresh, Maintain) */}
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-6">
          <button
            onClick={() => handleGoalSelect('Relax')}
            className={`py-3 px-2 rounded-[8px] font-semibold text-sm transition-all cursor-pointer border text-center flex flex-col items-center justify-center gap-1 active:scale-98 ${
              selectedGoal === 'Relax'
                ? 'bg-[#D4A59A] text-white border-[#D4A59A]'
                : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#E5E5E5] hover:border-[#D4A59A]'
            }`}
          >
            <span className="text-base font-serif">Relax</span>
            <span className="text-[11px] opacity-80 font-normal">Unwind & Ease Tension</span>
          </button>

          <button
            onClick={() => handleGoalSelect('Refresh')}
            className={`py-3 px-2 rounded-[8px] font-semibold text-sm transition-all cursor-pointer border text-center flex flex-col items-center justify-center gap-1 active:scale-98 ${
              selectedGoal === 'Refresh'
                ? 'bg-[#D4A59A] text-white border-[#D4A59A]'
                : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#E5E5E5] hover:border-[#D4A59A]'
            }`}
          >
            <span className="text-base font-serif">Refresh</span>
            <span className="text-[11px] opacity-80 font-normal">Facial Glow & Smooth</span>
          </button>

          <button
            onClick={() => handleGoalSelect('Maintain')}
            className={`py-3 px-2 rounded-[8px] font-semibold text-sm transition-all cursor-pointer border text-center flex flex-col items-center justify-center gap-1 active:scale-98 ${
              selectedGoal === 'Maintain'
                ? 'bg-[#D4A59A] text-white border-[#D4A59A]'
                : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#E5E5E5] hover:border-[#D4A59A]'
            }`}
          >
            <span className="text-base font-serif">Maintain</span>
            <span className="text-[11px] opacity-80 font-normal">Brow Definition</span>
          </button>
        </div>

        {/* Sub-selector options if 'Refresh' is selected */}
        {selectedGoal === 'Refresh' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-3 mb-6"
          >
            <button
              onClick={() => setSecondaryChoice('dermaplaning')}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                secondaryChoice === 'dermaplaning'
                  ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                  : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#E5E5E5] hover:border-[#2C2C2C]'
              }`}
            >
              Smooth Peach Fuzz (Dermaplaning)
            </button>
            <button
              onClick={() => setSecondaryChoice('hydrating')}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                secondaryChoice === 'hydrating'
                  ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                  : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#E5E5E5] hover:border-[#2C2C2C]'
              }`}
            >
              Deep Skin Hydration (Hydrating Facial)
            </button>
          </motion.div>
        )}

        {/* Recommendation Output Card */}
        {selectedGoal && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFFFF] border border-[#D4A59A] rounded-[8px] p-5 sm:p-6 max-w-xl mx-auto shadow-none"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4A59A] uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Recommended Treatment</span>
              </div>
              <button
                onClick={() => { setSelectedGoal(null); setSecondaryChoice(null); }}
                className="text-xs text-[#8C8C8C] hover:text-[#2C2C2C] flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C]">
                  {recommendedService.name}
                </h3>
                <p className="text-xs text-[#8C8C8C] font-semibold mt-0.5">
                  {recommendedService.tagLine} • {recommendedService.duration} • {recommendedService.price}
                </p>
                <p className="text-xs text-[#2C2C2C] mt-2 leading-relaxed">
                  {recommendedService.description}
                </p>
              </div>

              <button
                onClick={() => onSelectServiceAndBook(recommendedService)}
                className="w-full sm:w-auto shrink-0 bg-[#D4A59A] hover:bg-[#C08E82] text-white font-semibold text-xs px-5 py-3 rounded-[8px] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
              >
                <span>Book This Treatment</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-3 pt-3 border-t border-[#E5E5E5] flex items-center gap-2 text-[11px] text-[#8C8C8C]">
              <CheckCircle2 size={12} className="text-[#D4A59A]" />
              <span>Selected preference will automatically fill in the booking form below.</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
