import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Header from "../comonents/header";
import Footer from "./footer";
import BookingForm from "./details";
import {
  FaBed,
  FaCalendarAlt,
  FaRupeeSign,
  FaUtensils,
  FaCar,
  FaArrowRight
} from "react-icons/fa";

// Constants for reusable values
const ANIMATION_DURATION = 0.5;
const CARD_ANIMATION_DIRECTIONS = ["left", "right", "top", "bottom"];

// Type definitions for better type checking
/**
 * @typedef {Object} Package
 * @property {number} id - Package ID
 * @property {string} title - Package title
 * @property {string} description - Package description
 * @property {string} image - Image URL
 * @property {string} price - Package price
 * @property {string} faceletis - Facilities included
 * @property {string} Transport - Transport details
 */

/**
 * Card Component - Displays a tour package card
 * @param {Object} props - Component props
 * @param {Package} props.packageData - Package data to display
 * @param {Function} props.onBookNow - Callback when book now is clicked
 */
const Card = ({ packageData, onBookNow }) => {
  const { title, description, image, price, faceletis, Transport } = packageData;

  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Image Section */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
<div></div>
      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col">
        {/* Title with icon */}
        <div className="flex items-center gap-3 mb-3">
          <FaBed className="text-blue-500 text-lg flex-shrink-0" />
          <h2 className="font-bold text-lg text-gray-800 line-clamp-1">
            {title}
          </h2>
        </div>

        {/* Duration with icon */}
        <div className="flex items-center gap-3 mb-3">
          <FaCalendarAlt className="text-blue-500 text-base flex-shrink-0" />
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>

        {/* Price with icon */}
        <div className="flex items-center gap-3 mb-3">
          <FaRupeeSign className="text-blue-500 text-base flex-shrink-0" />
          <p className="text-gray-700 font-semibold">₹{price}</p>
        </div>

        {/* Facilities with icon */}
        <div className="flex items-center gap-3 mb-3">
          <FaUtensils className="text-blue-500 text-base flex-shrink-0" />
          <p className="text-gray-500 text-xs">{faceletis}</p>
        </div>

        {/* Transport with icon */}
        {Transport && (
          <div className="flex items-center gap-3 mb-4">
            <FaCar className="text-blue-500 text-base flex-shrink-0" />
            <p className="text-gray-500 text-xs">Transport: {Transport}</p>
          </div>
        )}

        {/* Book Now Button */}
     <button
  onClick={() => onBookNow(packageData.id, packageData.title, packageData.price)}
  className="mt-auto flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 font-medium"
  aria-label={`Book ${packageData.title} package`}
>
  Book Now <FaArrowRight className="text-sm" />
</button>

      </div>
    </div>
  );
};

Card.propTypes = {
  packageData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    faceletis: PropTypes.string.isRequired,
    Transport: PropTypes.string,
  }).isRequired,
  onBookNow: PropTypes.func.isRequired,
};

/**
 * AllPackage Component - Main component displaying all tour packages
 */
const AllPackage = () => {
  const navigate = useNavigate();
  
  // Package data - In a real app, this would come from an API
  const packages = [
    {
      id: 1,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/places-to-visit-in-nainital-fi-1600x900.webp",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 2,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/images.jpg",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 3,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/slide2.jpg",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 4,
      title: "Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/download.jpg",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 5,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/places-to-visit-in-nainital-fi-1600x900.webp",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 6,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/places-to-visit-in-nainital-fi-1600x900.webp",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 7,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/places-to-visit-in-nainital-fi-1600x900.webp",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
    {
      id: 8,
      title: "Nainital Lake View",
      description: "4 Night and 5 Days with sightseeing",
      image: "/places-to-visit-in-nainital-fi-1600x900.webp",
      price: "5,999",
      faceletis: "Breakfast & Dinner | Free Cancellation",
      Transport: "Innova",
    },
  ];

  const handleBookNow = (packageId) => {
    // Navigate to details page with package ID
    navigate(`/details/${packageId}`);
  };

  /**
   * Get animation variants based on direction
   * @param {string} direction - Animation direction
   * @returns {Object} Animation variants
   */
  const getAnimationVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: ANIMATION_DURATION, ease: "easeOut" },
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
            className="text-4xl font-bold text-center mb-12 text-red-600"
          >
            Our Tour Packages
          </motion.h1>

          {/* Responsive grid - 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((packageData, index) => {
              const direction =
                CARD_ANIMATION_DIRECTIONS[
                  index % CARD_ANIMATION_DIRECTIONS.length
                ];
              const variants = getAnimationVariants(direction);
      
              return (
                <motion.div
                  key={packageData.id}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card 
                    packageData={packageData} 
                    onBookNow={handleBookNow} 
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllPackage;       