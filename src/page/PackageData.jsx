import React, { useState, useEffect, useRef } from "react";
import Card from "./Data";

const PackageData = () => {
  const packages = [
    {
      id: 1,
      title: "Premium Spa Package",
      description: "Full day spa experience with massage, facial, and access to all facilities.",
      price: 199,
      image: "/image.png",
      tags: ["spa", "relaxation", "premium"]
    },
    {
      id: 2,
      title: "Rafting Tour",
      description: "3-day adventure tour including hiking, rafting and camping.",
      price: 349,
      image: "/image copy.png",
      tags: ["adventure", "outdoor", "active"]
    },
    {
      id: 3,
      title: "Adventure Tour",
      description: "3-day adventure tour including hiking, rafting and camping.",
      price: 349,
      image: "/images (23).jpeg",
      tags: ["adventure", "outdoor", "active"]
    },

    {
      id: 4,
      title: "Adventure Tour",
      description: "3-day adventure tour including hiking, rafting and camping.",
      price: 349,
      image: "/images (23).jpeg",
      tags: ["adventure", "outdoor", "active"]
    },
    {
      id: 5,
      title: "Adventure Tour",
      description: "3-day adventure tour including hiking, rafting and camping.",
      price: 349,
      image: "/images (23).jpeg",
      tags: ["adventure", "outdoor", "active"]
    },
    {
      id: 6,
      title: "Adventure Tour",
      description: "3-day adventure tour including hiking, rafting and camping.",
      price: 349,
      image: "/images (23).jpeg",
      tags: ["adventure", "outdoor", "active"]
    },

    // Add more packages as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-play configuration
  const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, AUTO_PLAY_INTERVAL);
    }
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === packages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? packages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    const width = window.innerWidth;
    if (width < 768) return 1; // mobile
    if (width < 1024) return 2; // tablet
    return 3; // desktop
  };

  // Calculate the cards to display
  const visibleCards = getVisibleCards();
  const displayedPackages = [];
  for (let i = 0; i < visibleCards; i++) {
    const index = (currentIndex + i) % packages.length;
    displayedPackages.push(packages[index]);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Packages</h1>
      
      {/* Slider Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={sliderRef}
      >
        {/* Cards Slider */}
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
          }}
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <Card packageData={pkg} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 ml-2"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 mr-2"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6">
        {packages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageData;