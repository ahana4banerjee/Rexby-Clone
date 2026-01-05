import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, X } from 'lucide-react';

const YouMayAlsoLike = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    {
      id: 1,
      title: "Iceland Guide",
      subtitle: "Iceland • by asasteinars",
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&q=80", // Iceland Van
    },
    {
      id: 2,
      title: "Adventures in Scotland",
      subtitle: "United Kingdom • by traveltwo_",
      image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=800&q=80", // Green Hills
    },
    {
      id: 3,
      title: "Ultimate Guide to New Zealand",
      subtitle: "New Zealand • by rachstewartnz",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", // NZ Lake
    },
    {
      id: 4,
      title: "Exploring Ireland's Hidden Gems",
      subtitle: "Ireland • by furstonetravels",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrc-hMYyDKPRYaSFQNAXQRCYFpUuA3u_slg&s", // Dark Hedges
    }
  ];

  // --- MOCK NEW PAGE VIEW ---
  if (selectedGuide) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white animate-in slide-in-from-right duration-300 overflow-y-auto">
        {/* Navigation Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 p-4 flex items-center justify-between z-10">
          <button 
            onClick={() => setSelectedGuide(null)}
            className="flex items-center gap-2 font-bold text-gray-700 hover:text-black"
          >
            <ArrowLeft size={20} />
            Back to Norway
          </button>
          <span className="font-bold text-lg opacity-50">Rexby</span>
        </div>
        
        {/* New Page Content */}
        <div className="max-w-7xl mx-auto">
            {/* Hero for the new page */}
            <div className="relative h-[60vh] w-full">
                <img src={selectedGuide.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-12">
                    <h1 className="text-5xl md:text-7xl font-black text-white">{selectedGuide.title}</h1>
                </div>
            </div>
            <div className="p-12 max-w-3xl">
                <p className="text-2xl font-medium text-gray-400 mb-8">{selectedGuide.subtitle}</p>
                <div className="space-y-6">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // --- MAIN LIST COMPONENT ---
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-gray-100">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
         <button className="p-2 rounded-full hover:bg-gray-100 border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
         </button>
         <h2 className="text-3xl font-black text-rexby-dark">
            You may also like
         </h2>
      </div>

      {/* Grid / Carousel Layout */}
      <div className="relative group overflow-hidden">

        
       <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 gap-6">
            {guides.map((guide) => (
                <div 
                    key={guide.id} 
                    onClick={() => setSelectedGuide(guide)}
                    className="group cursor-pointer w-full"
                >
                    {/* Image Card */}
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                        <img 
                            src={guide.image} 
                            alt={guide.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />
                        {/* Overlay text (Optional, usually visible on hover or mobile) */}
                        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors" />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover/card:underline decoration-2 underline-offset-4">
                            {guide.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                            {guide.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Right Arrow Button (Floating) */}
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden md:flex">
             <button className="w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:scale-105 transition-transform z-10 text-gray-800">
                 <ChevronRight size={24} />
             </button>
        </div>

      </div>
    </section>
  );
};

export default YouMayAlsoLike;