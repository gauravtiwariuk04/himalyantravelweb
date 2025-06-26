import React from "react";
import { useTheme } from "../context/Themecontext";
import Header from "../comonents/header";
import UserStatsCounter from "../comonents/UserStatsCounter";
import Footer from "./footer";
import Abouts from "../comonents/Abouts";
import UserList from "../comonents/Userlist";
import ContactForm from "../comonents/components/Contactform";
import Even from "../comonents/components/Even";
import Para from "./Paragrap";
import MyForm from "./MyFrom";
import ImageSlider from "./packagesliders";
import PackageData from "./PackageData";
function Homepage() {
  const { darkMode, toggleTheme } = useTheme(); // Added toggleTheme from context
  const lines= [
    {
      id:1,
      para:'hasofaoohasfohas',
      headings:"hsot hosrt"
    }
  ];
  return (
    <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}>
      <Header />
      
      <div className="p-6">
        <Abouts/>
      </div>
      
    <div className="flex">
         <div><UserList/></div>
        <div> <ContactForm/></div>
      </div>
      <Even/>
      <UserStatsCounter/>
       <ImageSlider/> 
      
      <div className="p-6">
        <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg shadow-md`}>
          <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
          <p className="mb-4">Current theme: {darkMode ? 'Dark' : 'Light'}</p>
          
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md font-medium ${
              darkMode 
                ? 'bg-yellow-400 text-gray-800 hover:bg-yellow-500' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            } transition-colors duration-200`}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
      
        {lines.map((line) => (
          
          <Para key={line.id} paragraph={line} />
        ))}
      <MyForm/>
      <PackageData/>
      <Footer />
    </div>
  );
}

export default Homepage;  