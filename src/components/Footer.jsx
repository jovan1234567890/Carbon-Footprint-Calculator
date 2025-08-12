import React from "react";

const Footer = () => {
  return (
    <div
      className="text-green-800 py-6"
      style={{
        background: "white",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-lg font-semibold">&copy; Carbon Footprint Calculator </h1>
          <p className="text-sm opacity-90">Have a better life</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="https://www.facebook.com/"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="https://twitter.com"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="https://instagram.com"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="https://linkedin.com"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-200 opacity-90">
        Designed with Love
      </div>
    </div>
  );
};

export default Footer;
