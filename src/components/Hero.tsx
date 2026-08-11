import React from 'react';
import { Phone, Calendar, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-pink-50/70 via-white to-slate-50 overflow-hidden"
    >
      {/* Decorative background subtle blush circles */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Location Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100/80 border border-pink-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-pink-800">
              <MapPin className="w-3.5 h-3.5 text-pink-600" />
              <span>Beauty Salon in Patan, Lalitpur</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              {BUSINESS_INFO.tagline}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Beauty, care and confidence — all in one place.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Clean & Hygienic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Friendly Experience
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Eti Chowk, Lalitpur
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 bg-white hover:bg-pink-50 border border-slate-200 hover:border-pink-300 px-6 py-3.5 rounded-xl shadow-sm transition-all active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-pink-600" />
                <span>Call Now ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
            </div>

            {/* Google Rating Card / Proof */}
            <div className="pt-4 border-t border-slate-200/80 w-full max-w-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900">{BUSINESS_INFO.googleRating} / 5</span>
                  <span className="text-xs text-slate-500 block">
                    from {BUSINESS_INFO.googleReviewCount} Google reviews
                  </span>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
              >
                Verify on Google →
              </a>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-pink-50">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
                  alt="h78nepal Beauty Salon interior in Patan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                
                {/* Floating Image Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-pink-100 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{BUSINESS_INFO.name}</h4>
                      <p className="text-xs text-slate-600">Eti Chowk, Jana Bahal Rd, Patan</p>
                    </div>
                    <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                      Open 10 AM - 7 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent box */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-pink-600 text-white p-4 rounded-xl shadow-lg max-w-[200px] border border-pink-500">
                <p className="text-xs font-medium opacity-90">Customer Satisfaction</p>
                <p className="text-xl font-bold font-serif">4.9 ★ Rating</p>
                <p className="text-[10px] opacity-80">143+ Happy Google Reviews</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
