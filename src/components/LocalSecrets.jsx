import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Camera, Coffee, Bed, Mountain } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';

// --- 1. Helper to Fix Map Rendering (The "Grey Box" Fix) ---
const MapController = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => { map.invalidateSize(); }, 200);
  }, [map]);
  return null;
};

// --- 2. Custom Marker Generator (Teal, Pink, Yellow bubbles) ---
const createCustomIcon = (iconComponent, colorClass) => {
  const iconMarkup = renderToStaticMarkup(
    <div className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 border-white ${colorClass} text-white`}>
      {iconComponent}
      <div className="absolute -bottom-1 w-2 h-2 bg-white rotate-45 transform origin-center"></div> 
    </div>
  );
  
  return L.divIcon({
    html: iconMarkup,
    className: 'custom-marker-icon', // distinct class to avoid leaflet defaults
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

// Define our specific icons
const icons = {
  view: createCustomIcon(<Camera size={16} />, 'bg-teal-600'),
  food: createCustomIcon(<Coffee size={16} />, 'bg-yellow-500'),
  stay: createCustomIcon(<Bed size={16} />, 'bg-rose-500'),
  hike: createCustomIcon(<Mountain size={16} />, 'bg-emerald-600'),
};

const LocalSecrets = () => {
  const [isFullMap, setIsFullMap] = useState(false);

  // Sample "Secret" locations
  const secrets = [
    { id: 1, pos: [61.0, 6.0], type: 'view', title: "Hidden Fjord View" },
    { id: 2, pos: [61.1, 6.2], type: 'food', title: "Best Waffles" },
    { id: 3, pos: [60.9, 5.8], type: 'stay', title: "Cozy Cabin" },
    { id: 4, pos: [68.3, 14.6], type: 'view', title: "Midnight Sun Spot" },
    { id: 5, pos: [68.4, 14.7], type: 'hike', title: "Secret Trail" },
  ];

  // --- FULL SCREEN VIEW ---
  if (isFullMap) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white w-full h-full flex flex-col animate-in fade-in duration-300">
        <div className="absolute top-6 left-6 z-[10000]">
          <button 
            onClick={() => setIsFullMap(false)} 
            className="bg-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm hover:bg-gray-100 flex items-center gap-2 border border-gray-200"
          >
            ← Back to Secrets
          </button>
        </div>

        <MapContainer center={[64.0, 10.0]} zoom={5} className="w-full h-full">
            <TileLayer 
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
              attribution='&copy; CARTO'
            />
            {secrets.map(s => (
              <Marker key={s.id} position={s.pos} icon={icons[s.type]}>
                <Popup className="font-bold">{s.title}</Popup>
              </Marker>
            ))}
            <MapController />
        </MapContainer>
      </div>
    );
  }

  // --- PAGE SECTION VIEW ---
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-8">
        <button className="p-2 rounded-full hover:bg-gray-100 border border-gray-200">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <h2 className="text-3xl md:text-4xl font-black text-rexby-dark">
          Access My Local Secrets
        </h2>
      </div>

      <div 
        onClick={() => setIsFullMap(true)}
        className="relative h-[600px] w-full rounded-[32px] overflow-hidden shadow-xl border border-gray-100 cursor-pointer group"
      >
        {/* The Map Preview */}
        <div className="absolute inset-0">
          <MapContainer 
            center={[65.0, 12.0]} 
            zoom={5} 
            className="w-full h-full bg-blue-50" 
            zoomControl={false} 
            dragging={false} 
            scrollWheelZoom={false}
            doubleClickZoom={false}
          >
             <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
             
             {/* Render Markers for Preview */}
             {secrets.map(s => (
                <Marker key={s.id} position={s.pos} icon={icons[s.type]} />
             ))}
          </MapContainer>
        </div>

        {/* Hover Overlay indicating clickability */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
             <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 font-bold text-sm">
                Click to Explore Map
             </div>
        </div>
        
        {/* Fullscreen Icon (Top Right) */}
        <div className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-md z-[400]">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </div>

      </div>
    </section>
  );
};

export default LocalSecrets;