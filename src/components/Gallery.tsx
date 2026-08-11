import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hair', 'Facial', 'Makeup', 'Nails', 'Interior'];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5" />
            <span>Salon Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Our Work & Salon Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Take a look at our clean salon environment and beauty work at h78nepal.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                activeCategory === category
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-pink-50 border border-slate-200/80 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-pink-300 bg-pink-950/60 px-2 py-0.5 rounded-md w-fit mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold">{item.title}</h4>
                <p className="text-xs text-slate-200 mt-0.5 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-pink-300" /> Click to enlarge
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Editable Tip */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <p>📷 Photos can easily be updated by editing <code>GALLERY_ITEMS</code> in <code>src/data/salonData.ts</code></p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold">{activeImage.title}</h3>
                <span className="text-xs text-pink-300">{activeImage.category} Showcase</span>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.altText}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-100 text-slate-600 text-xs flex justify-between items-center">
              <span>h78nepal Beauty Salon - Eti Chowk, Lalitpur</span>
              <button
                onClick={() => setActiveImage(null)}
                className="text-xs font-semibold text-pink-600 hover:underline"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
