import React from 'react';
import { Phone, MapPin, Clock, Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-serif text-xl font-bold">
                h78
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-pink-400 font-serif text-lg italic">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Your trusted local beauty salon in Patan, Lalitpur. Offering hair styling, facials, skincare, makeup, and nail care in a friendly, welcoming environment.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="TikTok profile"
                title="TikTok"
              >
                TT
              </a>

              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook profile"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Services & Pricing</a></li>
              <li><a href="#gallery" className="hover:text-pink-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-pink-400 transition-colors">Google Reviews (4.9 ★)</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Salon Location</h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}, Lalitpur 44600, Nepal</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-pink-400 text-slate-200 font-semibold">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.bookingEmail}`} className="hover:text-pink-400 text-slate-200 font-semibold break-all">
                  {BUSINESS_INFO.bookingEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for {BUSINESS_INFO.name} Lalitpur
          </p>
        </div>

      </div>
    </footer>
  );
};
