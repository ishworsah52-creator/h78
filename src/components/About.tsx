import React from 'react';
import { MapPin, Heart, Sparkles, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Salon Image Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[4/3] bg-pink-50">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800"
                  alt="Care and hair styling at h78nepal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary overlapping small image */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-1/2 aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
                  alt="Facial and skincare session at h78nepal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Salon</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              A Welcoming Local Beauty Salon in Patan, Lalitpur
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Located at <strong>Eti Chowk, Jana Bahal Road</strong> in Lalitpur, <strong>{BUSINESS_INFO.name}</strong> is a dedicated neighborhood beauty salon created to give every visitor a friendly, comfortable, and attentive salon experience.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our philosophy revolves around our tagline: <em>"{BUSINESS_INFO.tagline}"</em>. Whether you are stopping by for a routine hair touch-up, threading, a refreshing facial, or special event styling, our main goal is to help you feel cared for, comfortable, and confident in your everyday look.
            </p>

            {/* Practical Info List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 bg-pink-100 text-pink-600 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Convenient Location</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Eti Chowk, Jana Bahal Rd, Lalitpur 44600, Nepal</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 bg-pink-100 text-pink-600 rounded-lg shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Opening Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">10:00 AM – 7:00 PM (Daily)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 bg-pink-100 text-pink-600 rounded-lg shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Personalized Care</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Focused on making you feel relaxed and confident</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 bg-pink-100 text-pink-600 rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Contact</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs font-semibold text-pink-600 hover:underline block mt-0.5"
                  >
                    Call {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
