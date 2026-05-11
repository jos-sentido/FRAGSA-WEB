import React from 'react';
import { ServiceItem } from '../types';
import TriangleBullet from './TriangleBullet';

interface ServiceBlockProps {
  service: ServiceItem;
  compact?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, compact = false }) => {
  const Icon = service.icon;
  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-fragsa-line last:border-b">
      <div className="md:col-span-3">
        <span className="font-display font-extrabold text-5xl md:text-6xl text-fragsa-navy/15 tabular-nums leading-none">
          {service.number}
        </span>
      </div>
      <div className="md:col-span-4">
        <div className="flex items-center gap-3 text-fragsa-blue">
          <Icon size={22} strokeWidth={1.5} className="flex-shrink-0" />
          <h3 className="font-display font-extrabold uppercase tracking-[0.02em] text-2xl md:text-3xl text-fragsa-ink leading-tight">
            {service.title}
          </h3>
        </div>
        {!compact && (
          <p className="text-base text-fragsa-graphite leading-relaxed mt-4 max-w-[36ch]">
            {service.summary}
          </p>
        )}
      </div>
      <ul className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 self-center">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-fragsa-graphite">
            <TriangleBullet className="w-3.5 h-3 mt-1 text-fragsa-blue flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBlock;
