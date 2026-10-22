import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectPreviews } from '../components/ProjectPreviews';
import { TechBadge } from '../components/TechBadge';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Blockchain',
    'DevOps',
    'Cybersecurity',
    'AI / ML',
    'Full Stack'
  ];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => 
      p.category === activeCategory || (p.subCategories && p.subCategories.includes(activeCategory))
    );
  }, [activeCategory]);

  // Separate featured and secondary projects
  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  // Count items per category
  const getCategoryCount = (cat: ProjectCategory) => {
    if (cat === 'All') return projectsData.length;
    return projectsData.filter(
      (p) => p.category === cat || (p.subCategories && p.subCategories.includes(cat))
    ).length;
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">02 / PROJECT CATALOGUE</div>
          <h2 className="section-title">Systems, security architectures & web applications.</h2>
          <p className="section-description">
            A curated collection of practical projects built to explore distributed ledgers, shift-left security pipelines, and reliable web software.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project Category Filter">
          {categories.map((category) => {
            const count = getCategoryCount(category);
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Projects Showcase (Split Large Layouts) */}
        {featuredProjects.length > 0 && (
          <div className="featured-projects-list">
            {featuredProjects.map((project, index) => {
              const isReverse = index % 2 === 1;
              return (
                <div 
                  key={project.id} 
                  className={`featured-project-card ${isReverse ? 'reverse' : ''}`}
                >
                  {/* Project Info Column */}
                  <div className="project-info-col">
                    <div className="project-meta-top">
                      <span className="project-category-badge">{project.category}</span>
                      <span className="project-status-badge">
                        <span className={`project-status-dot status-${project.status.toLowerCase().replace(/\s+/g, '-')}`} />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-headline">{project.headline}</div>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="tech-tags-list">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>

                    <div className="project-card-actions">
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => onSelectProject(project)}
                      >
                        <span>Deep Dive Architecture</span>
                        <ArrowUpRight size={15} />
                      </button>

                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-ghost btn-sm"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={15} />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Column */}
                  <div className="project-preview-col" onClick={() => onSelectProject(project)} style={{ cursor: 'pointer' }}>
                    <ProjectPreviews type={project.previewType} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="secondary-projects-wrapper">
            <div className="secondary-projects-header">
              <h3 className="secondary-projects-title">Additional Applications & Prototypes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Full-stack implementations, interactive dashboards, and productivity utilities.
              </p>
            </div>

            <div className="secondary-projects-grid">
              {secondaryProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="secondary-project-card"
                  onClick={() => onSelectProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onSelectProject(project); }}
                >
                  <div>
                    <div style={{ marginBottom: '1rem', maxHeight: '160px', overflow: 'hidden', borderRadius: '6px' }}>
                      <ProjectPreviews type={project.previewType} />
                    </div>

                    <div className="project-meta-top">
                      <span className="project-category-badge">{project.category}</span>
                      <span className="project-status-badge">
                        <span className={`project-status-dot status-${project.status.toLowerCase().replace(/\s+/g, '-')}`} />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <h4 className="project-title" style={{ fontSize: '1.15rem' }}>{project.title}</h4>
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="tech-tags-list" style={{ marginBottom: '1rem' }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag" style={{ opacity: 0.6 }}>
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      <span>View Specifications</span>
                      <ArrowUpRight size={14} color="#a3e635" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
