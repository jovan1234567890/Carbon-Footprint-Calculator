import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './components.css';
  const handleClick = () => {
    navigate("/about");
  };

const cardData = [
  {
    title: 'Comprehensive Calculation',
    description:
      'Track emissions from transportation, energy usage, diet, and lifestyle choices with scientifically-backed formulas.',
  },
  {
    title: 'Personalized Insights',
    description:
      'Identify which habits contribute most to your footprint and discover where small changes make a big impact.',
  },
  {
    title: 'Actionable Tips',
    description:
      'Get practical suggestions tailored to your lifestyle—from switching energy sources to reducing food waste.',
  },
];

const CarbonFootprintSection = () => {
  return (
    <section
      className="carbon-footprint-section"
      style={{
        padding: '9rem 14rem',
        maxWidth: '1900px',
        margin: '0 auto',
        backgroundColor: 'white',
      }}
    >
      {/* Intro Section */}
      <div
        className="intro"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}
      >
        <h2
          className='gradient-text text-5xl bold'
          style={{
            marginLeft: '90px'
          }}
        >
          <strong>Why calculate your <br />
          carbon footprint?</strong>
        </h2>

        <div
          style={{
            flex: '1 1 280px',
            maxWidth: '320px',
            textAlign: 'right',
          }}
        >
          <p
            style={{
              marginBottom: '1rem',
              fontSize: '0.9rem',
              color: '#24433E',
              marginRight: '5rem',
              textAlign: 'justify',
              maxWidth: '600px'
            }}
          >
            Understanding your environmental impact is the first step toward
            meaningful climate action. Our calculator provides the insights you
            need to make informed decisions.
          </p>
          <button
            className="get-started-btn"
            style={{
              background: 'linear-gradient(90deg, #7CA4F9 0%, #64B686 100%)',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.6rem',
              borderRadius: '1.2rem',
              fontSize: '1rem',
              fontWeight: '600',
              marginRight: '5rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background 0.3s ease',
            }}
            onClick={handleClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                'linear-gradient(90deg, #5E85E0 0%, #4A9C67 100%)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                'linear-gradient(90deg, #7CA4F9 0%, #64B686 100%)')
            }
          >
           <a href="/about"> Get to know </a> <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="cards"
        style={{
          display: 'flex',
          gap: '1.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'left'
        }}
      >
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              background: 'linear-gradient(180deg, #D1E6E0 0%, #5A9B87 100%)',
              borderRadius: '1.5rem 1.5rem 2.75rem 0',
              padding: '1.5rem 1.25rem 2.25rem 1.25rem',
              width: '280px',
              height: '300px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              textAlign: 'left'
            }}
          >
            <h3
              style={{
                fontWeight: '700',
                fontSize: '1.3rem',
                color: '#1A4F40',
                marginBottom: '0.6rem',
                textAlign: 'center',
                marginLeft: '10px'
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#1A4F40',
                lineHeight: '1.3',
                textAlign: 'left'
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarbonFootprintSection;