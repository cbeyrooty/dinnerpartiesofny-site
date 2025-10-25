import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="site-container">
      <div className="thank-you-page">
        <div className="thank-you-content">
          <div className="brass-ornament">✦</div>
          <h1 className="thank-you-title">Thanks for your request.</h1>
          <p className="thank-you-message">
            We'll review submissions and be in touch if there's a fit.
          </p>
          <button 
            className="home-button"
            onClick={() => navigate('/')}
          >
            <Home size={18} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;