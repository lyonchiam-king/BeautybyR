import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Check, Clock, Tag } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] max-w-lg w-full overflow-hidden my-8 shadow-none text-[#2C2C2C] relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-[#2C2C2C] p-1.5 rounded-full border border-[#E5E5E5] cursor-pointer"
            aria-label="Close details modal"
          >
            <X size={18} />
          </button>

          {/* Service Modal Image */}
          <div className="relative h-48 sm:h-56 w-full bg-[#F9F7F5]">
            <img
              src={service.imageUrl}
              alt={service.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              width="600"
              height="450"
            />
            <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#2C2C2C] border border-[#E5E5E5]">
              {service.price} • {service.duration}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-1">
              {service.name}
            </h3>
            <p className="text-xs font-semibold text-[#D4A59A] uppercase tracking-wider mb-3">
              {service.tagLine}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F9F7F5] border border-[#E5E5E5] text-[#2C2C2C]"
                >
                  <Tag size={10} className="text-[#D4A59A]" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#2C2C2C] mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* Key Benefits */}
            <div className="mb-4">
              <h4 className="text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-2">
                Treatment Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-[#2C2C2C]">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#D4A59A] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aftercare note */}
            <div className="bg-[#F9F7F5] p-3 rounded-[8px] border border-[#E5E5E5] text-xs text-[#8C8C8C] mb-6">
              <span className="font-bold text-[#2C2C2C]">Aftercare Note: </span>
              {service.aftercare}
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookService(service);
                }}
                className="flex-1 bg-[#D4A59A] hover:bg-[#C08E82] text-white font-semibold text-sm py-3 px-4 rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar size={16} />
                <span>Book {service.name}</span>
              </button>
              <button
                onClick={onClose}
                className="bg-[#FFFFFF] border border-[#E5E5E5] hover:bg-[#F9F7F5] text-[#2C2C2C] font-medium text-xs py-3 px-4 rounded-[8px] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
