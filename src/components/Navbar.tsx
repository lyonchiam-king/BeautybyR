import React, { useState } from 'react';
import { Phone, Instagram, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'services';
  setCurrentTab: (tab: 'home' | 'services') => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'services', hash?: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E5E5E5] transition-all">
      <div className="max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Header */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A59A]"
        >
          <span className="block font-serif text-lg font-bold text-[#2C2C2C] tracking-wide leading-tight group-hover:text-[#D4A59A] transition-colors">
            Beauty By Roxanne
          </span>
          <span className="block text-xs text-[#8C8C8C] tracking-wider font-sans uppercase">
            @ The Didsbury Salon
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-sans">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors font-medium py-1 border-b-2 cursor-pointer ${
              currentTab === 'home' ? 'text-[#2C2C2C] border-[#D4A59A]' : 'text-[#8C8C8C] border-transparent hover:text-[#2C2C2C]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`transition-colors font-medium py-1 border-b-2 cursor-pointer ${
              currentTab === 'services' ? 'text-[#2C2C2C] border-[#D4A59A]' : 'text-[#8C8C8C] border-transparent hover:text-[#2C2C2C]'
            }`}
          >
            Services & Pricing
          </button>
          <button
            onClick={() => handleNavClick('home', '#location')}
            className="text-[#8C8C8C] hover:text-[#2C2C2C] transition-colors font-medium py-1 border-b-2 border-transparent cursor-pointer"
          >
            Location & Hours
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+447469170342"
            className="flex items-center text-xs font-semibold text-[#2C2C2C] hover:text-[#D4A59A] transition-colors gap-1.5 py-1 px-2.5 rounded border border-[#E5E5E5] bg-[#F9F7F5]"
            title="Call Roxanne at The Didsbury Salon"
          >
            <Phone size={14} className="text-[#D4A59A]" />
            <span>07469 170342</span>
          </a>

          <a
            href="https://www.instagram.com/beautybyroxannem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C2C2C] hover:text-[#D4A59A] transition-colors p-1.5 rounded-full hover:bg-[#F9F7F5]"
            title="Follow @beautybyroxannem on Instagram"
            aria-label="Instagram @beautybyroxannem"
          >
            <Instagram size={18} />
          </a>

          <button
            onClick={onBookClick}
            className="bg-[#D4A59A] hover:bg-[#C08E82] active:scale-98 text-white text-xs font-semibold px-4 py-2 rounded-[8px] transition-all flex items-center gap-1.5 cursor-pointer shadow-none"
          >
            <Calendar size={14} />
            <span>Book Online</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href="tel:+447469170342"
            className="p-2 text-[#2C2C2C] hover:text-[#D4A59A]"
            aria-label="Call salon"
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C2C2C] hover:text-[#D4A59A] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A59A]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E5E5E5] px-4 py-4 space-y-3 font-sans">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 px-3 text-[#2C2C2C] font-medium rounded hover:bg-[#F9F7F5]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="block w-full text-left py-2 px-3 text-[#2C2C2C] font-medium rounded hover:bg-[#F9F7F5]"
          >
            Services & Pricing
          </button>
          <button
            onClick={() => handleNavClick('home', '#location')}
            className="block w-full text-left py-2 px-3 text-[#2C2C2C] font-medium rounded hover:bg-[#F9F7F5]"
          >
            Location & Hours
          </button>
          <div className="pt-2 border-t border-[#E5E5E5] flex flex-col gap-2">
            <a
              href="https://www.instagram.com/beautybyroxannem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-3 text-sm text-[#2C2C2C] hover:text-[#D4A59A]"
            >
              <Instagram size={16} className="text-[#D4A59A]" />
              <span>@beautybyroxannem on Instagram</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full bg-[#D4A59A] text-white py-2.5 rounded-[8px] font-semibold text-center text-sm"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
