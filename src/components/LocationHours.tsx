import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section className="py-16 bg-[#F9F7F5] border-b border-[#E5E5E5]" id="location">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A] mb-1">
            Find Us in Didsbury
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Location & Opening Hours
          </h2>
          <p className="text-sm text-[#8C8C8C] mt-1 max-w-md mx-auto">
            Conveniently situated on Albert Hill Street in Didsbury Village, Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* List & Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] p-6 space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#F9F7F5] text-[#D4A59A] rounded-[8px] border border-[#E5E5E5] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#2C2C2C] mb-1">
                  Salon Address
                </h3>
                <p className="text-xs text-[#2C2C2C] leading-relaxed">
                  The Didsbury Salon<br />
                  6 Albert Hill St, Didsbury<br />
                  Manchester M20 6RF, UK
                </p>
                <a
                  href="https://maps.google.com/?cid=423213253549911333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4A59A] hover:underline mt-2"
                >
                  <Navigation size={12} />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Phone Link */}
            <div className="flex items-start gap-3 pt-4 border-t border-[#E5E5E5]">
              <div className="p-2.5 bg-[#F9F7F5] text-[#D4A59A] rounded-[8px] border border-[#E5E5E5] shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#2C2C2C] mb-1">
                  Direct Phone / SMS
                </h3>
                <a
                  href="tel:+447469170342"
                  className="text-sm font-semibold text-[#2C2C2C] hover:text-[#D4A59A] transition-colors"
                >
                  +44 7469 170342
                </a>
                <p className="text-[11px] text-[#8C8C8C] mt-0.5">
                  Tappable link for mobile enquiries or appointment calls
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-[#D4A59A]" />
                <h3 className="font-serif font-bold text-base text-[#2C2C2C]">
                  Salon Hours
                </h3>
              </div>

              <ul className="space-y-1.5 text-xs text-[#2C2C2C]">
                <li className="flex justify-between py-1 border-b border-[#F9F7F5]">
                  <span className="text-[#8C8C8C]">Monday</span>
                  <span className="font-medium text-[#8C8C8C]">Closed</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#F9F7F5]">
                  <span>Tuesday & Wednesday</span>
                  <span className="font-medium">09:30 - 17:30</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#F9F7F5]">
                  <span className="font-semibold text-[#2C2C2C]">Thursday (Late Evening)</span>
                  <span className="font-semibold text-[#D4A59A]">09:30 - 20:00</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#F9F7F5]">
                  <span>Friday</span>
                  <span className="font-medium">09:30 - 18:00</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#F9F7F5]">
                  <span>Saturday</span>
                  <span className="font-medium">09:00 - 16:30</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-[#8C8C8C]">Sunday</span>
                  <span className="font-medium text-[#8C8C8C]">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] overflow-hidden p-2"
          >
            <div className="w-full h-80 sm:h-96 rounded overflow-hidden relative bg-[#F9F7F5]">
              <iframe
                title="Map location of The Didsbury Salon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.168742582962!2d-2.2356!3d53.4116!2m3!1f0!2f0!3f0!3m2!1i1024!2i710!4f13.1!3m3!1m2!1s0x487bb3c3c78a082b%3A0x5df57c6b453e025!2sThe%20Didsbury%20Salon!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
