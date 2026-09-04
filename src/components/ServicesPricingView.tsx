import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, Check, Sparkles, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { servicesData, holidayPackages } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesPricingViewProps {
  onBookService: (service: ServiceItem) => void;
}

export const ServicesPricingView: React.FC<ServicesPricingViewProps> = ({ onBookService }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is dermaplaning suitable for sensitive or acne-prone skin?",
      a: "Dermaplaning is gentle and suitable for most skin types. However, if you currently have active cystic acne breakouts, we will tailor the facial with calming serums or recommend our Hydrating Facial instead until active inflammation settles."
    },
    {
      q: "How far in advance should I book before a holiday or event?",
      a: "For optimal pre-holiday radiance, we recommend booking your Dermaplaning or Hydrating facial 2 to 4 days prior to departure. This gives your skin time to fully absorb nourishing serums and achieve maximum glow."
    },
    {
      q: "Can I get a eyebrow tint if I have never had one before?",
      a: "Yes! If you are new to brow tinting, we offer a quick patch test prior to your full appointment to ensure complete skin safety and zero allergic reaction."
    },
    {
      q: "Where is the treatment room located inside The Didsbury Salon?",
      a: "Roxanne's treatment room is situated on the quiet first floor at 6 Albert Hill Street, Didsbury. You can walk straight into reception and our friendly staff will usher you into the private, quiet suite."
    }
  ];

  return (
    <div className="py-12 bg-[#F9F7F5]">
      <div className="max-w-[900px] mx-auto px-4 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A]">
            Complete Treatment Menu
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
            Services & Transparent Pricing
          </h1>
          <p className="text-sm text-[#8C8C8C] leading-relaxed">
            Professional facials, massage therapy, and brow styling in Didsbury. No hidden add-ons or DM back-and-forth.
          </p>
        </div>

        {/* Core Services Section */}
        <div className="space-y-6">
          <h2 className="font-serif text-xl font-bold text-[#2C2C2C] border-b border-[#E5E5E5] pb-2">
            Core Facial & Body Treatments
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-28 h-28 object-cover rounded-[8px] border border-[#E5E5E5] shrink-0"
                    loading="lazy"
                    width="112"
                    height="112"
                  />
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-xl font-bold text-[#2C2C2C]">
                        {service.name}
                      </h3>
                      <span className="bg-[#D4A59A]/15 text-[#D4A59A] text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {service.price}
                      </span>
                      <span className="text-xs text-[#8C8C8C] flex items-center gap-1">
                        <Clock size={12} />
                        {service.duration}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#D4A59A]">
                      {service.tagLine}
                    </p>

                    <p className="text-xs text-[#2C2C2C] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-1 flex flex-wrap gap-1">
                      {service.benefits.map((benefit, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[11px] text-[#2C2C2C] bg-[#F9F7F5] px-2 py-0.5 rounded border border-[#E5E5E5]">
                          <Check size={10} className="text-[#D4A59A]" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#E5E5E5]">
                  <button
                    onClick={() => onBookService(service)}
                    className="w-full md:w-auto bg-[#D4A59A] hover:bg-[#C08E82] text-white font-semibold text-xs px-5 py-3 rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Calendar size={14} />
                    <span>Book {service.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holiday Packages Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#D4A59A]" />
            <h2 className="font-serif text-xl font-bold text-[#2C2C2C]">
              Pre-Holiday & Combined Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {holidayPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#FFFFFF] border-2 border-[#D4A59A] rounded-[8px] p-6 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4A59A] text-white px-2 py-0.5 rounded">
                      {pkg.savings}
                    </span>
                    <span className="text-xs font-semibold text-[#8C8C8C]">{pkg.duration}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2C2C2C]">
                    {pkg.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#D4A59A] mb-2">
                    {pkg.tagLine}
                  </p>

                  <p className="text-xs text-[#2C2C2C] leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between gap-2">
                  <span className="font-serif text-xl font-bold text-[#2C2C2C]">{pkg.price}</span>
                  <button
                    onClick={() => {
                      const pseudoService: ServiceItem = {
                        id: pkg.id,
                        name: pkg.name,
                        tagLine: pkg.tagLine,
                        price: pkg.price,
                        duration: pkg.duration,
                        tags: ['Package Deal', 'Pre-Holiday'],
                        description: pkg.description,
                        benefits: ['Combined savings', 'Complete prep in one session'],
                        aftercare: 'Follow standard post-facial guidance.',
                        imageUrl: servicesData[0].imageUrl,
                        category: 'Refresh'
                      };
                      onBookService(pseudoService);
                    }}
                    className="bg-[#D4A59A] hover:bg-[#C08E82] text-white text-xs font-semibold px-4 py-2.5 rounded-[8px] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar size={14} />
                    <span>Book Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] p-6">
          <h2 className="font-serif text-xl font-bold text-[#2C2C2C] mb-2">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-[#E5E5E5]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-3">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left font-serif font-bold text-sm text-[#2C2C2C] flex items-center justify-between cursor-pointer py-1"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={16} className={`text-[#D4A59A] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs text-[#2C2C2C] mt-2 leading-relaxed pl-1"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
