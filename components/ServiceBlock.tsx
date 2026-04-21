import React from 'react';
import { ServiceItem } from '../types';

interface ServiceBlockProps {
  service: ServiceItem;
  compact?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, compact = false }) => {
  const Icon = service.icon;
  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-fragsa-line last:border-b">
      <div className="md:col-span-3 flex items-start gap-4">
        <span className="font-display font-extrabold text-5xl md:text-6xl text-fragsa-navy/15 tabular-nums leading-none">
          {service.number}
        </span>
        <Icon size={24} strokeWidth={1.5} className="text-fragsa-blue mt-3 hidden md:block" />
      </div>
      <div className="md:col-span-4">
        <h3 className="font-display font-extrabold uppercase tracking-[0.02em] text-2xl md:text-3xl text-fragsa-ink leading-tight">
          {service.title}
        </h3>
        {!compact && (
          <p className="text-base text-fragsa-graphite leading-relaxed mt-4 max-w-[36ch]">
            {service.summary}
          </p>
        )}
      </div>
      <ul className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 self-center">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-fragsa-graphite">
            <span className="w-4 h-px bg-fragsa-blue mt-2.5 flex-shrink-0" aria-hidden="true"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBlock;
