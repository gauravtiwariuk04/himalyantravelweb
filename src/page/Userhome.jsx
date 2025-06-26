import React, { useState } from 'react';
import Header from "../comonents/header";
import Footer from "./footer";
import Enquresform from "./Enquresform";
import UserStatsCounter from "../comonents/UserStatsCounter";
import PackageData from './PackageData';


const slides = [
  {
    image: 'https://picsum.photos/id/1018/1200/600',
    title: 'Beautiful Landscapes',
    description: 'Discover the most breathtaking views from around the world',
    ctaText: 'Explore Now'
  },
  {
    image: 'https://picsum.photos/id/1015/1200/400',
    title: 'Urban Adventures',
    description: 'Experience the vibrant energy of city life',
    ctaText: 'View Cities'
  },
  {
    image: 'https://picsum.photos/id/1019/1200/400',
    title: 'Mountain Getaways',
    description: 'Find peace in the majestic mountain ranges',
    ctaText: 'Book Retreat'
  }
];

const FullWidthSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      <Header />

      <div className="relative w-full overflow-hidden">
        {/* Image with overlay */}
        <div className="relative w-full h-[500px]">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition duration-500 ease-in-out"
          />

          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Centered text content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slides[currentIndex].title}
              </h2>
              <p className="text-lg md:text-xl mb-6">
                {slides[currentIndex].description}
              </p>
              <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-opacity-90 transition">
                {slides[currentIndex].ctaText}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
        >
          ❮
        </button>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
        >
          ❯
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
     <div>
        <Enquresform/>
   <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg shadow-md gap-0 md:gap-6">
  {/* Text Section */}
  <div className="flex-1 md:pr-4">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">About Travel</h2>
    <div className="text-gray-600 text-base leading-relaxed space-y-3">
      <p>
        "Travel about" generally means to journey from place to place, often for leisure or exploration.
      </p>
      <p className="font-medium text-gray-700">Meaning:</p>
      <ul className="space-y-2 list-disc pl-5">
        <li><span className="font-medium">Movement:</span> Travel involves physically going from one location to another.</li>
        <li><span className="font-medium">Exploration:</span> It implies discovering new places and experiencing different environments.</li>
        <li><span className="font-medium">Variety of Purposes:</span> Can be for tourism, business, visiting family, or personal enrichment.</li>
        <li><span className="font-medium">Different Scales:</span> Ranges from short trips to extended journeys.</li>
      </ul>
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
<h1 className="text-xl md:text-2x8 font-semibold text-gray-800 mb-4 ns-5 ps-5 text-center mt-5 pt-5">Testimonial</h1>
        <UserStatsCounter/>
      </div>
      <PackageData/>
      <Footer />

     
    </>
  );
};

export default FullWidthSlider;
