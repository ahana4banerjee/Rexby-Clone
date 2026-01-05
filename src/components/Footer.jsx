import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* --- COLUMN 1: Brand & Mission (Span 5) --- */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2 text-[#0e7f8d]">
              <div className="w-8 h-8 rounded-full border-[3px] border-[#0e7f8d] flex items-center justify-center font-bold text-lg leading-none pb-1">
                R
              </div>
              <span className="text-3xl font-black tracking-tight">Rexby</span>
            </div>

            {/* Mission Text */}
            <p className="text-gray-400 font-medium leading-relaxed max-w-md text-sm">
              Rexby was founded in 2021 with the mission of enabling travel content creators 
              to provide a better service and capture more of the immense value they are creating 
              for the tourism industry
            </p>

            {/* Backed By Section */}
            <div className="pt-8 flex items-center gap-4 opacity-40 grayscale">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Backed by</span>
              {/* Mock Logos for Techstars & Rannis */}
              <div className="h-6 font-bold text-lg text-gray-600">techstars_</div>
              <div className="h-6 font-bold text-lg text-gray-600 flex items-center gap-1">
                <div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
                rannís
              </div>
            </div>
          </div>

          {/* --- COLUMN 2: Rexby Links (Span 2) --- */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-rexby-dark text-lg">Rexby</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="#" className="hover:text-rexby-dark transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-rexby-dark transition-colors">Terms of use</a></li>
              <li><a href="#" className="hover:text-rexby-dark transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* --- COLUMN 3: Contact Us (Span 3) --- */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-rexby-dark text-lg">Contact us</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li>Hallgerðargata 13</li>
              <li>105 Reykjavík Iceland</li>
              <li><a href="mailto:hello@rexby.com" className="hover:text-rexby-dark transition-colors">hello@rexby.com</a></li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                <Facebook size={24} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-600 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* --- COLUMN 4: Our Licence (Span 2) --- */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-rexby-dark text-lg">Our licence</h4>
            <ul className="space-y-2 text-gray-400 font-medium text-sm">
              <li>Kt: 6909211460</li>
              <li>Vsk: 146757</li>
            </ul>

            {/* License Badge Image */}
            <div className="w-32 h-32 relative bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden group cursor-pointer">
               {/* Mocking the License Badge Look */}
               <img 
                 src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&q=80" 
                 className="w-full h-full object-cover opacity-80" 
                 alt="License Background"
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 bg-white/90">
                  <div className="w-8 h-8 mb-1 text-blue-900 border-2 border-blue-900 rounded-full flex items-center justify-center font-bold text-[8px]">
                    F
                  </div>
                  <p className="text-[6px] font-bold uppercase text-blue-900 tracking-wider">Authorized</p>
                  <p className="text-[6px] font-bold uppercase text-blue-500 tracking-wider">Travel Agency</p>
                  <p className="text-[6px] font-bold mt-1 text-gray-500">2024-025</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;