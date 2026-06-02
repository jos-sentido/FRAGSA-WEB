import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import SectionHeader from '../components/SectionHeader';
import StatBlock from '../components/StatBlock';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import ServiceBlock from '../components/ServiceBlock';
import ClientsGrid from '../components/ClientsGrid';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { PROJECTS, SERVICES, STATS_HOME, CLIENTS } from '../constants';

const Home: React.FC = () => {
  // Un proyecto por giro (industrial · comercial · residencial), todos con galería.
  const featured = [
    PROJECTS.find(p => p.id === 4)!,   // Centro Logístico PCZ · SLP (Industrial)
    PROJECTS.find(p => p.id === 9)!,   // Strike 22 (Comercial)
    PROJECTS.find(p => p.id === 13)!,  // Casa MT (Residencial)
  ];

  // Parallax: subtle vertical translation of hero background on scroll.
  const heroBgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const y = window.scrollY;
      if (heroBgRef.current && y < window.innerHeight * 1.2) {
        heroBgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div>
      {/* HERO — split layout inspired by the FRAGSA cover */}
      <section className="relative bg-fragsa-paper overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[calc(100vh-72px)] lg:min-h-[560px] lg:max-h-[760px]">
          {/* TEXT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-16 pb-8 lg:py-0 px-6 md:px-10 lg:pl-12 xl:pl-20 lg:pr-12 order-2 lg:order-1 relative">
            <Reveal>
              <img
                src="/brand/logo-fragsa-color.png"
                alt="FRAGSA — Grupo Integral"
                className="h-12 md:h-14 lg:h-16 w-auto mb-6"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display font-extrabold uppercase tracking-[0.01em] text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] leading-[0.98] text-fragsa-ink">
                Soluciones <br />
                integrales <br />
                <span className="text-fragsa-navy">en construcción.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-sm md:text-lg text-fragsa-graphite max-w-[44ch] mt-4 lg:mt-6 leading-relaxed">
                Más de 30 años diseñando, construyendo y comercializando espacios industriales, comerciales y residenciales en México.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-8">
                <Button to="/proyectos" variant="primary" withArrow>Ver proyectos</Button>
                <Button to="/contacto" variant="secondary">Contáctanos</Button>
              </div>
            </Reveal>
            <div className="hidden lg:block absolute bottom-6 left-12 xl:left-20 text-[10px] uppercase tracking-widest-xl text-fragsa-steel">
              Est. 1989 · Guadalajara, México
            </div>
          </div>

          {/* IMAGE SIDE — layered cutout effect (buildings appear to break out of frame) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 h-[30vh] min-h-[220px] max-h-[300px] lg:h-auto lg:min-h-0 lg:max-h-none flex items-center justify-center px-4 sm:px-6 lg:px-6 xl:px-10 lg:py-10">
            {/* Frame with shadow + slight 3D tilt at lg+ */}
            <div
              className="relative w-full h-full overflow-hidden bg-fragsa-asphalt shadow-[0_24px_60px_-20px_rgba(11,17,30,0.45)] lg:[transform:perspective(1400px)_rotateY(-3deg)_rotateX(1.2deg)]"
            >
              <div ref={heroBgRef} className="absolute inset-0 will-change-transform">
                <img
                  src="/brand/hero-fragsa-1200w.webp"
                  srcSet="/brand/hero-fragsa-800w.webp 800w, /brand/hero-fragsa-1200w.webp 1200w, /brand/hero-fragsa-1600w.webp 1600w"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  {...({ fetchpriority: 'high' } as any)}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.08)' }}
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(27,43,74,0.22) 100%)' }}
                aria-hidden="true"
              />
              {/* Glifo discreto en la esquina */}
              <img
                src="/brand/glifo-fragsa-white.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="hidden lg:block absolute right-6 bottom-6 w-16 opacity-30"
              />
            </div>

            {/* Overflowing duplicate — buildings/cranes "break out" above the frame */}
            <img
              src="/brand/hero-fragsa-1200w.webp"
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
              className="pointer-events-none absolute select-none left-[5%] top-0 w-[95%] lg:left-[6%] lg:w-[88%] xl:left-[10%] xl:w-[80%]"
              style={{
                filter: 'grayscale(100%) contrast(1.15) drop-shadow(0 14px 20px rgba(11,17,30,0.28))',
                clipPath: 'inset(0 0 66% 0)',
                WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
                transform: 'translateY(-32%)',
              }}
            />
          </div>
        </div>
        {/* Línea inferior tipo "barra" del PDF */}
        <div className="h-1.5 bg-fragsa-navy" aria-hidden="true" />
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
              title="Cinco especialidades, un solo responsable."
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
              title="Obras que reflejan nuestra experiencia y calidad."
              subtitle="Proyectos industriales, comerciales y residenciales. Da clic en cada proyecto para ver su galería."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 100} scale>
                <FeaturedProjectCard project={p} />
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
          loading="lazy"
          decoding="async"
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
