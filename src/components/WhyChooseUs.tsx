import React from 'react';
import { Award, Heart, MapPin, Users, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-pink-600" };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'Users': return <Users {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100/80 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Visit Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Why Choose h78nepal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We focus on creating a welcoming and consistent salon experience right here in Lalitpur.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-pink-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-5">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-pink-600">
                <span>h78nepal Standard</span>
                <span>💕</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
