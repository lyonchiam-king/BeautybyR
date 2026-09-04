import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tag, ArrowRight, Clock } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServiceGridProps {
  onBookService: (service: ServiceItem) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ onBookService }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#E5E5E5]" id="services">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A] mb-1">
            Our Core Offerings
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Tailored Treatments at The Didsbury Salon
          </h2>
          <p className="text-sm text-[#8C8C8C] mt-1 max-w-md mx-auto">
            Gentle, high-quality facials, body care, and brow treatments delivered in a calm, private room.
          </p>
        </div>

        {/* 4 Core Cards in 2x2 or 1-col mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#D4A59A] focus-within:border-[#D4A59A] rounded-[8px] overflow-hidden transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Area */}
                <div 
                  className="relative h-44 w-full overflow-hidden bg-[#F9F7F5] cursor-pointer"
                  onClick={() => setSelectedServiceForModal(service)}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#2C2C2C] text-xs font-bold px-2.5 py-1 rounded-full border border-[#E5E5E5]">
                    {service.price}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-lg font-bold text-[#2C2C2C]">
                      {service.name}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-[#8C8C8C] font-medium">
                      <Clock size={12} />
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#D4A59A] mb-3">
                    {service.tagLine}
                  </p>

                  {/* Tags Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F9F7F5] border border-[#E5E5E5] text-[#2C2C2C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-[#2C2C2C] line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-transparent group-hover:border-[#F9F7F5]">
                <button
                  onClick={() => setSelectedServiceForModal(service)}
                  className="text-xs font-semibold text-[#2C2C2C] hover:text-[#D4A59A] flex items-center gap-1 cursor-pointer underline underline-offset-2"
                >
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => onBookService(service)}
                  className="bg-[#D4A59A] hover:bg-[#C08E82] active:scale-98 text-white font-semibold text-xs py-2 px-3.5 rounded-[8px] transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Book Now</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={onBookService}
      />
    </section>
  );
};
