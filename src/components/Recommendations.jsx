import React from 'react';

const spots = [
  { 
    id: 1, 
    title: "Lofoten Islands", 
    type: "Region", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhG3O_yz9-FnitgXyq3Mw2KzWtRtJsbYlb9Q&s" 
  },
  { 
    id: 2, 
    title: "Senja", 
    type: "Island", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gurP4jMbFJxC0XnltWf9h60uluUxNpznKg&s" 
  },
  { 
    id: 3, 
    title: "Geiranger", 
    type: "Fjord", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7Zx_KU9c7AFjZ659JDGJWdln3pJZrYRoOA&s" 
  },
  { 
    id: 4, 
    title: "Svalbard", 
    type: "archipelago", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm24J_RQuP05mOg_BXoCoCgPe85IlMGnuCQ&s" 
  },
];

const Recommendations = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h3 className="text-2xl font-black mb-8">Top Recommendations</h3>
      
      <div className="flex gap-2 overflow-x-auto no-scrollbar items-start pb-4">
        {spots.map(spot => (
          <div key={spot.id} className="w-[280px] shrink-0 group cursor-pointer">
            
            <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <img 
                src={spot.img} 
                alt={spot.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {spot.type}
                </span>
              </div>
            </div>
            
            <h4 className="font-bold text-lg leading-tight">
              {spot.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Recommendations;