import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll down → sembunyikan navbar
        setHideNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll up → munculkan navbar
        setHideNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-md ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <span className="text-green-700 font-bold text-xl">EcoSnap</span>
        </div>
        <div className="flex gap-6">
          <a href="/" className="text-green-700 hover:text-green-900">
            Home
          </a>
          <a href="/about" className="text-green-700 hover:text-green-900">
            About
          </a>
          <a href="/contact" className="text-green-700 hover:text-green-900">
            Calculator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
