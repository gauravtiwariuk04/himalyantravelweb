import React from 'react';
import { motion } from 'framer-motion';
import Header from '../comonents/header';
import Footer from './footer';

const AboutPage = () => {
  // Animation variants with slower transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Increased from 0.2
        delayChildren: 0.3    // Added initial delay
      }
    }
  };

  const leftSlideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 1.2      // Increased duration
      }
    }
  };

  const rightSlideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 1.2      // Increased duration
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1.5      // Increased duration
      }
    }
  };

  return (
    <div>
      <Header/>
      <motion.div 
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-16"
          variants={fadeIn}
          transition={{ duration: 2 }} // Even slower for hero section
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Company
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Learn more about who we are and what we stand for.
          </p>
        </motion.div>

        {/* First Row - Image Left, Text Right */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Slides in from left */}
            <motion.div 
              className="lg:w-1/2"
              variants={leftSlideIn}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our team"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Text Content - Slides in from right */}
            <motion.div 
              className="lg:w-1/2"
              variants={rightSlideIn}
              transition={{ duration: 1.5, delay: 0.2 }} // Added delay and longer duration
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010, we started as a small team with big dreams. Today, we're proud to serve thousands of customers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey has been marked by continuous growth, innovation, and an unwavering commitment to our values.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">500+ satisfied clients</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">50+ dedicated employees</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10+ industry awards</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Second Row - Text Left, Image Right */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content - Slides in from left */}
            <motion.div 
              className="lg:w-1/2 lg:order-1 order-2"
              variants={leftSlideIn}
              transition={{ duration: 1.5, delay: 0.2 }} // Added delay and longer duration
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                We believe in creating value through innovation, quality, and exceptional customer service. Our mission is to empower businesses with cutting-edge solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Every product we develop and every service we provide is designed with our customers' success in mind.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Customer-first approach</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Innovative solutions</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sustainable practices</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Image - Slides in from right */}
            <motion.div 
              className="lg:w-1/2 lg:order-2 order-1"
              variants={rightSlideIn}
            >
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our mission"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 mb-20"
          variants={fadeIn}
          transition={{ duration: 2 }} // Slower fade in for the whole section
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: "Integrity",
                description: "We do the right thing, even when no one is watching.",
                icon: (
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We constantly seek better ways to solve problems.",
                icon: (
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do.",
                icon: (
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 hover:bg-gray-50 rounded-lg transition"
                variants={index % 2 === 0 ? leftSlideIn : rightSlideIn}
                transition={{ duration: 1.2, delay: index * 0.2 }} // Staggered delays
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.5 } // Slower hover animation
                }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default AboutPage;