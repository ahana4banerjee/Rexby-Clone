const Tabs = () => {
  const tabs = ["Storefront", "Guide Info", "Tips", "Spots", "Itineraries"];
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex gap-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <button 
            key={tab}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
              index === 0 ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;