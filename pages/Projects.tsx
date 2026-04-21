import React, { useState, useMemo } from 'react';
import Eyebrow from '../components/Eyebrow';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { PROJECTS, STRATEGIC_COLLABORATIONS } from '../constants';
import { ProjectCategory } from '../types';

type Filter = 'Todos' | ProjectCategory;
const FILTERS: Filter[] = ['Todos', 'Industrial', 'Comercial', 'Residencial'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('Todos');

  const filtered = useMemo(() => {
    if (filter === 'Todos') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-fragsa-paper overflow-hidden">
        <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true"
             className="absolute right-0 top-10 w-72 md:w-[28rem] opacity-[0.05]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal><Eyebrow>Portafolio</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-[22ch] text-fragsa-ink mt-8">
              Obras que sostienen cadenas de valor completas.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-lg text-fragsa-graphite leading-relaxed max-w-[55ch] mt-8">
              Más de <span className="font-display font-semibold text-fragsa-navy tabular-nums">$1,600 millones MXN</span> en proyectos industriales ejecutados y en ejecución.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTROS */}
      <section className="py-8 md:py-10 border-y border-fragsa-line sticky top-[72px] z-30 bg-fragsa-paper/95 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative text-[11px] uppercase tracking-widest-xl font-semibold py-2 transition-colors ${
                filter === f ? 'text-fragsa-navy' : 'text-fragsa-steel hover:text-fragsa-navy'
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-fragsa-blue fade-in"></span>
              )}
            </button>
          ))}
          <span className="ml-auto text-[11px] uppercase tracking-widest-xl text-fragsa-steel">
            {filtered.length} proyectos
          </span>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 md:py-24 bg-fragsa-mist">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLABORACIONES ESTRATÉGICAS */}
      <section className="py-24 md:py-32 bg-fragsa-paper border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <Eyebrow>Colaboraciones estratégicas</Eyebrow>
            <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-fragsa-ink mt-6 max-w-[22ch]">
              Partners con los que crecemos a nivel nacional.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {STRATEGIC_COLLABORATIONS.map((c, i) => (
              <Reveal key={c.description} delay={i * 100}>
                <div className="border-t border-fragsa-navy pt-8 flex flex-col gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-extrabold text-6xl md:text-7xl text-fragsa-navy tabular-nums leading-none">{c.figure}</span>
                    <span className="text-[11px] uppercase tracking-widest-xl text-fragsa-steel">{c.label}</span>
                  </div>
                  <p className="text-base text-fragsa-graphite leading-relaxed">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fragsa-asphalt text-fragsa-paper py-24 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Reveal><Eyebrow light>Siguiente proyecto</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-5xl leading-[1.05] max-w-[22ch] mt-6">
                ¿Listo para sumar tu proyecto a este portafolio?
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-4 lg:text-right" delay={240}>
            <Button to="/contacto" variant="light-primary" withArrow>Contáctanos</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Projects;
