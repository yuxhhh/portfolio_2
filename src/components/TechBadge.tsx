import React from 'react';

interface TechBadgeProps {
  label: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  return (
    <span className="tech-tag">
      {label}
    </span>
  );
};
