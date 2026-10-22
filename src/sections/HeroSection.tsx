import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { InteractiveSystemVisual } from '../components/InteractiveSystemVisual';
import { Github, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="hero-content">
            {/* Status indicator */}
            <div className="hero-status-pill">
              <span className="status-dot" />
              <span>{personalInfo.status.detail}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              I build systems that <span className="highlight">solve real problems.</span>
            </h1>

            {/* Introduction */}
            <p className="hero-intro">
              {personalInfo.heroIntro}
            </p>

            {/* Supporting line */}
            <p className="hero-subline">
              {personalInfo.heroSubline}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button className="btn btn-primary btn-lg" onClick={onExploreClick}>
                <span>Explore my work</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn btn-secondary btn-lg" onClick={onContactClick}>
                <span>Get in touch</span>
              </button>
            </div>

            {/* Social links row */}
            <div className="hero-social-row">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                aria-label="Piyush Bisht GitHub Profile"
              >
                <Github size={16} />
                <span>github/yuxhhh</span>
                <ExternalLink size={12} />
              </a>

              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                aria-label="Piyush Bisht LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>linkedin/piyush-bisht</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Architectural Visual */}
          <div className="hero-visual-column">
            <InteractiveSystemVisual />
          </div>
        </div>

        {/* Scroll Cue */}
        <div 
          className="scroll-indicator" 
          onClick={onExploreClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') onExploreClick(); }}
        >
          <div className="mouse-scroll" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};
