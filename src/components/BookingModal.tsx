import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, Send, Mail, MessageCircle, Loader2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_ITEMS } from '../data/salonData';
import { AppointmentFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    service: preselectedService || 'Haircut & Styling',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello h78nepal 💕, I would like to book an appointment:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Service: ${formData.service}\n` +
      `• Date: ${formData.preferredDate || 'Flexible'}\n` +
      `• Time: ${formData.preferredTime}\n` +
      `• Notes: ${formData.notes || 'None'}`
    );
    return `https://wa.me/977${BUSINESS_INFO.phone}?text=${text}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`New Appointment Booking Request - ${formData.service}`);
    const body = encodeURIComponent(
      `Appointment Booking Request for h78nepal:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Requested: ${formData.service}\n` +
      `Preferred Date: ${formData.preferredDate || 'Flexible'}\n` +
      `Preferred Time: ${formData.preferredTime}\n` +
      `Additional Notes: ${formData.notes || 'None'}\n\n` +
      `Sent via h78nepal website`
    );
    return `mailto:${BUSINESS_INFO.bookingEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waUrl = getWhatsAppLink();

    try {
      // Fire-and-forget background email notification
      fetch(`https://formsubmit.co/ajax/${BUSINESS_INFO.bookingEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Salon Appointment Request - ${formData.service} (${formData.name})`,
          _template: 'table',
          _captcha: 'false',
          'Customer Name': formData.name,
          'Phone Number': formData.phone,
          'Service Requested': formData.service,
          'Preferred Date': formData.preferredDate || 'Flexible',
          'Preferred Time Slot': formData.preferredTime,
          'Additional Notes': formData.notes || 'None',
        }),
      }).catch((err) => console.log('Email log background:', err));
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      // Immediately open WhatsApp chat with prefilled message
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-pink-600 to-rose-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <div>
              <h3 className="font-serif text-lg font-bold">Book an Appointment</h3>
              <p className="text-xs text-pink-100">{BUSINESS_INFO.name} • Eti Chowk, Lalitpur</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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

              {/* Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Service Requested *
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
                  <option value="General Consultation">General Consultation / Other</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Special Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any preferences or questions..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      <span>Send Appointment Message to WhatsApp ({BUSINESS_INFO.phoneDisplay})</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold hover:text-pink-600 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-pink-600" /> Need quick help? Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          ) : (
            <div className="py-4 text-center space-y-3.5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-900">
                Opening WhatsApp...
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm">
                Your appointment request for <strong>{formData.service}</strong> has been prepared for WhatsApp number <strong>9742871601</strong>.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl text-left text-xs text-emerald-950 space-y-1 max-w-sm mx-auto">
                <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Appointment Summary:
                </p>
                <p>• <strong>Name:</strong> {formData.name}</p>
                <p>• <strong>Service:</strong> {formData.service}</p>
                <p>• <strong>Date/Time:</strong> {formData.preferredDate || 'Flexible'} ({formData.preferredTime})</p>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" /> Open WhatsApp Chat Again
                </a>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 px-4 bg-slate-900 text-white font-semibold rounded-xl text-xs hover:bg-slate-800 transition-colors mt-1"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
