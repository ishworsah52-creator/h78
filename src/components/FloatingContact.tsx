import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-2.5 rounded-2xl shadow-xl border border-slate-800 flex items-center justify-between gap-2">
        
        {/* Direct Call */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-pink-600 hover:bg-pink-700 text-white py-2.5 px-3 rounded-xl text-xs font-semibold shadow-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={`https://wa.me/977${BUSINESS_INFO.phone}?text=Hello%20h78nepal%2C%20I%20would%20like%20to%20inquire%20about%20a%20beauty%20salon%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl text-xs font-semibold shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Book */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors border border-slate-700"
        >
          <Calendar className="w-4 h-4 text-pink-400" />
          <span>Book</span>
        </button>

      </div>
    </div>
  );
};
