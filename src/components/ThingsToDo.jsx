import React, { useState } from 'react';
import { X, Camera, MapPin, Mountain, ArrowRight, Share2, Expand, Sparkles } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icons
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const ThingsToDo = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const activities = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      category: "Sightseeing",
      icon: <Camera size={16} />,
      title: "Voss blue river",
      subtitle: "One of my favoruite spots",
      location: [60.62, 6.41], // Voss coordinates
      desc: "This is one of my favourite spots of all of Norway. It's about 1 hour drive from Voss on a narrow road. Once you get to the bridge that leads over the river you've found the spot. You can swim just at the bottom of the waterfall."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      category: "Sightseeing",
      icon: <Camera size={16} />,
      title: "Swing with amazing views",
      subtitle: "The most instagrammable swing",
      location: [62.1, 7.2],
      desc: "Located on a hilltop overlooking the fjord, this swing offers a sense of freedom like no other. A short 20-minute hike brings you to this magical spot."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      category: "Hike",
      icon: <Mountain size={16} />,
      title: "Beautiful view point",
      subtitle: "Panoramic archipelago views",
      location: [68.1, 13.5],
      desc: "A moderate 2-hour hike rewarding you with panoramic views of the archipelago. Best visited during sunset for the golden hour glow."
    }
  ];

  return (
   <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-gray-100">
      
      {/* --- Section Layout: Split Text & Carousel --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-4 space-y-3 pt-4">
          <div className="flex items-center gap-4">
             <button className="p-2 rounded-full hover:bg-gray-100 border border-gray-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
             </button>
             <h2 className="text-3xl font-black text-rexby-dark">
                161 things to do
             </h2>
          </div>
          
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Get a curated list of all the best things to do with exact location, 
            detailed info and inspiring content.
          </p>

          <a 
            href="#" 
            className="inline-block text-lg font-bold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
          >
            Preview
          </a>
        </div>

        {/* Right: Scrolling List */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-8">

            {activities.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer w-full"

              >
                {/* Image Card */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500 mb-2">
                  {item.icon}
                  <span>{item.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-rexby-dark group-hover:underline decoration-2 underline-offset-2">
                  {item.title}
                </h3>
              </div>
            ))}
            
            {/* "See All" End Card */}
            <div className="flex items-center justify-center">

               <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
                  <ArrowRight size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* --- DETAILED POPUP MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          
          {/* Modal Container */}
          <div className="bg-white rounded-3xl w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
            
            {/* Close Button (Absolute) */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* LEFT SIDE: Image */}
            <div className="w-full md:w-[55%] h-full relative bg-gray-100">
              <img 
                src={selectedItem.image} 
                className="w-full h-full object-cover" 
                alt="Detail" 
              />
              {/* Carousel Indicators (Static Mock) */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                <div className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></div>
                <div className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></div>
              </div>
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="w-full md:w-[45%] h-full overflow-y-auto p-8 md:p-10 flex flex-col relative">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-1">{selectedItem.title}</h2>
                    <p className="text-gray-400 font-medium text-lg">{selectedItem.subtitle}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <Share2 size={24} />
                </button>
              </div>

              <div className="w-full h-px bg-gray-100 my-6"></div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm font-bold mb-2">Category</p>
                <div className="flex items-center gap-2 text-gray-700 font-bold">
                    {selectedItem.icon}
                    <span>{selectedItem.category}</span>
                </div>
              </div>

              {/* Message from Author */}
              <div className="mb-8">
                 <p className="font-bold text-gray-900 mb-3 text-sm">Message from Ása Steinars</p>
                 <p className="text-gray-600 leading-relaxed text-[15px]">
                    {selectedItem.desc}
                    <span className="text-gray-300 ml-1 cursor-pointer">more</span>
                 </p>
              </div>

              {/* AI Banner */}
              <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50 mb-8 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800">Ask Ása Steinars Guide for more specific info</p>
                </div>
                <ArrowRight size={16} className="text-gray-400" />
              </div>

              {/* Mini Map Preview */}
              <div className="mt-auto h-48 w-full rounded-2xl overflow-hidden relative border border-gray-100">
                 <MapContainer 
                    center={selectedItem.location} 
                    zoom={8} 
                    className="w-full h-full bg-gray-100" 
                    zoomControl={false} 
                    dragging={false}
                 >
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                    <Marker position={selectedItem.location} />
                 </MapContainer>
                 
                 {/* Expand Icon Overlay */}
                 <div className="absolute top-3 right-3 bg-white p-2 rounded-lg shadow-sm z-[1000]">
                    <Expand size={16} className="text-gray-600" />
                 </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ThingsToDo;