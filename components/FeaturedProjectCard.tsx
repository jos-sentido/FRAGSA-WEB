import React, { useState } from 'react';
import { Images } from 'lucide-react';
import { Project } from '../types';
import Lightbox from './Lightbox';

interface FeaturedProjectCardProps {
  project: Project;
}

// Tarjeta tipo póster para el home: foto + etiqueta de giro + nombre.
const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  const gallery = project.images ?? [];
  const hasGallery = gallery.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => hasGallery && setOpen(true)}
        disabled={!hasGallery}
        aria-label={hasGallery ? `Ver galería de ${project.title} (${gallery.length} ${gallery.length === 1 ? 'foto' : 'fotos'})` : project.title}
        className={`group relative block w-full overflow-hidden aspect-[3/4] bg-fragsa-asphalt text-left ${hasGallery ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover photo-bw transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-fragsa-mist">
            <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true" className="w-20 h-20 opacity-10" />
          </div>
        )}

        {/* Degradado para legibilidad del texto */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(14,17,22,0.05) 30%, rgba(14,17,22,0.35) 60%, rgba(14,17,22,0.85) 100%)' }}
        />

        {/* Etiqueta de giro */}
        <span className="absolute top-4 left-4 bg-fragsa-blue text-fragsa-paper text-[10px] uppercase tracking-widest-xl font-semibold px-3 py-1.5">
          {project.category}
        </span>

        {/* Contador de fotos */}
        {hasGallery && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-fragsa-ink/45 backdrop-blur-sm text-fragsa-paper text-[10px] uppercase tracking-widest-xl font-semibold px-2.5 py-1.5">
            <Images size={13} strokeWidth={1.75} />
            {gallery.length}
          </span>
        )}

        {/* Nombre del proyecto */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className="font-display font-extrabold uppercase tracking-[0.02em] text-fragsa-paper leading-tight text-xl md:text-2xl">
            {project.title}
          </h3>
          <p className="text-xs text-fragsa-paper/70 mt-1.5 leading-relaxed">
            {project.location}
          </p>
        </div>
      </button>

      {open && (
        <Lightbox
          images={gallery}
          title={project.title}
          category={project.category}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default FeaturedProjectCard;
