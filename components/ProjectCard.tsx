import React from 'react';
import { Project } from '../types';
import { formatM2, formatMXN } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const inProgress = ['En ejecución', 'En proceso'].includes(project.year);
  const placeholderBg = 'linear-gradient(135deg, #E5E7EB 0%, #D9DCE1 50%, #C3C6CB 100%)';

  return (
    <article className="group flex flex-col bg-fragsa-paper border border-fragsa-line hover:border-fragsa-navy transition-all duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3] bg-fragsa-mist">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover photo-bw transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: placeholderBg }}>
            <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true" className="w-20 h-20 opacity-10" />
          </div>
        )}
        {inProgress && (
          <span className="absolute top-4 left-4 bg-fragsa-blue text-fragsa-paper text-[10px] uppercase tracking-widest-xl font-semibold px-3 py-1.5">
            {project.year}
          </span>
        )}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-fragsa-paper/60 bg-fragsa-ink/20 backdrop-blur-sm flex items-center justify-center text-fragsa-paper opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </div>
      </div>

      <div className={`flex flex-col gap-3 p-6 md:p-8 ${featured ? 'md:gap-4' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel font-medium">
            {project.category}
          </span>
          {!inProgress && (
            <>
              <span className="text-fragsa-line">·</span>
              <span className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel font-medium">
                {project.year}
              </span>
            </>
          )}
        </div>

        <h3 className={`font-display font-extrabold uppercase tracking-[0.02em] text-fragsa-navy leading-tight ${featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
          {project.title}
        </h3>

        <p className="text-sm text-fragsa-graphite leading-relaxed">
          {project.location}
        </p>

        <div className="flex items-end justify-between pt-4 mt-2 border-t border-fragsa-line">
          <div>
            <div className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">Dimensión</div>
            <div className="font-display font-semibold text-base text-fragsa-ink tabular-nums mt-1">
              {formatM2(project.sizeM2)}
            </div>
          </div>
          {project.amountMXN !== null && (
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">Inversión</div>
              <div className="font-display font-semibold text-base text-fragsa-navy tabular-nums mt-1">
                {formatMXN(project.amountMXN)}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
