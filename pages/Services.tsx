import React from 'react';
import Eyebrow from '../components/Eyebrow';
import SectionHeader from '../components/SectionHeader';
import ServiceBlock from '../components/ServiceBlock';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { SERVICES, MACHINERY } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-fragsa-paper overflow-hidden">
        <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true"
             loading="lazy" decoding="async"
             className="absolute right-0 top-10 w-72 md:w-[28rem] opacity-[0.05]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal><Eyebrow>Servicios</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-[22ch] text-fragsa-ink mt-8">
              Soluciones integrales en construcción industrial.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 bg-fragsa-mist border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-10 lg:col-start-2">
            <p className="text-lg md:text-xl text-fragsa-graphite leading-relaxed">
              Ofrecemos soluciones integrales en construcción industrial, respaldadas por una ejecución técnica de alta precisión. A través de nuestra sinergia como grupo, garantizamos eficiencia operativa y altos estándares de calidad en cada fase del proyecto.
            </p>
            <p className="text-lg md:text-xl text-fragsa-graphite leading-relaxed mt-6">
              Nos distinguimos por un enfoque innovador que integra tecnologías de vanguardia para resolver los desafíos estructurales y logísticos del sector. Desde la conceptualización hasta la entrega final, nuestra prioridad es la excelencia en el detalle y la plena satisfacción de nuestros clientes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 SERVICIOS EN DETALLE */}
      <section className="py-24 md:py-32 bg-fragsa-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {SERVICES.map((svc) => (
            <Reveal key={svc.id}>
              <ServiceBlock service={svc} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAQUINARIA */}
      <section className="py-24 md:py-32 bg-fragsa-mist border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="04 · Capacidades"
              title="Flota y equipo técnico propios."
              subtitle="Más de 80 unidades entre maquinaria pesada, transporte y equipo de generación. Operamos con recursos propios para garantizar tiempos de ejecución y control de calidad directo en sitio."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {MACHINERY.map((m, i) => {
              const Icon = m.icon!;
              return (
                <Reveal key={m.title} delay={i * 80}>
                  <div className="bg-fragsa-paper border border-fragsa-line p-8 hover:border-fragsa-navy transition-colors h-full flex flex-col gap-4">
                    <Icon size={28} strokeWidth={1.5} className="text-fragsa-blue" />
                    <h3 className="font-display font-extrabold uppercase tracking-[0.02em] text-lg text-fragsa-navy">
                      {m.title}
                    </h3>
                    <p className="text-sm text-fragsa-graphite leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="text-[11px] uppercase tracking-widest-xl text-fragsa-steel mt-10">
            Relación completa de maquinaria disponible bajo solicitud.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-fragsa-asphalt text-fragsa-paper py-24 md:py-28 overflow-hidden">
        <img src="/brand/glifo-fragsa-white.png" alt="" aria-hidden="true"
             loading="lazy" decoding="async"
             className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 w-48 md:w-72 opacity-[0.05]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <div className="lg:col-span-8">
            <Reveal><Eyebrow light>Cotizar</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-5xl leading-[1.05] max-w-[22ch] mt-6">
                ¿Listo para integrar tu proyecto con un solo responsable?
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-4 lg:text-right" delay={240}>
            <Button to="/contacto" variant="light-primary" withArrow>Cotizar un proyecto</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
