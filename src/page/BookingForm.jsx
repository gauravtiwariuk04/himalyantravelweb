// BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/your_folder/booking.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Booking successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          guests: '',
          message: ''
        });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to server.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="number" name="guests" placeholder="Guests" value={formData.guests} onChange={handleChange} required />
      <textarea name="message" placeholder="Special Requests" value={formData.message} onChange={handleChange} />
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
