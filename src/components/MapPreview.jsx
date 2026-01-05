import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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

const MapController = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize(); 
    }, 200); 
  }, [map]);
  return null;
};

const MapPreview = () => {
  const [isFullMap, setIsFullMap] = useState(false);

  // Thumbnails data
  const thumbnails = [
    "https://dtcslo72w0h2o.cloudfront.net/assetbank/Polar_Night_Svalbard_483639.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qPI8pq5AjGwZF_pF7XJZhcugpTHh18dieg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxkZrgBM_hXYD7NIsWDOqKg0LFuQDCrvzbw&s",
    "https://eu-assets.simpleview-europe.com/svalbard/imageresizer/?image=%2Fdbimgs%2FGalleryimage%2810%29.jpg&action=Open_Graph_img",
  ];

  // --- FULL SCREEN MAP VIEW ---
  if (isFullMap) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white w-full h-full flex flex-col">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-[10000]">
          <button 
            onClick={() => setIsFullMap(false)} 
            className="bg-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm hover:bg-gray-100 flex items-center gap-2 border border-gray-200"
          >
            ← Back to Guide
          </button>
        </div>

        {/* The Map */}
        <div className="w-full h-full">
            <MapContainer center={[62.0, 10.0]} zoom={5} className="w-full h-full bg-gray-100">
                {/* Standard OSM Tiles */}
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    attribution='&copy; OpenStreetMap contributors'
                />
                <Marker position={[68.3, 14.6]}><Popup>Lofoten Islands</Popup></Marker>
                <Marker position={[60.39, 5.32]}><Popup>Bergen</Popup></Marker>
                <Marker position={[59.91, 10.75]}><Popup>Oslo</Popup></Marker>
            
                <MapController />
            </MapContainer>
        </div>
      </div>
    );
  }

  // --- PREVIEW CARD ON HOMEPAGE ---
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-[1.1]">
            Explore with my Map
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Get an interactive, playful, and easy-to-navigate map that you 
            can personalize by adding and favoriting spots, then filter to see 
            only what matters to you.
          </p>
          <button 
            onClick={() => setIsFullMap(true)}
            className="text-lg font-bold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
          >
            Preview
          </button>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-7">
          <div 
            onClick={() => setIsFullMap(true)}
            className="relative h-[500px] w-full rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 cursor-pointer group bg-gray-100"
          >
            {/* Map Preview */}
            <div className="absolute inset-0 z-0 pointer-events-none">
               <MapContainer 
                 center={[62.0, 10.0]} 
                 zoom={4} 
                 className="w-full h-full" 
                 zoomControl={false} 
                 attributionControl={false}
               >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[68.3, 14.6]} />
                  <Marker position={[60.39, 5.32]} />
               </MapContainer>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

            {/* Thumbnails (Centered & Static) */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-end gap-3">
                {thumbnails.map((img, i) => (
                    <div 
                        key={i} 
                        // Change: Removed the condition. Now all have fixed 'w-20 h-28'.
                        className="rounded-xl overflow-hidden border-[3px] border-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 w-20 h-28 z-10 shrink-0"
                    >
                        <img src={img} className="w-full h-full object-cover" alt="thumb" />
                    </div>
                ))}
            </div>

            {/* Top Left Icon */}
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;