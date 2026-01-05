import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Itinerary = () => {
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [showFullList, setShowFullList] = useState(false);

  // Sample Itinerary Data with a route coordinates
  const itineraries = [
    {
      id: 1,
      title: "Lofoten Road Trip",
      days: 8,
      // A simple polyline representing a road trip route in Lofoten
      route: [
        [68.3, 14.6], [68.2, 14.4], [68.1, 13.9], [67.9, 13.1], [67.8, 12.9]
      ]
    },
    // Add another dummy one to show scrolling
    {
      id: 2,
      title: "Western Fjords Adventure",
      days: 10,
      route: [
        [60.4, 5.3], [60.9, 6.5], [61.5, 7.2], [62.1, 7.1]
      ]
    }
  ];

  // --- FULL ITINERARY LIST VIEW ("Preview" Link) ---
  if (showFullList) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-in fade-in duration-300">
        <div className="p-6 border-b border-gray-100 flex items-center gap-4">
          <button onClick={() => setShowFullList(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold">All Itineraries</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
            {itineraries.map(item => (
                <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedItinerary(item)}>
                   <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200 shadow-sm">
                     {/* Static Map Card */}
                     <MapContainer center={item.route[0]} zoom={6} className="w-full h-full" zoomControl={false} dragging={false} attributionControl={false}>
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                        <Polyline positions={item.route} color="#0d9488" weight={4} />
                     </MapContainer>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                     <div className="absolute bottom-4 left-4 text-white">
                       <p className="font-bold text-sm uppercase opacity-90">{item.days} days</p>
                       <h3 className="text-xl font-black">{item.title}</h3>
                     </div>
                   </div>
                </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-gray-100">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT: Text Content --- */}
        <div className="lg:col-span-4 space-y-6 pt-4">
          <h2 className="text-3xl font-black text-rexby-dark">
            1 itinerary
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Get expertly curated itineraries that help you organise all the 
            'things to do' in an ideal time order.
          </p>
          <button 
            onClick={() => setShowFullList(true)}
            className="text-lg font-bold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
          >
            Preview
          </button>
        </div>

        {/* --- RIGHT: Scrolling Cards --- */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">

            {itineraries.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItinerary(item)}
                className="group cursor-pointer w-full"

              >
                {/* Itinerary Map Card */}
                <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[32px] overflow-hidden mb-4 bg-gray-100 border border-gray-200 shadow-md">
                  
                  {/* Static Leaflet Map with Route */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                     <MapContainer 
                        center={item.route[Math.floor(item.route.length / 2)]} // Center map on the route
                        zoom={6} 
                        className="w-full h-full" 
                        zoomControl={false} 
                        dragging={false}
                        attributionControl={false}
                     >
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                        {/* The route line */}
                        <Polyline positions={item.route} color="#0d9488" weight={5} opacity={0.8} />
                     </MapContainer>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <p className="font-bold text-sm uppercase tracking-wider mb-1 opacity-90">{item.days} days</p>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
            
            {/* "Preview" Placeholder Card */}
            <div className="w-full">

                <div onClick={() => setShowFullList(true)} className="cursor-pointer aspect-[4/5] md:aspect-square w-full rounded-[32px] border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 font-bold text-lg bg-gray-50/50">
                    <span>Preview</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL (Email Signup) --- */}
      {selectedItinerary && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] w-full max-w-md p-8 text-center relative shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItinerary(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {/* Profile Image */}
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="Author" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-black text-gray-900 mb-4">Preview Guide</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium px-4">
              Sign up to my email list to preview 36 of my favorite spots from my guide, with maps, itineraries, and insider tips to help you plan your trip.
            </p>

            {/* Button */}
            <button className="w-full py-4 rounded-full bg-[#0e7f8d] text-white font-bold text-lg hover:bg-[#0a6671] transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Itinerary;