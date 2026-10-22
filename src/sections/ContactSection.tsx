import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!personalInfo.socialLinks.email) return;
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card-main">
          <div className="section-label" style={{ marginBottom: '1.25rem' }}>
            05 / INITIATE CONTACT
          </div>

          <h2 className="contact-headline">
            Have an interesting problem to solve?
          </h2>

          <p className="contact-subtext">
            I'm always interested in learning, building useful software, and connecting with people who care about technology. Whether you're exploring potential internships, technical collaboration, or discussing distributed systems, let's connect.
          </p>

          {/* Action CTAs */}
          <div className="contact-actions-row">
            {personalInfo.socialLinks.email && (
              <>
                <a 
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="btn btn-primary btn-lg"
                >
                  <Mail size={18} />
                  <span>Send an Email</span>
                </a>

                <button 
                  className={`copy-email-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'Copied to Clipboard!' : personalInfo.socialLinks.email}</span>
                </button>
              </>
            )}
          </div>

          {/* Profile Links Grid */}
          <div className="contact-profiles-grid">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-profile-box"
              aria-label="Visit GitHub Profile"
            >
              <div className="contact-profile-icon">
                <Github size={20} />
              </div>
              <div className="contact-profile-info">
                <div className="contact-profile-name">GitHub</div>
                <div className="contact-profile-handle">@yuxhhh</div>
              </div>
              <ArrowUpRight size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
            </a>

            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-profile-box"
              aria-label="Visit LinkedIn Profile"
            >
              <div className="contact-profile-icon">
                <Linkedin size={20} />
              </div>
              <div className="contact-profile-info">
                <div className="contact-profile-name">LinkedIn</div>
                <div className="contact-profile-handle">/in/piyush-bisht-51bbbb374</div>
              </div>
              <ArrowUpRight size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
            </a>
          </div>

          {/* Status Note */}
          <div style={{ marginTop: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span className="status-dot" style={{ width: 6, height: 6 }} />
            <span>Timezone: IST (UTC+05:30) • Typical response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};
