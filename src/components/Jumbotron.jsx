import React from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";

const Jumbotron = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); 
  };

  return (
    <div
      className="bg-white min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1
        className="gradient-text text-7xl font-bold text-gray -mb-9 tracking-wide drop-shadow-lg -mt-80"
        style={{
          textAlign: "center",
          maxWidth: "1200px",
          width: "auto",
          wordWrap: "break-word",
          height: "200px",
        }}
      >
        One step to track <br />
        your carbon footprint
      </h1>

      <h3 className="font-medium text-xl text-green-800 mb-6 text-center px-4">
        Calculate, understand, and reduce your carbon footprint with <br />
        our comprehensive, science-based calculator.
      </h3>

      <button
        className="carbon-button"
        onClick={handleClick}
      >
        Count Your Carbon →
      </button>
    </div>
  );
};

export default Jumbotron;
