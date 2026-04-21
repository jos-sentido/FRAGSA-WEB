import React from 'react';
import Eyebrow from './Eyebrow';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'left',
  className = '',
}) => {
  const titleColor = light ? 'text-fragsa-paper' : 'text-fragsa-ink';
  const subColor = light ? 'text-fragsa-paper/80' : 'text-fragsa-graphite';
  const alignment = align === 'center' ? 'text-center items-center' : '';
  const eyebrowAlign = align === 'center' ? 'justify-center' : '';
  return (
    <div className={`flex flex-col ${alignment} gap-6 ${className}`}>
      <Eyebrow light={light} className={eyebrowAlign}>{eyebrow}</Eyebrow>
      <h2 className={`font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-4xl lg:text-5xl leading-[1.1] max-w-[22ch] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-[58ch] ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
