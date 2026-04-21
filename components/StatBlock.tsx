import React from 'react';

interface StatBlockProps {
  figure: string;
  label: string;
  light?: boolean;
  description?: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ figure, label, light = false, description }) => {
  const figureColor = light ? 'text-fragsa-paper' : 'text-fragsa-navy';
  const labelColor = light ? 'text-fragsa-paper/70' : 'text-fragsa-steel';
  const descColor = light ? 'text-fragsa-paper/80' : 'text-fragsa-graphite';
  return (
    <div>
      <div className={`font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tabular-nums ${figureColor}`}>
        {figure}
      </div>
      <div className={`text-[11px] uppercase tracking-widest-xl font-medium mt-3 ${labelColor}`}>
        {label}
      </div>
      {description && (
        <p className={`text-sm mt-3 leading-relaxed max-w-[22ch] ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default StatBlock;
