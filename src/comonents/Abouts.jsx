import React, { useState } from "react";

function Abouts() {
  const [showFullContent, setShowFullContent] = useState(false);
  
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg shadow-md gap-0 md:gap-6">
      {/* Text Section */}
      <div className="flex-1 md:pr-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">About Travel</h2>
        <div className="text-gray-600 text-base leading-relaxed space-y-3">
          <p>
            "Travel about" generally means to journey from place to place, often for leisure or exploration.
          </p>
          
          {showFullContent ? (
            <>
              <p className="font-medium text-gray-700">Meaning:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><span className="font-medium">Movement:</span> Travel involves physically going from one location to another.</li>
                <li><span className="font-medium">Exploration:</span> It implies discovering new places and experiencing different environments.</li>
                <li><span className="font-medium">Variety of Purposes:</span> Can be for tourism, business, visiting family, or personal enrichment.</li>
                <li><span className="font-medium">Different Scales:</span> Ranges from short trips to extended journeys.</li>
              </ul>
            </>
          ) : (
            <p className="font-medium text-gray-700">Meaning: Movement, Exploration, Variety of Purposes, Different Scales...</p>
          )}
          
          <button
            onClick={toggleContent}
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {showFullContent ? 'Hide' : 'Show More'}
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto">
        <img 
          src="/places-to-visit-in-nainital-fi-1600x900.webp" 
          alt="Travel destination" 
          className="h-auto w-full md:w-[520px] rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default Abouts;