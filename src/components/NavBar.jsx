import React, { useState } from 'react';
import { X, Lock, User, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const scrollToAsk = () => {
      const element = document.getElementById('ask-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <>
      {/* --- STICKY NAVBAR --- */}
      <div className="sticky top-0 z-[5000] bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-full">
          
          {/* Left: Ask Question Link */}
          <button 
            onClick={scrollToAsk}
            className="text-rexby-dark font-bold underline decoration-2 underline-offset-4 text-sm md:text-base hover:text-gray-600 transition-colors"
          >
        Unclear? Ask me a question
          </button>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setShowPreview(true)}
              className="px-6 py-2.5 rounded-xl border-2 border-rexby-dark text-rexby-dark font-bold text-sm md:text-base hover:bg-gray-50 transition-colors bg-white"
            >
              Preview
            </button>
            <button 
              onClick={() => setShowLogin(true)}
              className="px-6 py-2.5 rounded-xl bg-[#0e7f8d] border-2 border-[#0e7f8d] text-white font-bold text-sm md:text-base hover:bg-[#0a6671] transition-all shadow-md"
            >
              Get Access
            </button>
          </div>

        </div>
      </div>

      {/* --- PREVIEW PAGE OVERLAY --- */}
      {showPreview && (
        <div className="fixed inset-0 z-[9999] bg-white animate-in slide-in-from-bottom duration-300 overflow-y-auto">
          <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 p-4 flex items-center justify-between z-10">
            <h2 className="text-xl font-black">Full Guide Preview</h2>
            <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>
          <div className="max-w-5xl mx-auto p-8">
              <div className="aspect-video bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 font-bold text-xl mb-8">
                  Interactive Guide Content Placeholder
              </div>
              <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-4/6"></div>
              </div>
          </div>
        </div>
      )}

      {/* --- LOGIN POPUP MODAL --- */}
      {showLogin && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-[32px] w-full max-w-md overflow-hidden shadow-2xl relative">
                <button 
                    onClick={() => setShowLogin(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8 pt-12">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900">Unlock Full Access</h3>
                        <p className="text-gray-500 mt-2">Log in to view the complete Norway Guide.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Email</label>
                            <div className="relative">
                                <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                <input 
                                    type="email" 
                                    placeholder="hello@example.com" 
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                                />
                            </div>
                        </div>
                        <button className="w-full py-4 rounded-xl bg-[#0e7f8d] text-white font-bold text-lg hover:bg-[#0a6671] transition-colors flex items-center justify-center gap-2">
                            Login / Sign Up
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;