import React, { useEffect, useState } from 'react';
import { X, FileText, Download, Mail, Linkedin, Check, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="modal-card" style={{ maxWidth: 640 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="monogram-badge" style={{ width: 34, height: 34 }}>
              <FileText size={18} />
            </div>
            <div>
              <h2 id="resume-modal-title" style={{ fontSize: '1.25rem' }}>
                Curriculum Vitae & Qualifications
              </h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {personalInfo.name} • Class of {personalInfo.education.graduationYear}
              </span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Academic Snapshot Card */}
          <div style={{ background: 'var(--card-bg-solid)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <GraduationCap size={18} color="#a3e635" />
              <h3 style={{ fontSize: '1.05rem' }}>{personalInfo.education.institution}</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              {personalInfo.education.degree} • {personalInfo.education.campus}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--accent-color)' }}>CGPA: {personalInfo.education.cgpa}</span>
              <span style={{ color: 'var(--text-muted)' }}>Graduation: {personalInfo.education.graduationYear}</span>
              <span style={{ color: 'var(--text-muted)' }}>Status: Active Full-time Undergrad</span>
            </div>
          </div>

          {/* Availability Notice */}
          <div style={{ background: 'rgba(163, 230, 53, 0.05)', border: '1px solid var(--accent-border)', borderRadius: '8px', padding: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem' }}>
              <Award size={16} />
              <span>Resume Availability Status</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {personalInfo.resume.isAvailable
                ? "The official PDF resume is available for immediate download below."
                : personalInfo.resume.note}
            </p>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="modal-section-title">Direct Inquiries</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button 
                className={`btn btn-secondary btn-sm ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
                style={{ flex: 1, minWidth: '180px' }}
              >
                {copied ? <Check size={14} color="#a3e635" /> : <Mail size={14} />}
                <span>{copied ? 'Email Copied!' : 'Copy Contact Email'}</span>
              </button>

              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <Linkedin size={14} />
                <span>Message on LinkedIn</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {personalInfo.resume.isAvailable && (
            <a 
              href={personalInfo.resume.filePath} 
              download 
              className="btn btn-primary btn-sm"
            >
              <Download size={14} />
              <span>Download PDF Resume</span>
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
