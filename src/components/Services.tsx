import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Palette,
  Crown,
  Flame,
  Droplets,
  ShieldCheck,
  Smile,
  Sun,
  Heart,
  Wand2,
  Eye,
  Hand,
  Footprints,
  CheckCircle2,
  Zap,
  PhoneCall,
  Calendar,
  Search,
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICE_ITEMS, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceToBook: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping helper
  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-pink-600" };
    switch (iconName) {
      case 'Scissors': return <Scissors {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Wand2': return <Wand2 {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Hand': return <Hand {...props} />;
      case 'Footprints': return <Footprints {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const filteredServices = SERVICE_ITEMS.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100/80 px-3 py-1 rounded-full">
            <Scissors className="w-3.5 h-3.5" />
            <span>Salon Menu & Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Our Salon Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Carefully curated hair, facial, makeup, and skincare treatments designed to leave you feeling refreshed and confident.
          </p>
        </div>

        {/* Search & Category Filter Tabs */}
        <div className="mt-10 space-y-6">
          
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for haircuts, facials, threading, nail care..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-pink-50 hover:text-pink-600 border border-slate-200/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-md hover:border-pink-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-pink-100 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {service.priceNote || 'Contact for Price'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    h78nepal Care
                  </span>

                  <button
                    onClick={() => onSelectServiceToBook(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Inquire / Book</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-500 text-sm">No services found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-semibold text-pink-600 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Pricing Note Box */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-pink-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">Need specific service pricing or custom package?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Prices vary depending on hair length, density, and customized facial products. Call or visit us at Eti Chowk!
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-700 px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
