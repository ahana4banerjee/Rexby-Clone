import React, { useState } from 'react';
import { Star, X, User, Lock, ArrowRight } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[600px] md:h-[700px] overflow-hidden flex items-end md:items-center">
        
        <Header onLoginClick={() => setShowLogin(true)} />

        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Norway Landscape"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        
        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-16 pt-32 md:pt-0">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
              Norway Guide
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-8 h-8 rounded-full border border-white" alt="Asa"/>
                    <span>Guide by Ása Steinars</span>
                </div>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <span className="opacity-80">Norway</span>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-white">New</span>
                </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                Norway is my second home. I was born in Norway and I lived there until I was 7 years old. 
                I often come back and I love this country almost as much as Iceland. 
                This guide is my best tips for Norway to make sure you get the most out of your trip.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                    onClick={() => setShowPreview(true)}
                    className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all"
                >
                    Preview
                </button>

                <button 
                    onClick={() => setShowLogin(true)}
                    className="px-8 py-4 rounded-xl bg-[#0e7f8d] border-2 border-[#0e7f8d] text-white font-bold text-lg hover:bg-[#0a6671] hover:border-[#0a6671] transition-all shadow-lg shadow-teal-900/20"
                >
                    Get Access
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREVIEW MODAL --- */}
      {showPreview && (
        <div className="fixed inset-0 z-[9999] bg-white animate-in slide-in-from-right duration-300 overflow-y-auto">
          <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 p-4 flex items-center justify-between z-10">
            <h2 className="text-xl font-black">Previewing Norway Guide</h2>
            <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
          </div>
          <div className="max-w-4xl mx-auto p-8 space-y-8">
              <div className="h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-bold">Cover Image</div>
              <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              </div>
          </div>
        </div>
      )}

      {/* --- LOGIN POPUP MODAL --- */}
      {showLogin && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-[32px] w-full max-w-md overflow-hidden shadow-2xl relative">
                
                {/* Close Button */}
                <button 
                    onClick={() => setShowLogin(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Login Content */}
                <div className="p-8 pt-12">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900">Unlock Full Access</h3>
                        <p className="text-gray-500 mt-2">Enter your details to access the full Norway Guide.</p>
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

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400">By continuing, you agree to our Terms of Service.</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Hero;