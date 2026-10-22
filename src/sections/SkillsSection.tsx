import React from 'react';
import { skillGroups } from '../data/portfolioData';
import { 
  Code, Globe, Database, Network, BrainCircuit, ShieldCheck, 
  CheckCircle2, Layers
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code size={18} className="skill-card-category-icon" />;
      case 'Web Development':
        return <Globe size={18} className="skill-card-category-icon" />;
      case 'Databases & Storage':
        return <Database size={18} className="skill-card-category-icon" />;
      case 'Blockchain & Web3':
        return <Network size={18} className="skill-card-category-icon" />;
      case 'AI & Data Analysis':
        return <BrainCircuit size={18} className="skill-card-category-icon" />;
      case 'DevSecOps & Security Tools':
        return <ShieldCheck size={18} className="skill-card-category-icon" />;
      default:
        return <Layers size={18} className="skill-card-category-icon" />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">03 / TECHNICAL CAPABILITIES</div>
          <h2 className="section-title">Tools, languages & engineering practices.</h2>
          <p className="section-description">
            Organized by functional domains with practical project context. No inflated percentage bars or decorative proficiency meters — only technologies actively studied, tested, and implemented.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-card-header">
                <h3 className="skill-card-category">
                  {getCategoryIcon(group.category)}
                  <span>{group.category}</span>
                </h3>
                <p className="skill-card-tagline">{group.tagline}</p>
              </div>

              <div className="skill-items-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <CheckCircle2 size={13} color="#a3e635" />
                    </div>
                    {skill.verifiedContext && (
                      <span className="skill-context">{skill.verifiedContext}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
