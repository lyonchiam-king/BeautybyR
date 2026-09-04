import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { ServiceFinder } from './components/ServiceFinder';
import { ServiceGrid } from './components/ServiceGrid';
import { RoomGallery } from './components/RoomGallery';
import { AboutSection } from './components/AboutSection';
import { LocationHours } from './components/LocationHours';
import { BookingSection } from './components/BookingSection';
import { ServicesPricingView } from './components/ServicesPricingView';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { ServiceItem } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'services'>('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);

  const handleSelectServiceAndBook = (service: ServiceItem) => {
    setSelectedServiceForBooking(service);
    if (currentTab !== 'home') {
      setCurrentTab('home');
    }
    setTimeout(() => {
      const el = document.querySelector('#book');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToBooking = () => {
    if (currentTab !== 'home') {
      setCurrentTab('home');
    }
    setTimeout(() => {
      const el = document.querySelector('#book');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F5] text-[#2C2C2C] font-sans pb-16 md:pb-0">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onBookClick={scrollToBooking}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentTab === 'home' ? (
          <>
            {/* 1. Hero */}
            <Hero onBookClick={scrollToBooking} />

            {/* 2. Trust Badges Strip */}
            <HighlightsStrip />

            {/* 3. Interactive Service Finder */}
            <ServiceFinder onSelectServiceAndBook={handleSelectServiceAndBook} />

            {/* 4. Service Card Grid */}
            <ServiceGrid onBookService={handleSelectServiceAndBook} />

            {/* Signature Motion Moment: Treatment Room Gallery */}
            <RoomGallery />

            {/* 5. About Roxanne */}
            <AboutSection />

            {/* 6. Location & Opening Hours */}
            <LocationHours />

            {/* Direct Booking Section */}
            <BookingSection
              selectedService={selectedServiceForBooking}
              onClearSelectedService={() => setSelectedServiceForBooking(null)}
            />
          </>
        ) : (
          <>
            {/* Services & Pricing Dedicated Page */}
            <ServicesPricingView onBookService={handleSelectServiceAndBook} />

            {/* Booking Form at bottom of Services page */}
            <BookingSection
              selectedService={selectedServiceForBooking}
              onClearSelectedService={() => setSelectedServiceForBooking(null)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileFloatingBar onBookClick={scrollToBooking} />
    </div>
  );
}
