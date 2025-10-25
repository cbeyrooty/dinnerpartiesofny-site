import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="site-container">
      {/* Header */}
      <header className="site-header">
        <button 
          className="cta-button desktop-cta"
          onClick={() => navigate('/invite')}
        >
          Get invited
        </button>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">DINNER PARTIES OF NEW YORK</h1>
          <p className="hero-subline">Eight perspectives. One table. Classic New York conversation.</p>
          
          {/* Ornate Brass Frame with Video */}
          <div className="brass-frame-container">
            <div className="brass-frame">
              <div className="frame-corner frame-corner-tl"></div>
              <div className="frame-corner frame-corner-tr"></div>
              <div className="frame-corner frame-corner-bl"></div>
              <div className="frame-corner frame-corner-br"></div>
              
              <div className="frame-border frame-border-top"></div>
              <div className="frame-border frame-border-right"></div>
              <div className="frame-border frame-border-bottom"></div>
              <div className="frame-border frame-border-left"></div>
              
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/i1841azegyk?autoplay=1&mute=0"
                  title="Dinner Parties of New York - Latest Episode"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <button 
        className="cta-button mobile-cta"
        onClick={() => navigate('/invite')}
      >
        Get invited
      </button>

      {/* Footer */}
      <footer className="site-footer">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <Twitter size={20} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Dinner Parties of New York</p>
      </footer>
    </div>
  );
};

export default Home;