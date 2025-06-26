import React, { useEffect, useState } from 'react';
import { FaGlobe, FaUsers, FaSmile, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const stats = [
  { icon: <FaGlobe size={32} />, label: 'Total Tours', value: 2400 },
  { icon: <FaUsers size={32} />, label: 'Clients', value: 1800 },
  { icon: <FaSmile size={32} />, label: 'Happy Clients', value: 1700 },
  { icon: <FaHeadset size={32} />, label: 'Support', value: 24 },
];

const CounterBox = ({ icon, label, target }) => {
  const [count, setCount] = useState(0);
  const [rgbColor, setRgbColor] = useState('rgb(59, 130, 246)'); // Default blue

  useEffect(() => {
    // Generate random RGB color on mount
    const r = Math.floor(Math.random() * 155 + 100); // 100-255
    const g = Math.floor(Math.random() * 155 + 100);
    const b = Math.floor(Math.random() * 155 + 100);
    setRgbColor(`rgb(${r}, ${g}, ${b})`);

    let start = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
    
      className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 w-full md:w-1/5 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,       
        boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
      }}
    >
      <motion.div 
        className="mb-2"
        animate={{ color: rgbColor }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-3xl font-bold text-gray-800"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2
        }}
      >
        {count}
      </motion.h3>
      <motion.p 
        className="text-gray-500 text-sm mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

const UserStatsCounter = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div 
        className="flex flex-col md:flex-row flex-wrap justify-center gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {stats.map((item, idx) => (
          <CounterBox
            key={idx}
            icon={item.icon}
            label={item.label}
            target={item.value}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default UserStatsCounter;