import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="site-container">
      {/* Art Deco Header Ornament */}
      <div className="header-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">❖</div>
        <div className="ornament-line"></div>
      </div>

      {/* Header */}
      <header className="site-header">
        <button 
          className="cta-button desktop-cta"
          onClick={() => navigate('/invite')}
        >
          <span className="cta-inner">Get invited</span>
        </button>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="title-frame">
            <div className="title-ornament-top">◆</div>
            <h1 className="hero-title">
              <span className="title-line">DINNER PARTIES</span>
              <span className="title-divider">⬥ OF ⬥</span>
              <span className="title-line">NEW YORK</span>
            </h1>
            <div className="title-ornament-bottom">◆</div>
          </div>
          
          <p className="hero-subline">
            <span className="quote-mark">"</span>
            The oldest form of theater is the dinner table.
            <span className="quote-mark">"</span>
          </p>
          
          {/* Ornate Brass Frame with Video */}
          <div className="brass-frame-container">
            <div className="brass-frame-outer">
              {/* Corner Ornaments */}
              <div className="corner-ornament corner-tl">
                <svg viewBox="0 0 100 100" className="corner-svg">
                  <path d="M 0 100 L 0 20 Q 0 0 20 0 L 100 0" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="20" r="3" fill="currentColor"/>
                  <line x1="10" y1="10" x2="30" y2="30" stroke="currentColor" strokeWidth="1"/>
                  <line x1="5" y1="25" x2="25" y2="5" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <div className="corner-ornament corner-tr">
                <svg viewBox="0 0 100 100" className="corner-svg">
                  <path d="M 100 100 L 100 20 Q 100 0 80 0 L 0 0" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="80" cy="20" r="3" fill="currentColor"/>
                  <line x1="70" y1="10" x2="90" y2="30" stroke="currentColor" strokeWidth="1"/>
                  <line x1="75" y1="25" x2="95" y2="5" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <div className="corner-ornament corner-bl">
                <svg viewBox="0 0 100 100" className="corner-svg">
                  <path d="M 0 0 L 0 80 Q 0 100 20 100 L 100 100" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="80" r="3" fill="currentColor"/>
                  <line x1="10" y1="70" x2="30" y2="90" stroke="currentColor" strokeWidth="1"/>
                  <line x1="5" y1="85" x2="25" y2="65" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <div className="corner-ornament corner-br">
                <svg viewBox="0 0 100 100" className="corner-svg">
                  <path d="M 100 0 L 100 80 Q 100 100 80 100 L 0 100" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="80" cy="80" r="3" fill="currentColor"/>
                  <line x1="70" y1="70" x2="90" y2="90" stroke="currentColor" strokeWidth="1"/>
                  <line x1="75" y1="85" x2="95" y2="65" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>

              {/* Decorative Side Panels */}
              <div className="side-panel panel-top">
                <div className="panel-pattern">▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲</div>
              </div>
              <div className="side-panel panel-bottom">
                <div className="panel-pattern">▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼</div>
              </div>
              <div className="side-panel panel-left">
                <div className="panel-pattern vertical">◆<br/>◇<br/>◆<br/>◇<br/>◆<br/>◇<br/>◆</div>
              </div>
              <div className="side-panel panel-right">
                <div className="panel-pattern vertical">◆<br/>◇<br/>◆<br/>◇<br/>◆<br/>◇<br/>◆</div>
              </div>

              <div className="brass-frame-inner">
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
        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <button 
        className="cta-button mobile-cta"
        onClick={() => navigate('/invite')}
      >
        <span className="cta-inner">Get invited</span>
      </button>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-ornament-top">
          <div className="ornament-line"></div>
          <div className="ornament-center">❖</div>
          <div className="ornament-line"></div>
        </div>
        
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube size={22} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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