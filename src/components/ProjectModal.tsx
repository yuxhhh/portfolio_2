import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Lightbulb, ArrowUpRight } from 'lucide-react';
import { ProjectPreviews } from './ProjectPreviews';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Sticky Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <span className="project-category-badge">{project.category}</span>
              <span className="project-status-badge">
                <span className={`project-status-dot status-${project.status.toLowerCase().replace(/\s+/g, '-')}`} />
                <span>{project.status}</span>
              </span>
            </div>
            <h2 id="modal-title" style={{ fontSize: '1.45rem', letterSpacing: '-0.02em' }}>
              {project.title}
            </h2>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Custom Visual Preview */}
          <div style={{ maxHeight: '280px', overflow: 'hidden', borderRadius: '8px' }}>
            <ProjectPreviews type={project.previewType} />
          </div>

          {/* Headline & Description */}
          <div>
            <div className="modal-section-title">Overview & Problem Statement</div>
            <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.65rem' }}>
              {project.headline}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div>
              <div className="modal-section-title">Technical Architecture & Dataflow</div>
              <div className="modal-architecture-box">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Key Implemented Features */}
          <div>
            <div className="modal-section-title">Key Implemented Features</div>
            <div className="modal-features-list">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="modal-feature-item">
                  <CheckCircle2 size={15} className="modal-feature-bullet" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Engineering Contribution */}
          <div>
            <div className="modal-section-title">My Role & Engineering Contribution</div>
            <p style={{ color: 'var(--text-primary)', background: 'var(--card-bg-solid)', padding: '0.85rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-color)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {project.myContribution}
            </p>
          </div>

          {/* Challenges & Lessons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div>
              <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <AlertCircle size={14} color="#fbbf24" />
                <span>Technical Challenges</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.challenges}
              </p>
            </div>
            <div>
              <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Lightbulb size={14} color="#a3e635" />
                <span>Lessons Learned</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.lessonsLearned}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="modal-section-title">Technology Stack</div>
            <div className="tech-tags-list">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="modal-footer">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <Github size={15} />
              <span>Inspect Code Repository</span>
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.liveDemoUrl && (
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={15} />
              <span>Launch Demo</span>
            </a>
          )}
          <button className="btn btn-ghost btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
