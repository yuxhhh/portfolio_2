import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <span>© {currentYear} {personalInfo.name}. Designed & engineered with precision.</span>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>
            Built with React, TypeScript, and clean modern CSS. No bloated frameworks.
          </div>
        </div>

        <button 
          className="footer-back-to-top" 
          onClick={scrollToTop}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Back to top of page"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};
