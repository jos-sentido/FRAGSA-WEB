import React from 'react';
import { Client } from '../types';

interface ClientsGridProps {
  clients: Client[];
}

const ClientsGrid: React.FC<ClientsGridProps> = ({ clients }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-fragsa-line">
      {clients.map((c, i) => (
        <div
          key={c.name}
          className={`relative aspect-[3/2] flex items-center justify-center p-6 text-center border-fragsa-line ${
            i % 4 !== 3 ? 'lg:border-r' : ''
          } ${i % 3 !== 2 ? 'md:border-r lg:border-r-0' : ''} ${i % 2 !== 1 ? 'border-r' : ''} ${
            i >= 2 ? 'md:border-t-0' : ''
          } border-t group hover:bg-fragsa-mist transition-colors`}
        >
          <span className="font-display font-semibold text-xs md:text-sm uppercase tracking-widest-xl text-fragsa-graphite group-hover:text-fragsa-navy transition-colors">
            {c.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClientsGrid;
