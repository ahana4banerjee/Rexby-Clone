import React, { useState } from 'react';
import { Send, User, Sparkles, ArrowLeft, X } from 'lucide-react';

const AskMyGuide = () => {
  const [showChat, setShowChat] = useState(false);

  // --- FULL SCREEN CHAT PAGE ---
  if (showChat) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-in slide-in-from-bottom duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <button 
            onClick={() => setShowChat(false)}
            className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-2 text-gray-600 font-bold"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="flex flex-col items-center">
             <span className="font-bold text-lg">Ása Steinars Guide</span>
             <div className="flex items-center gap-1 text-xs text-teal-600 font-bold uppercase tracking-wider">
                <Sparkles size={10} />
                <span>AI Digital Version</span>
             </div>
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-2xl mx-auto space-y-6">
                
                {/* AI Welcome Message */}
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
                        Hi there, I am Ása Steinars Guide. I have been trained to answer travel questions just like Ása Steinars would do in person, but faster.
                    </div>
                </div>

                {/* User Sample Question */}
                <div className="flex gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <User size={20} className="text-gray-500" />
                    </div>
                    <div className="bg-black text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
                        What is the best season to visit?
                    </div>
                </div>

                {/* AI Thinking State */}
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium pt-2">
                        <span className="animate-pulse">Thinking...</span>
                    </div>
                </div>

            </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-100">
            <div className="max-w-2xl mx-auto relative">
                <input 
                    type="text" 
                    placeholder="Ask anything about Norway..." 
                    className="w-full pl-6 pr-14 py-4 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-black/5 text-lg"
                    autoFocus
                />
                <button className="absolute right-2 top-2 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    <Send size={20} />
                </button>
            </div>
        </div>
      </div>
    );
  }

  // --- MAIN PREVIEW SECTION ---
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-gray-100">
      
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-2">
         <button className="p-2 rounded-full hover:bg-gray-100 border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
         </button>
         <h2 className="text-3xl font-black text-rexby-dark">
            Your Personal Travel Planner
         </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-8">
        
        {/* LEFT COLUMN: Text */}
        <div className="lg:col-span-5 space-y-6 pt-4">
          <h3 className="text-2xl font-black text-rexby-dark">
            Ask my Guide Anything
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed font-medium">
            Rexby is trained on Ása Steinars local knowledge, enabling it to 
            answer questions just like Ása Steinars, but faster
          </p>
          <button 
            onClick={() => setShowChat(true)}
            className="text-lg font-bold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
          >
            Preview
          </button>
        </div>

        {/* RIGHT COLUMN: Chat Card Preview */}
        <div className="lg:col-span-7">
          <div className="border border-gray-200 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white max-w-xl">
            
            {/* Header inside card */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-lg leading-none mb-1">Ása Steinars</h4>
                    <div className="flex items-center gap-1 text-[10px] bg-black text-white px-2 py-0.5 rounded-sm font-bold uppercase tracking-wide w-fit">
                        <span>AI</span>
                        <span>Digital version</span>
                    </div>
                </div>
            </div>

            {/* Chat Messages Preview */}
            <div className="space-y-6 mb-8">
                <p className="text-gray-600 leading-relaxed text-[15px]">
                    Hi there, I am Ása Steinars Guide. I have been trained to answer travel questions just like Ása Steinars would do in person, but faster.
                </p>

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <User size={14} className="text-gray-400" />
                    </div>
                    <p className="font-bold text-gray-900">What is the best season to visit?</p>
                </div>

                <p className="text-gray-400 text-sm animate-pulse pl-11">Thinking...</p>
            </div>

            {/* Fake Input Box */}
            <div 
                onClick={() => setShowChat(true)}
                className="relative cursor-pointer group"
            >
                <div className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-200 text-gray-400 group-hover:border-gray-300 transition-colors bg-white shadow-sm">
                    Message...
                </div>
                <div className="absolute right-2 top-2 p-2 bg-black text-white rounded-full">
                    <Send size={18} />
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AskMyGuide;