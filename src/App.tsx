import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenBooking = () => {
    setPreselectedService('');
    setBookingModalOpen(true);
  };

  const handleSelectServiceToBook = (serviceName: string) => {
    setPreselectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Fixed Sticky Header Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectServiceToBook={handleSelectServiceToBook} />

        {/* 4. Photo Showcase Gallery */}
        <Gallery />

        {/* 5. Why Choose h78nepal */}
        <WhyChooseUs />

        {/* 6. Google Reviews */}
        <Reviews />

        {/* 7. Location & Contact / Booking Form */}
        <ContactLocation initialService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <FloatingContact onOpenBooking={handleOpenBooking} />

      {/* Modal Popup for Appointments */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}
