import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GalleryWithCategories = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      alt: 'Mountain landscape at sunset',
      category: 'nature'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      alt: 'Sunlit forest path in autumn',
      category: 'nature'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3',
      alt: 'Urban city skyline at dusk',
      category: 'urban'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
      alt: 'Modern architectural building',
      category: 'architecture'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      alt: 'Foggy mountain range',
      category: 'nature'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      alt: 'Waterfall in tropical forest',
      category: 'nature'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5',
      alt: 'Snowy mountain peak',
      category: 'nature'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      alt: 'Winter forest landscape',
      category: 'nature'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      alt: 'Cityscape with skyscrapers',
      category: 'urban'
    },
  ];

  // Get all unique categories
  const categories = ['all', ...new Set(images.map(image => image.category))];

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Image Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse images by category with smooth animations
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 500, damping: 10 }}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div>
                  <p className="text-white font-medium">{image.alt}</p>
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-500">No images found in this category</p>
          </motion.div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center text-white">
                <p className="text-xl font-medium">{selectedImage.alt}</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryWithCategories;