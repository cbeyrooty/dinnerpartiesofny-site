import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="site-container">
      <div className="thank-you-page">
        {/* Deco Divider */}
        <div className="deco-divider-top">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line"></div>
        </div>

        <div className="thank-you-content">
          {/* Sunburst Ornament */}
          <div className="sunburst-ornament">
            <svg viewBox="0 0 100 100" className="sunburst-svg">
              <g transform="translate(50,50)">
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(30)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(60)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(90)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(120)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(150)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(180)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(210)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(240)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(270)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(300)"/>
                <line x1="0" y1="-35" x2="0" y2="-45" stroke="currentColor" strokeWidth="2" transform="rotate(330)"/>
                <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
              </g>
            </svg>
          </div>

          <h1 className="thank-you-title">THANKS FOR YOUR REQUEST.</h1>
          
          <div className="title-underline title-underline-center">
            <div className="underline-diamond"></div>
          </div>
          
          <p className="thank-you-message">
            We'll review submissions and be in touch if there's a fit.
          </p>
          
          <button 
            className="home-button"
            onClick={() => navigate('/')}
          >
            <Home size={16} strokeWidth={2} />
            <span>BACK TO HOME</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;