import React from 'react';
import { Star, ExternalLink, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS_LIST } from '../data/salonData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Banner Header */}
        <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-3xl p-8 sm:p-10 border border-pink-100/80 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-pink-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Verified Google Business Rating
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
              {BUSINESS_INFO.googleRating} <span className="text-2xl text-slate-500 font-sans font-normal">/ 5</span>
            </div>

            <p className="text-sm font-semibold text-slate-700">
              Based on {BUSINESS_INFO.googleReviewCount} Google Reviews
            </p>
          </div>

          <div className="pt-2">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-pink-600" />
              Customer Feedback Placeholders
            </h3>
            <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              Sample Reviews (Replaceable)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_LIST.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between relative group hover:border-pink-200 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-pink-700 font-medium bg-pink-50 px-2 py-0.5 rounded border border-pink-200/60">
                      Placeholder Content
                    </span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{review.authorName}</h4>
                    <span className="text-[11px] text-slate-500">{review.date}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-xs">
                    {review.authorName.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            ℹ️ Note: These 3 cards are template review placeholders so the salon owner can easily insert real customer reviews from Google.
          </p>
        </div>

      </div>
    </section>
  );
};
