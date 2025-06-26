import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ packageData }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booknow", { state: { selectedPackage: packageData } });
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          className="w-full h-full object-cover"
          src={packageData.image} 
          alt={packageData.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="px-6 py-4">
        <motion.h3 
          className="font-bold text-xl mb-2 text-gray-800"
          whileHover={{ color: "#4f46e5" }} // indigo-600
        >
          {packageData.title}
        </motion.h3>
        <p className="text-gray-600 text-base mb-4 line-clamp-2">
          {packageData.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-indigo-600">
            ${packageData.price}
          </span>
          <motion.button
            onClick={handleBookNow}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book Now
          </motion.button>
        </div>
      </div>
      
      <div className="px-6 pt-2 pb-4">
        <div className="flex flex-wrap gap-2">
          {packageData.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              whileHover={{ 
                backgroundColor: "#e0e7ff", // indigo-100
                color: "#4f46e5" // indigo-600
              }}
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;