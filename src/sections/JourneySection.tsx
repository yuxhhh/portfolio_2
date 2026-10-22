import React from 'react';
import { timelineData } from '../data/portfolioData';
import { GraduationCap, Code2, Rocket, CheckCircle2 } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={14} color="#a3e635" />;
      case 'project':
        return <Code2 size={14} color="#a3e635" />;
      case 'focus':
        return <Rocket size={14} color="#a3e635" />;
      default:
        return <CheckCircle2 size={14} color="#a3e635" />;
    }
  };

  return (
    <section className="section" id="journey">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">04 / ENGINEERING JOURNEY</div>
          <h2 className="section-title">Milestones, systems study & learning progression.</h2>
          <p className="section-description">
            A chronological view of academic foundations, architectural deep dives, and ongoing explorations in software engineering.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {timelineData.map((item, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-node" />

              <div className="timeline-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  {getTimelineIcon(item.type)}
                  <span className="timeline-date" style={{ marginBottom: 0 }}>{item.year}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">{item.subtitle}</div>
                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-highlights">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="timeline-highlight-item">
                      <span style={{ color: 'var(--accent-color)' }}>•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
