import React from "react";
import { ArrowRight } from "lucide-react"; 
import "./components.css";

const CountButton = () => {
  return (
    <div className="carbon-button">
      <button
        className="carbon-button"
      >
        Count Your Carbon
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default CountButton;
