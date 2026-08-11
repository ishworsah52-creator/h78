import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Send, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_ITEMS } from '../data/salonData';
import { AppointmentFormData } from '../types';

interface ContactLocationProps {
  initialService?: string;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    service: initialService || 'Haircut & Styling',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: 'Haircut & Styling',
      preferredDate: '',
      preferredTime: 'Morning (10 AM - 1 PM)',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100/80 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Patan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Location & Contact
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We are conveniently located at Eti Chowk, Jana Bahal Road in Lalitpur. Walk-ins and appointments are welcome!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Salon Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {BUSINESS_INFO.name}
              </h3>

              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Salon Address</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-slate-600">
                      {BUSINESS_INFO.city}, {BUSINESS_INFO.postalCode}, {BUSINESS_INFO.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-base font-bold text-pink-600 hover:underline block mt-0.5"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Opening Hours</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      {BUSINESS_INFO.openingHours}
                    </p>
                    <p className="text-xs text-slate-500">Open 7 Days a Week</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 py-3 px-4 rounded-xl shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-pink-50 hover:text-pink-600 py-3 px-4 rounded-xl border border-slate-200 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-pink-600" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Maps Container */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm aspect-[16/10] relative">
              <iframe
                title="h78nepal Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.364432109!2d85.3224909!3d27.6702712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd6174b5a3%3A0x7d0a27bc1d2a138!2sh78nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pink-600" />
                Eti Chowk, Patan
              </div>
            </div>

          </div>

          {/* Right Column: Quick Booking / Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-pink-600" />
                        Quick Appointment Request
                      </h3>
                      <p className="text-xs text-slate-500">Send an inquiry and we'll confirm via phone/WhatsApp</p>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Srijana Shrestha"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98XXXXXXXX or 9742871601"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                    />
                  </div>

                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                    >
                      {SERVICE_ITEMS.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                      <option value="General Beauty Consultation">General Consultation / Other</option>
                    </select>
                  </div>

                  {/* Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific hairstyle, skin type notes, or questions..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    Or call directly for immediate walk-in confirmation: <strong>{BUSINESS_INFO.phoneDisplay}</strong>
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Appointment Request Received!
                  </h3>

                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your request for <strong>{formData.service}</strong>.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 text-left max-w-sm mx-auto">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Service:</strong> {formData.service}</p>
                    {formData.preferredDate && <p><strong>Date:</strong> {formData.preferredDate}</p>}
                    <p><strong>Time:</strong> {formData.preferredTime}</p>
                  </div>

                  <div className="pt-3 flex flex-col gap-2 max-w-xs mx-auto">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-pink-600 text-white font-semibold rounded-xl text-xs"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Salon Now ({BUSINESS_INFO.phoneDisplay})
                    </a>

                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 py-2"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
