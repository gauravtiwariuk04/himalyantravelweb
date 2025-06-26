import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPackage } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1, // Default to 1 guest
    date: "",
    requests: "",
    packageId: selectedPackage?.id || "",
    packageTitle: selectedPackage?.title || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  if (!selectedPackage) {
    navigate("/");
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGuestChange = (e) => {
    let value = parseInt(e.target.value);
    // Ensure guests is at least 1 and not more than 20
    value = Math.max(1, Math.min(20, isNaN(value) ? 1 : value));
    setFormData(prev => ({
      ...prev,
      guests: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validations
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      setSubmitMessage("Please enter a valid phone number (10-15 digits)");
      setIsSubmitting(false);
      return;
    }

    if (formData.guests < 1 || formData.guests > 20) {
      setSubmitMessage("Number of guests must be between 1 and 20");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost/Himalyantravel/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("Booking successful! We'll contact you soon.");
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: 1,
          date: "",
          requests: "",
          packageId: selectedPackage.id,
          packageTitle: selectedPackage.title
        });
      } else {
        throw new Error(result.message || "Booking failed");
      }
    } catch (error) {
      setSubmitMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Package Header */}
        <div className="bg-indigo-50 p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800 text-center">
            Book: {selectedPackage.title}
          </h1>
        </div>
        
        {/* Package Image */}
        <img 
          src={selectedPackage.image} 
          alt={selectedPackage.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Package Info */}
        <div className="p-4">
          <p className="text-gray-600 mb-3">{selectedPackage.description}</p>
          <p className="text-lg font-medium text-indigo-600 mb-4">
            ${selectedPackage.price}
          </p>
          
          {/* Simple Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10,15}"
                title="Please enter 10-15 digit phone number"
              />
              <div className="flex items-center">
                <label htmlFor="guests" className="mr-3 text-gray-700">
                  Number of Guests:
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="20"
                  className="w-20 p-2 border border-gray-300 rounded"
                  required
                  value={formData.guests}
                  onChange={handleGuestChange}
                />
              </div>
              <input
                type="date"
                name="date"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
              <textarea
                name="requests"
                placeholder="Special requests"
                rows="2"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.requests}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors disabled:bg-indigo-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Book Now"}
            </button>

            {submitMessage && (
              <p className={`mt-3 text-center ${submitMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;