import React from 'react';

interface TriangleBulletProps {
  className?: string;
  /** 'single' (one chevron) or 'double' (stacked chevrons like the isotype). */
  variant?: 'single' | 'double';
}

/**
 * Bullet inspired by the FRAGSA isotype — a chevron (or stacked chevrons)
 * pointing up. Inherits color via `currentColor` so it can be tinted via
 * the parent's text color.
 */
const TriangleBullet: React.FC<TriangleBulletProps> = ({ className = '', variant = 'double' }) => {
  if (variant === 'single') {
    return (
      <svg
        viewBox="0 0 14 10"
        className={className}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M1 9 L7 2 L13 9" />
      </svg>
    );
  }
  // double chevron — mirrors the stacked isotype shape
  return (
    <svg
      viewBox="0 0 14 12"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M1 11 L7 2 L13 11" />
      <path d="M3.5 11 L7 6 L10.5 11" />
    </svg>
  );
};

export default TriangleBullet;
