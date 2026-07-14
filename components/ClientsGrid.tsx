import React from 'react';
import { Client } from '../types';

interface ClientsGridProps {
  clients: Client[];
}

// Pequeñas marcas de registro (crop marks) tipo plano de obra: una "+"
// en color tenue dibujada en SVG en cada esquina del grid y en las
// intersecciones internas.
const RegistrationMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 12 12"
    className={`absolute pointer-events-none text-fragsa-navy/35 ${className}`}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
  >
    <line x1="6" y1="0" x2="6" y2="12" />
    <line x1="0" y1="6" x2="12" y2="6" />
  </svg>
);

// Esquina tipo "L" para los cuatro vértices del grid completo.
const CornerBracket: React.FC<{ corner: 'tl' | 'tr' | 'bl' | 'br' }> = ({ corner }) => {
  const map: Record<typeof corner, string> = {
    tl: '-top-px -left-px border-t-2 border-l-2',
    tr: '-top-px -right-px border-t-2 border-r-2',
    bl: '-bottom-px -left-px border-b-2 border-l-2',
    br: '-bottom-px -right-px border-b-2 border-r-2',
  };
  return (
    <span
      aria-hidden="true"
      className={`absolute w-4 h-4 border-fragsa-navy ${map[corner]}`}
    />
  );
};

const ClientsGrid: React.FC<ClientsGridProps> = ({ clients }) => {
  return (
    <div className="relative">
      {/* Marcos de esquina del plano completo */}
      <CornerBracket corner="tl" />
      <CornerBracket corner="tr" />
      <CornerBracket corner="bl" />
      <CornerBracket corner="br" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-fragsa-line">
        {clients.map((c, i) => {
          // Cell positioning helpers for border control
          const row4 = Math.floor(i / 4);
          const col4 = i % 4;
          const row3 = Math.floor(i / 3);
          const col3 = i % 3;
          const col2 = i % 2;

          const borderClasses = [
            // Right borders per breakpoint
            col4 !== 3 ? 'lg:border-r' : '',
            col3 !== 2 ? 'md:border-r lg:border-r-0' : '',
            col2 !== 1 ? 'border-r' : '',
            // Top borders (skip first row)
            i >= 2 ? 'border-t' : '',
            row3 > 0 ? 'md:border-t' : 'md:border-t-0',
            row4 > 0 ? 'lg:border-t' : 'lg:border-t-0',
          ].join(' ');

          // Registration marks at lower-right of each cell (except last col / last row).
          // We render the same crosshair on lg:4col layout boundaries to keep the
          // "plano" feel without overlapping with the outer corners.
          return (
            <div
              key={c.name}
              className={`relative aspect-[3/2] flex items-center justify-center p-6 text-center border-fragsa-line ${borderClasses} group hover:bg-fragsa-mist transition-colors overflow-hidden`}
            >
              {/* Blueprint sub-grid: cruz tenue partiendo la celda en cuadrantes */}
              <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-[0.18]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, transparent calc(50% - 0.5px), #1B2B4A calc(50% - 0.5px), #1B2B4A calc(50% + 0.5px), transparent calc(50% + 0.5px)),\
                     linear-gradient(to bottom, transparent calc(50% - 0.5px), #1B2B4A calc(50% - 0.5px), #1B2B4A calc(50% + 0.5px), transparent calc(50% + 0.5px))',
                  backgroundSize: '100% 100%, 100% 100%',
                  backgroundRepeat: 'no-repeat',
                  maskImage:
                    'linear-gradient(to right, transparent 0, #000 18%, #000 82%, transparent 100%),\
                     linear-gradient(to bottom, transparent 0, #000 18%, #000 82%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0, #000 18%, #000 82%, transparent 100%),\
                     linear-gradient(to bottom, transparent 0, #000 18%, #000 82%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                }}
              />

              {/* Cell ID en esquina superior-izquierda — coordenada estilo plano */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-2 font-display text-[9px] uppercase tracking-widest text-fragsa-navy/35 tabular-nums"
              >
                {String.fromCharCode(65 + (i % 4))}-{Math.floor(i / 4) + 1}
              </span>

              {/* Crosshair en la esquina inferior-derecha (intersección de líneas) */}
              <RegistrationMark className="bottom-1 right-1 w-2.5 h-2.5" />

              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  className="relative max-w-[72%] object-contain"
                  style={{
                    maxHeight: `${c.logoMaxH ?? 64}px`,
                    filter: 'grayscale(1) contrast(1.1)',
                    mixBlendMode: 'multiply',
                    opacity: 0.75,
                    transition: 'filter 0.35s ease, opacity 0.35s ease',
                  }}
                  onMouseEnter={e => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.filter = 'grayscale(0) contrast(1)';
                    img.style.opacity = '1';
                  }}
                  onMouseLeave={e => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.filter = 'grayscale(1) contrast(1.1)';
                    img.style.opacity = '0.75';
                  }}
                />
              ) : (
                <span className="relative font-display font-semibold text-xs md:text-sm uppercase tracking-widest-xl text-fragsa-graphite group-hover:text-fragsa-navy transition-colors">
                  {c.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsGrid;
