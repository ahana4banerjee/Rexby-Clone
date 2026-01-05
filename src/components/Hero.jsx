import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* The Image needs to be absolute to stay behind the text */}
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Norway"
      />
      {/* Dark gradient overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-end pb-10 text-white">
        <div className="flex items-center gap-3 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
            className="w-12 h-12 rounded-xl object-cover border border-white/30"
          />
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-80 font-bold">A guide by</p>
            <p className="text-lg font-bold leading-none">Asa Steinars</p>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-2">Norway Guide</h1>
        <p className="text-white/90 max-w-lg">Explore the wild fjords and dramatic landscapes of my home country.</p>
      </div>
    </section>
  );
};

export default Hero;