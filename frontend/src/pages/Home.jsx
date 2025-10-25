import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="site-container">
      {/* Logo Header at Top */}
      <header className="site-header">
        <div className="header-line header-line-left"></div>
        <img 
          src="https://customer-assets.emergentagent.com/job_nyc-conversations/artifacts/ielq7dq8_Dinner%20Party%20Logo%20Small.png" 
          alt="Dinner Parties of New York"
          className="site-logo"
        />
        <div className="header-line header-line-right"></div>
      </header>

      {/* CTA Button - Desktop */}
      <div className="cta-container-desktop">
        <button 
          className="cta-button"
          onClick={() => navigate('/invite')}
        >
          <span className="cta-text">Get invited</span>
        </button>
      </div>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">
            <span className="quote-left">"</span>
            The oldest form of theater is the dinner table.
            <span className="quote-right">"</span>
          </p>
          
          {/* Geometric Art Deco Frame with Video */}
          <div className="video-frame-container">
            <div className="deco-frame">
              {/* Top Stepped Border */}
              <div className="frame-top">
                <div className="step-pattern">
                  <div className="step step-1"></div>
                  <div className="step step-2"></div>
                  <div className="step step-3"></div>
                  <div className="step step-center"></div>
                  <div className="step step-3"></div>
                  <div className="step step-2"></div>
                  <div className="step step-1"></div>
                </div>
              </div>

              {/* Corner Chevrons */}
              <div className="corner-chevron corner-tl">
                <svg viewBox="0 0 60 60" className="chevron-svg">
                  <path d="M 0 60 L 0 15 L 15 0 L 60 0" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M 5 60 L 5 17 L 17 5 L 60 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <line x1="10" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="10" y1="10" x2="10" y2="25" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="corner-chevron corner-tr">
                <svg viewBox="0 0 60 60" className="chevron-svg">
                  <path d="M 60 60 L 60 15 L 45 0 L 0 0" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M 55 60 L 55 17 L 43 5 L 0 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <line x1="50" y1="10" x2="35" y2="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="corner-chevron corner-bl">
                <svg viewBox="0 0 60 60" className="chevron-svg">
                  <path d="M 0 0 L 0 45 L 15 60 L 60 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M 5 0 L 5 43 L 17 55 L 60 55" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <line x1="10" y1="50" x2="10" y2="35" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="corner-chevron corner-br">
                <svg viewBox="0 0 60 60" className="chevron-svg">
                  <path d="M 60 0 L 60 45 L 45 60 L 0 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M 55 0 L 55 43 L 43 55 L 0 55" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <line x1="50" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <line x1="50" y1="50" x2="50" y2="35" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              {/* Side Zigzag Panels */}
              <div className="side-zigzag side-left">
                <svg className="zigzag-svg" viewBox="0 0 30 200" preserveAspectRatio="none">
                  <path d="M 0 0 L 15 10 L 0 20 L 15 30 L 0 40 L 15 50 L 0 60 L 15 70 L 0 80 L 15 90 L 0 100 L 15 110 L 0 120 L 15 130 L 0 140 L 15 150 L 0 160 L 15 170 L 0 180 L 15 190 L 0 200" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div className="side-zigzag side-right">
                <svg className="zigzag-svg" viewBox="0 0 30 200" preserveAspectRatio="none">
                  <path d="M 30 0 L 15 10 L 30 20 L 15 30 L 30 40 L 15 50 L 30 60 L 15 70 L 30 80 L 15 90 L 30 100 L 15 110 L 30 120 L 15 130 L 30 140 L 15 150 L 30 160 L 15 170 L 30 180 L 15 190 L 30 200" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>

              {/* Inner Video Container */}
              <div className="video-inner-frame">
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

              {/* Bottom Stepped Border */}
              <div className="frame-bottom">
                <div className="step-pattern">
                  <div className="step step-1"></div>
                  <div className="step step-2"></div>
                  <div className="step step-3"></div>
                  <div className="step step-center"></div>
                  <div className="step step-3"></div>
                  <div className="step step-2"></div>
                  <div className="step step-1"></div>
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
        <span className="cta-text">Get invited</span>
      </button>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-center-ornament">
            <div className="diamond-stack">
              <div className="diamond diamond-1"></div>
              <div className="diamond diamond-2"></div>
              <div className="diamond diamond-3"></div>
            </div>
          </div>
          <div className="divider-line"></div>
        </div>
        
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
            <div className="icon-frame">
              <Instagram size={20} strokeWidth={1.5} />
            </div>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
            <div className="icon-frame">
              <Youtube size={20} strokeWidth={1.5} />
            </div>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-icon">
            <div className="icon-frame">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon">
            <div className="icon-frame">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </div>
          </a>
        </div>
        
        <p className="copyright">© {new Date().getFullYear()} DINNER PARTIES OF NEW YORK</p>
      </footer>
    </div>
  );
};

export default Home;