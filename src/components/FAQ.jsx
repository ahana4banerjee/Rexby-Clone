import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How do I access the Guide and Map?",
      answer: "After purchase, you will receive an email with a link to access the guide. You can view it on any device with a browser, and the map can be integrated directly into your Google Maps app."
    },
    {
      id: 2,
      question: "Do I need internet connection?",
      answer: "The guide itself requires an internet connection to load images and content initially. However, the Google Maps integration can be used offline if you download the area beforehand."
    },
    {
      id: 3,
      question: "How long will I have access?",
      answer: "You have lifetime access! Once you purchase the guide, it's yours forever, including any future updates or new spots added."
    },
    {
      id: 4,
      question: "Can I share it with my travel buddy?",
      answer: "The guide is licensed for individual use. However, if you are traveling together, you can certainly view it on one device or share the itinerary planning."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Title */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-black text-rexby-dark leading-tight">
            Your questions, answered
          </h2>
        </div>

        {/* RIGHT COLUMN: Accordion List */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-gray-100 border-t border-gray-100 border-b">
            {questions.map((item, index) => (
              <div key={item.id} className="py-6">
                
                {/* Question Header (Clickable) */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-lg text-gray-700 font-medium group-hover:text-black transition-colors">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-gray-50' : ''}`}>
                    <ChevronDown size={20} className="text-gray-500" />
                  </div>
                </button>

                {/* Expanded Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;