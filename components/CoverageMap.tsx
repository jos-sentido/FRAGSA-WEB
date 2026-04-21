import React from 'react';
import { MX_STATES, MX_CENTROIDS, MX_VIEWBOX } from './mexicoMapData';

const ACTIVE_STATES: string[] = [
  'MX-BCN', 'MX-SON', 'MX-CHH', 'MX-NLE', 'MX-SLP', 'MX-GUA', 'MX-QUE',
  'MX-JAL', 'MX-MIC', 'MX-MEX', 'MX-CMX', 'MX-PUE', 'MX-VER', 'MX-OAX',
];

const ACTIVE_SET = new Set(ACTIVE_STATES);

const CoverageMap: React.FC = () => {
  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${MX_VIEWBOX.w} ${MX_VIEWBOX.h}`}
        className="w-full h-auto"
        role="img"
        aria-label="Mapa de cobertura FRAGSA en México"
      >
        <g>
          {MX_STATES.map((s) => (
            <path
              key={s.id}
              d={s.d}
              fill={ACTIVE_SET.has(s.id) ? '#E8ECF1' : '#F3F4F6'}
              stroke="#D9DCE1"
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
          ))}
        </g>

        {ACTIVE_STATES.map((id) => {
          const c = MX_CENTROIDS[id];
          if (!c) return null;
          return (
            <g key={id}>
              <circle cx={c.x} cy={c.y} r={14} fill="#4E7BB0" fillOpacity={0.15} />
              <circle cx={c.x} cy={c.y} r={8} fill="#4E7BB0" fillOpacity={0.35} />
              <circle cx={c.x} cy={c.y} r={4} fill="#1B2B4A" />
            </g>
          );
        })}
      </svg>

      <p className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel mt-4">
        *** Estados de la república mexicana donde hemos trabajado.
      </p>
    </div>
  );
};

export default CoverageMap;
