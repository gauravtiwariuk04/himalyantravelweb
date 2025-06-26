import React, { useState } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#764d1e] shadow-lg">
      {/* Main Nav Container */}
      <div className="max-w-8xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          </div>

          {/* Desktop Navigation - Box Style */}
          <nav className="hidden md:flex space-x-1 bg-[#5a3a16] rounded-lg p-1 shadow-inner">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/Userhome">Dashboard</CustomNavLink>
            <CustomNavLink to="/Abouts">About</CustomNavLink>
            <CustomNavLink to="/package">Packages</CustomNavLink>
            <CustomNavLink to="/settings">Settings</CustomNavLink>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link 
              to="/login" 
              className="px-4 py-2 text-yellow-200 hover:text-white transition rounded-lg hover:bg-[#5a3a16]"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-yellow-400 text-brown-800 rounded-lg hover:bg-yellow-500 transition font-medium shadow hover:shadow-md"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-[#5a3a16] transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu - Box Style */}
        {menuOpen && (
          <div className="md:hidden mt-3 bg-[#5a3a16] rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/Userhome" onClick={() => setMenuOpen(false)}>Dashboard</MobileNavLink>
              <MobileNavLink to="/abouts" onClick={() => setMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/package" onClick={() => setMenuOpen(false)}>Packages</MobileNavLink>
              <MobileNavLink to="/Task" onClick={() => setMenuOpen(false)}>Tasks</MobileNavLink>
              <MobileNavLink to="/settings" onClick={() => setMenuOpen(false)}>Settings</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</MobileNavLink>
            </div>
            
            <div className="mt-4 pt-4 border-t border-yellow-200/30">
              <Link 
                to="/login" 
                className="block w-full text-center px-4 py-2 text-yellow-200 hover:text-white transition rounded-lg hover:bg-[#6d4b23] mb-2"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="block w-full text-center px-4 py-2 bg-yellow-400 text-brown-800 rounded-lg hover:bg-yellow-500 transition font-medium shadow"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Custom NavLink component for active styling
const CustomNavLink = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={`px-4 py-2 text-white hover:bg-[#6d4b23] hover:text-yellow-200 transition rounded-md text-sm font-medium ${
        match ? 'bg-[#6d4b23] text-yellow-300' : ''
      }`}
      {...props}
    >
      {children}
    </NavLink>
  );
};

// Mobile NavLink component
const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="px-4 py-2 text-white hover:bg-[#6d4b23] hover:text-yellow-200 transition rounded-md"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;