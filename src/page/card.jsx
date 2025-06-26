import React, { useState } from 'react';
import { FaUtensils, FaBed, FaCalendarAlt, FaRupeeSign, FaArrowRight } from 'react-icons/fa';

const Card = ({ title, description, image, price, faceletis }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Common icon style
  const iconStyle = {
    color: '#3b82f6',
    fontSize: '1rem',
    flexShrink: 0
  };

  // Common text container style
  const textContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
    width: '100%'
  };

  return (
    <div 
      style={{
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        backgroundColor: 'white',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', width: '100%', height: '12rem', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }} 
        />
      </div>
      
      <div style={{ 
        padding: '1.25rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={textContainerStyle}>
          <FaBed style={iconStyle} />
          <h2 style={{
            fontWeight: 'bold',
            fontSize: '1.1rem',
            color: '#1f2937',
            margin: 0
          }}>{title}</h2>
        </div>
        
        <div style={textContainerStyle}>
          <FaCalendarAlt style={iconStyle} />
          <p style={{
            color: '#4b5563',
            fontSize: '0.95rem',
            margin: 0
          }}>{description}</p>
        </div>
        
        <div style={textContainerStyle}>
          <FaRupeeSign style={iconStyle} />
          <p style={{
            color: '#374151',
            fontWeight: '600',
            fontSize: '1.1rem',
            margin: 0
          }}>₹{price}</p>
        </div>
        
        <div style={textContainerStyle}>
          <FaUtensils style={iconStyle} />
          <p style={{
            color: '#4b5563',
            fontSize: '0.85rem',
            margin: 0
          }}>{faceletis}</p>
        </div>
        
        <button 
          style={{
            marginTop: 'auto',
            backgroundColor: isButtonHovered ? 'brown' : 'brown',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: '100%',
            fontSize: '1rem',
            fontWeight: '600'
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Book Now <FaArrowRight style={{ fontSize: '0.9rem' }} />
        </button>
      </div>
    </div>
  );
};

export default Card;