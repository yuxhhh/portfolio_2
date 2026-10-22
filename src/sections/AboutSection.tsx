import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, ShieldCheck, Cpu, Code2, Network } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">01 / BACKGROUND & PHILOSOPHY</div>
          <h2 className="section-title">Engineering with intent and technical curiosity.</h2>
          <p className="section-description">
            A grounded approach to learning software engineering — prioritizing fundamental systems, defensive security, and shipping working implementations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Editorial Card */}
          <div className="about-editorial-card">
            <p>
              {personalInfo.editorialBio}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Rather than sticking strictly to classroom assignments, I spend my time exploring the boundaries of modern technology — investigating how smart contracts enforce decentralized agreements, how CI/CD pipelines automate security audits before vulnerabilities reach production, and how machine learning can detect unusual transaction activity in distributed ledgers.
            </p>

            {/* Core Pillars */}
            <div className="about-highlights">
              <div className="about-highlight-item">
                <Network className="about-highlight-icon" size={20} />
                <div className="about-highlight-text">
                  <h4>Distributed Systems</h4>
                  <p>Exploring peer-to-peer topologies, ledger consensus, and resilient client-server boundaries.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <ShieldCheck className="about-highlight-icon" size={20} />
                <div className="about-highlight-text">
                  <h4>Defensive Security</h4>
                  <p>Auditing access controls, shifting security left in CI/CD, and practicing threat modeling.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <Cpu className="about-highlight-icon" size={20} />
                <div className="about-highlight-text">
                  <h4>Intelligent Systems</h4>
                  <p>Applying anomaly detection algorithms and LLM pipelines to structure complex data.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <Code2 className="about-highlight-icon" size={20} />
                <div className="about-highlight-text">
                  <h4>Full-Stack Delivery</h4>
                  <p>Building clean, responsive user interfaces backed by scalable APIs and relational stores.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Facts & Stats Column */}
          <div className="about-facts-column">
            {/* Education Card */}
            <div className="fact-card">
              <div className="fact-label">University & Degree</div>
              <div className="fact-value">{personalInfo.education.institution}</div>
              <div className="fact-sub">
                {personalInfo.education.degree} • Class of {personalInfo.education.graduationYear}
              </div>
              <div style={{ marginTop: '0.65rem' }}>
                <span className="fact-label">ACADEMIC STANDING:</span>
                <span className="fact-cgpa">{personalInfo.education.cgpa} CGPA</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="fact-card">
              <div className="fact-label">Geographic Base</div>
              <div className="fact-value" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} color="#a3e635" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="fact-sub">SRM IST Kattankulathur Campus • Open to relocation for work</div>
            </div>

            {/* Core Interests Card */}
            <div className="fact-card">
              <div className="fact-label">Core Technical Interests</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
                {personalInfo.interests.map((interest, idx) => (
                  <span key={idx} className="tech-tag" style={{ color: 'var(--text-primary)' }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
