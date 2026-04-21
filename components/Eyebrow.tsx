import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, light = false, className = '' }) => {
  const color = light ? 'text-fragsa-paper/70' : 'text-fragsa-steel';
  const rule = light ? 'bg-fragsa-paper/40' : 'bg-fragsa-steel';
  return (
    <p className={`flex items-center gap-4 text-[11px] uppercase tracking-widest-xl font-medium ${color} ${className}`}>
      <span className={`block w-10 h-px ${rule}`} aria-hidden="true"></span>
      {children}
    </p>
  );
};

export default Eyebrow;
