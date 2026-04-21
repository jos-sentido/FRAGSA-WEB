import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import SectionHeader from '../components/SectionHeader';
import StatBlock from '../components/StatBlock';
import ProjectCard from '../components/ProjectCard';
import ServiceBlock from '../components/ServiceBlock';
import ClientsGrid from '../components/ClientsGrid';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { PROJECTS, SERVICES, STATS_HOME, CLIENTS } from '../constants';

const Home: React.FC = () => {
  const featured = [
    PROJECTS.find(p => p.id === 1)!,
    PROJECTS.find(p => p.id === 2)!,
    PROJECTS.find(p => p.id === 4)!,
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen bg-fragsa-asphalt text-fragsa-paper overflow-hidden flex items-end pt-32 pb-20">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(27,43,74,0.65) 0%, rgba(17,20,24,0.92) 100%), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) contrast(1.1)',
            }}
          />
        </div>
        <img
          src="/brand/glifo-fragsa-white.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-10 -top-10 md:right-10 md:top-24 w-72 md:w-[28rem] opacity-[0.06]"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 w-full">
          <Reveal>
            <Eyebrow light className="mb-8">FRAGSA · Grupo Integral</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-[16ch] text-fragsa-paper">
              Soluciones integrales en construcción
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-base md:text-lg text-fragsa-paper/80 max-w-[55ch] mt-8 leading-relaxed">
              Más de 30 años diseñando, construyendo y comercializando espacios industriales, comerciales y residenciales en México.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button to="/proyectos" variant="light-primary" withArrow>Ver proyectos</Button>
              <Button to="/contacto" variant="light-secondary">Contáctanos</Button>
            </div>
          </Reveal>
        </div>

        <div className="absolute left-6 md:left-10 bottom-6 text-[10px] uppercase tracking-widest-xl text-fragsa-paper/50">
          Est. 1989 · Guadalajara, México
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-24 md:py-32 bg-fragsa-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>01 · Nosotros</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-fragsa-ink mt-6">
                Una trayectoria de +30 años construyendo la industria de México.
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6" delay={240}>
            <p className="text-base md:text-lg text-fragsa-graphite leading-relaxed">
              FRAGSA se especializa en el diseño, construcción y comercialización de espacios industriales, respaldada por una trayectoria de más de 30 años en el mercado.
            </p>
            <p className="text-base md:text-lg text-fragsa-graphite leading-relaxed">
              Fundada en 1989 por el Arq. Francisco J. Guarro Aceves, hemos evolucionado hacia un modelo de gestión integral a través del Grupo, integrado por JALIE-VALI, GEMCO y VIGASA.
            </p>
            <Link to="/nosotros" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest-xl font-semibold text-fragsa-navy hover:text-fragsa-blue transition-colors mt-4">
              Conocer al grupo <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24 bg-fragsa-mist">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {STATS_HOME.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <StatBlock figure={s.figure} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 md:py-32 bg-fragsa-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="02 · Servicios"
              title="Cinco disciplinas, un solo responsable."
              subtitle="Soluciones integrales respaldadas por la sinergia de nuestro grupo: desde ingeniería de valor hasta la operación de largo plazo."
            />
          </Reveal>
          <div className="mt-16">
            {SERVICES.map((svc) => (
              <Reveal key={svc.id}>
                <ServiceBlock service={svc} compact />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <Button to="/servicios" variant="secondary" withArrow>Ver todos los servicios</Button>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-24 md:py-32 bg-fragsa-mist">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="03 · Proyectos"
              title="Obra que habla por sí sola."
              subtitle="Centros logísticos, naves industriales y parques que sostienen cadenas de valor completas."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProjectCard project={p} featured />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <Button to="/proyectos" variant="secondary" withArrow>Portafolio completo</Button>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-24 md:py-32 bg-fragsa-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <SectionHeader eyebrow="04 · Clientes" title="Marcas que confían en FRAGSA." />
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-16">
              <ClientsGrid clients={CLIENTS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative bg-fragsa-asphalt text-fragsa-paper py-24 md:py-32 overflow-hidden">
        <img
          src="/brand/glifo-fragsa-white.png"
          alt=""
          aria-hidden="true"
          className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 w-48 md:w-72 opacity-[0.05]"
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
          <Reveal><Eyebrow light>Iniciar proyecto</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-[20ch] mt-8">
              ¿Tienes un proyecto industrial en mente?
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Button to="/contacto" variant="light-primary" withArrow>Iniciar conversación</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
