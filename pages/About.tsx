import React from 'react';
import Eyebrow from '../components/Eyebrow';
import SectionHeader from '../components/SectionHeader';
import GroupHex from '../components/GroupHex';
import CoverageMap from '../components/CoverageMap';
import Reveal from '../components/Reveal';
import { GROUP_COMPANIES, COVERAGE_STATES } from '../constants';

const About: React.FC = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-fragsa-paper overflow-hidden">
        <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true"
             loading="lazy" decoding="async"
             className="absolute right-0 top-10 w-72 md:w-[28rem] opacity-[0.05]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal><Eyebrow>Nosotros</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-[22ch] text-fragsa-ink mt-8">
              Construimos la infraestructura que mueve a la industria.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-24 md:py-32 bg-fragsa-paper border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>01 · Quiénes somos</Eyebrow></Reveal>
            <Reveal delay={120}>
              <div className="mt-10 flex items-baseline gap-6">
                <span className="font-display font-extrabold text-7xl md:text-8xl text-fragsa-navy tabular-nums leading-none">1989</span>
                <span className="text-[11px] uppercase tracking-widest-xl text-fragsa-steel max-w-[15ch]">Año de fundación en Guadalajara</span>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7 flex flex-col gap-6" delay={240}>
            <p className="text-lg text-fragsa-graphite leading-relaxed">
              FRAGSA Constructora se especializa en el diseño, construcción y comercialización de espacios industriales, respaldada por una trayectoria de más de 30 años en el mercado.
            </p>
            <p className="text-lg text-fragsa-graphite leading-relaxed">
              Fundada en 1989 por el <strong className="text-fragsa-ink font-semibold">Arq. Francisco J. Guarro Aceves</strong>, nuestra empresa ha evolucionado hacia un modelo de gestión integral. Actualmente, consolidamos nuestra capacidad operativa a través del Grupo, integrado por JALIE-VALI, GEMCO y VIGASA, lo que nos permite abarcar con solvencia todas las etapas del proyecto: desde la planeación, diseño, gestión y la ejecución de obras de gran escala.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="py-24 md:py-32 bg-fragsa-mist">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <Reveal>
              <div className="flex flex-col gap-6 border-t border-fragsa-navy pt-8">
                <Eyebrow>Misión</Eyebrow>
                <h3 className="font-display font-extrabold uppercase text-2xl md:text-3xl text-fragsa-navy leading-tight">
                  Desarrollar espacios que respondan a necesidades específicas.
                </h3>
                <p className="text-base text-fragsa-graphite leading-relaxed">
                  Integramos funcionalidad y eficiencia técnica. Nos enfocamos en un riguroso control de costos para entregar proyectos integrales que superen las expectativas de nuestros clientes.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex flex-col gap-6 border-t border-fragsa-navy pt-8">
                <Eyebrow>Visión</Eyebrow>
                <h3 className="font-display font-extrabold uppercase text-2xl md:text-3xl text-fragsa-navy leading-tight">
                  Ser el grupo constructor referente en el mercado nacional.
                </h3>
                <p className="text-base text-fragsa-graphite leading-relaxed">
                  Distinguirnos por la excelencia operativa en costos, tiempos y calidad, e impulsar el desarrollo de proyectos que transformen positivamente nuestro entorno.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRUPO */}
      <section className="py-24 md:py-32 bg-fragsa-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="02 · Empresas que integran el Grupo"
              title="Cuatro empresas, una sinergia operativa."
              subtitle="Nuestro modelo de grupo nos permite abarcar con solvencia todas las etapas del proyecto, de la ingeniería al montaje final."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {GROUP_COMPANIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <GroupHex company={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="py-24 md:py-32 bg-fragsa-mist border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Reveal><Eyebrow>03 · Cobertura</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-4xl text-fragsa-ink leading-tight">
                Presencia nacional.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex items-baseline gap-4">
                <span className="font-display font-extrabold text-6xl md:text-7xl text-fragsa-navy tabular-nums">14+</span>
                <span className="text-[11px] uppercase tracking-widest-xl text-fragsa-steel">Estados con obra activa</span>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-sm text-fragsa-graphite">
                {COVERAGE_STATES.map(s => (
                  <li key={s.code} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fragsa-blue"></span>
                    {s.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-8" delay={200}>
            <CoverageMap />
          </Reveal>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="py-24 md:py-32 bg-fragsa-asphalt text-fragsa-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <Eyebrow light>Fundador</Eyebrow>
            <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-4xl lg:text-5xl leading-[1.1] mt-6">
              Arq. Francisco J. Guarro Aceves
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={150}>
            <p className="text-lg text-fragsa-paper/80 leading-relaxed">
              Desde 1989 ha dirigido la evolución de FRAGSA de un despacho de diseño hacia un grupo constructor con capacidad integral. Su visión sostiene el modelo de gestión que permite al grupo ejecutar proyectos de gran escala a lo largo del país.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
