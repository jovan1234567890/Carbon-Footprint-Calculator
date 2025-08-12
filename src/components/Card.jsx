import React from "react";
import "./components.css";

const Card = () => {
  const cards = [
    {
      value: "4.8",
      unit: "tons/year",
      description: "Global Average CO2",
      type: "green",
    },
    {
      value: "2.0",
      unit: "",
      description: "Paris Agreement Target",
      type: "gradient",
    },
    {
      value: "4.8",
      unit: "tons/year",
      description: "Global Average CO2",
      type: "green",
    },
  ];

  return (
    <div className="card-wrapper">
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.type}`}>
          <div className="card-value">
            {card.value}
            {card.unit && <span className="card-unit">{card.unit}</span>}
          </div>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;