import React, { useState, useRef, useEffect } from 'react';
import { Globe, Menu, X, Check } from 'lucide-react';

// Accept 'onLoginClick' as a prop
const Header = ({ onLoginClick }) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English (US)');

  const languages = ["English (US)", "Norsk", "Deutsch", "Français", "Español"];
  const menuItems = ["About Us", "Start Exploring", "Become a Travel Creator", "Log in"];

  const headerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowLanguages(false);
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="absolute top-0 left-0 w-full z-50 p-6 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm md:bg-transparent md:shadow-none md:p-0">
        <div className="w-8 h-8 rounded-full border-[3px] border-[#0e7f8d] flex items-center justify-center font-bold text-lg leading-none pb-1 text-[#0e7f8d] bg-white">
          R
        </div>
        <span className="text-2xl font-black tracking-tight text-[#0e7f8d] hidden md:block">Rexby</span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* Attach the prop to the onClick event */}
        <button 
          onClick={onLoginClick}
          className="hidden md:block px-6 py-2 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white hover:text-black transition-all text-sm backdrop-blur-sm"
        >
          Log in
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => { setShowLanguages(!showLanguages); setShowMenu(false); }}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <Globe size={24} strokeWidth={2} />
          </button>

          {showLanguages && (
            <div className="absolute top-12 right-0 bg-white rounded-2xl shadow-xl w-64 overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
               <div className="p-4 border-b border-gray-50">
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Select Language</h4>
               </div>
               <div className="max-h-60 overflow-y-auto">
                 {languages.map((lang) => (
                   <button 
                     key={lang}
                     onClick={() => { setSelectedLang(lang); setShowLanguages(false); }}
                     className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between text-sm font-bold text-gray-700"
                   >
                     {lang}
                     {selectedLang === lang && <Check size={16} className="text-teal-600" />}
                   </button>
                 ))}
               </div>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="relative">
          <button 
            onClick={() => { setShowMenu(!showMenu); setShowLanguages(false); }}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {showMenu ? <X size={28} /> : <Menu size={28} />}
          </button>

          {showMenu && (
            <div className="absolute top-12 right-0 bg-white rounded-2xl shadow-xl w-56 overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
               <div className="py-2">
                 {menuItems.map((item) => (
                   <button 
                     key={item}
                     onClick={() => item === "Log in" ? onLoginClick() : null}
                     className="w-full text-left px-6 py-3 hover:bg-gray-50 text-sm font-bold text-gray-700 hover:text-teal-700 transition-colors"
                   >
                     {item}
                   </button>
                 ))}
               </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;