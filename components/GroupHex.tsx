import React from 'react';
import { GroupCompany } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface GroupHexProps {
  company: GroupCompany;
}

const GroupHex: React.FC<GroupHexProps> = ({ company }) => {
  const content = (
    <div className="relative bg-fragsa-paper border border-fragsa-line hover:border-fragsa-navy transition-all duration-500 p-8 md:p-10 flex flex-col gap-4 h-full group">
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">
          {company.descriptor}
        </span>
        {company.url && (
          <ArrowUpRight size={18} strokeWidth={1.5} className="text-fragsa-steel group-hover:text-fragsa-navy transition-colors" />
        )}
      </div>
      <h3 className="font-display font-extrabold uppercase tracking-[0.04em] text-2xl md:text-3xl text-fragsa-navy">
        {company.name}
      </h3>
      <p className="text-sm text-fragsa-graphite leading-relaxed">
        {company.description}
      </p>
      <div className="mt-auto pt-4">
        <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true" className="w-10 h-10 opacity-15" />
      </div>
    </div>
  );

  if (company.url) {
    return (
      <a href={company.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }
  return content;
};

export default GroupHex;
