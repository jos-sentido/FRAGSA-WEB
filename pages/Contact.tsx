import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Check } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';
import CoverageMap from '../components/CoverageMap';
import { CONTACT, SIBLING_SITES } from '../constants';

const PROJECT_TYPES = ['Industrial', 'Comercial', 'Residencial', 'Consultoría', 'Otro'];

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', type: 'Industrial', message: '', privacy: false,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value;
    setForm({ ...form, [target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('contact submit →', form);
    setSent(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-fragsa-paper overflow-hidden">
        <img src="/brand/glifo-fragsa-navy.png" alt="" aria-hidden="true"
             className="absolute right-0 top-10 w-72 md:w-[28rem] opacity-[0.05]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal><Eyebrow>Contacto</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-[22ch] text-fragsa-ink mt-8">
              Hablemos de tu próximo proyecto.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-lg text-fragsa-graphite leading-relaxed max-w-[55ch] mt-8">
              Presupuestos, dudas técnicas y colaboraciones institucionales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DOS COLUMNAS */}
      <section className="py-24 md:py-32 bg-fragsa-mist border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Datos directos */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-5">
                <Eyebrow>Datos directos</Eyebrow>
                <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4 p-6 bg-fragsa-paper border border-fragsa-line hover:border-fragsa-navy transition-colors">
                  <Mail size={22} strokeWidth={1.5} className="text-fragsa-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">Email</div>
                    <div className="text-sm md:text-base text-fragsa-ink font-semibold mt-1 break-all group-hover:text-fragsa-navy">
                      {CONTACT.email}
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-6 bg-fragsa-paper border border-fragsa-line">
                  <MapPin size={22} strokeWidth={1.5} className="text-fragsa-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">Oficina</div>
                    <div className="text-sm md:text-base text-fragsa-ink mt-1">{CONTACT.city}, {CONTACT.country}</div>
                    <div className="text-xs text-fragsa-steel mt-1">Operación nacional en 14+ estados.</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="flex flex-col gap-4">
                <Eyebrow>Sitios del grupo</Eyebrow>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SIBLING_SITES.map(s => (
                    <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                       className="group flex items-center justify-between gap-3 p-4 bg-fragsa-paper border border-fragsa-line hover:border-fragsa-navy transition-colors">
                      <div>
                        <div className="font-display font-semibold uppercase text-sm tracking-[0.08em] text-fragsa-navy">{s.name}</div>
                        <div className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel mt-1">{s.descriptor}</div>
                      </div>
                      <ExternalLink size={16} strokeWidth={1.5} className="text-fragsa-steel group-hover:text-fragsa-navy transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Formulario */}
          <Reveal className="lg:col-span-7" delay={200}>
            <div className="bg-fragsa-paper border border-fragsa-line p-8 md:p-12">
              <Eyebrow>Formulario</Eyebrow>
              <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-2xl md:text-3xl text-fragsa-ink mt-6 mb-10">
                Envíanos los detalles de tu proyecto.
              </h2>

              {sent ? (
                <div className="flex flex-col items-start gap-4 py-10">
                  <div className="w-14 h-14 rounded-full bg-fragsa-blue/10 flex items-center justify-center text-fragsa-blue">
                    <Check size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-extrabold uppercase text-xl text-fragsa-navy">Mensaje recibido.</h3>
                  <p className="text-sm text-fragsa-graphite max-w-[45ch]">
                    Gracias por escribirnos, {form.name || 'un colaborador'} te contactará en breve desde {CONTACT.email}.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name:'', company:'', email:'', phone:'', type:'Industrial', message:'', privacy:false }); }}
                          className="mt-4 text-[11px] uppercase tracking-widest-xl font-semibold text-fragsa-navy hover:text-fragsa-blue">
                    Enviar otro mensaje →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Nombre *" name="name" value={form.name} onChange={handleChange} required />
                  <Field label="Empresa" name="company" value={form.company} onChange={handleChange} />
                  <Field label="Correo electrónico *" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">Tipo de proyecto</label>
                    <select name="type" value={form.type} onChange={handleChange}
                            className="border-b border-fragsa-line py-3 text-base text-fragsa-ink bg-transparent focus:border-fragsa-navy focus:outline-none">
                      {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">Mensaje *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} required
                              className="border-b border-fragsa-line py-3 text-base text-fragsa-ink bg-transparent focus:border-fragsa-navy focus:outline-none resize-none" />
                  </div>
                  <label className="md:col-span-2 flex items-start gap-3 text-sm text-fragsa-graphite cursor-pointer select-none">
                    <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} required
                           className="mt-1 accent-fragsa-navy" />
                    <span>Acepto el aviso de privacidad y el tratamiento de mis datos para fines de contacto comercial.</span>
                  </label>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit"
                            className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[11px] uppercase tracking-widest-xl font-semibold bg-fragsa-navy text-fragsa-paper hover:bg-fragsa-blue transition-colors">
                      Enviar mensaje
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAPA COMPACTO */}
      <section className="py-24 md:py-28 bg-fragsa-paper border-t border-fragsa-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>Cobertura</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-extrabold uppercase tracking-[0.02em] text-3xl md:text-4xl leading-tight mt-6 text-fragsa-ink">
                Operación nacional.
              </h2>
              <p className="text-base text-fragsa-graphite mt-4 leading-relaxed">
                Ejecutamos proyectos en 14+ estados de la república, con oficinas base en Guadalajara y logística coordinada desde el grupo.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={200}>
            <CoverageMap />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
const Field: React.FC<FieldProps> = ({ label, name, type = 'text', value, onChange, required }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-widest-xl text-fragsa-steel">{label}</label>
    <input
      name={name} type={type} value={value} onChange={onChange} required={required}
      className="border-b border-fragsa-line py-3 text-base text-fragsa-ink bg-transparent focus:border-fragsa-navy focus:outline-none"
    />
  </div>
);

export default Contact;
