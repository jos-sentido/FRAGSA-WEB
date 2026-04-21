import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react';
import { NAV_LINKS, SIBLING_SITES, CONTACT } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-fragsa-asphalt text-fragsa-paper pt-24 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-fragsa-graphite">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src="/brand/logo-fragsa-white.png" alt="FRAGSA" className="h-12 w-auto mb-6" />
            <p className="text-sm text-fragsa-paper/70 leading-relaxed max-w-sm">
              Soluciones integrales en construcción industrial, comercial y residencial. Más de 30 años entregando obra de gran escala en México.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest-xl font-semibold text-fragsa-paper/50 mb-6">Navegación</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm uppercase tracking-widest-xl text-fragsa-paper/80 hover:text-fragsa-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-widest-xl font-semibold text-fragsa-paper/50 mb-6">Contacto</h3>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-sm text-fragsa-paper/80 hover:text-fragsa-paper transition-colors">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 text-fragsa-blue" />
                <span className="break-all">{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-fragsa-paper/80">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 text-fragsa-blue" />
                <span>{CONTACT.city}<br />{CONTACT.country}</span>
              </div>
            </div>
          </div>

          {/* Group */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-widest-xl font-semibold text-fragsa-paper/50 mb-6">Grupo</h3>
            <ul className="space-y-3">
              {SIBLING_SITES.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 text-sm text-fragsa-paper/80 hover:text-fragsa-paper transition-colors"
                  >
                    <span>
                      <span className="font-display font-semibold uppercase tracking-[0.08em] block">{s.name}</span>
                      <span className="text-[11px] text-fragsa-paper/50 uppercase tracking-widest-xl">{s.descriptor}</span>
                    </span>
                    <ExternalLink size={14} strokeWidth={1.5} className="text-fragsa-paper/40 group-hover:text-fragsa-blue transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 text-[11px] uppercase tracking-widest-xl text-fragsa-paper/50">
          <p>© {new Date().getFullYear()} FRAGSA · Grupo Integral. Todos los derechos reservados.</p>
          <button onClick={scrollToTop} className="group flex items-center gap-3 hover:text-fragsa-paper transition-colors">
            Subir
            <span className="w-10 h-10 rounded-full border border-fragsa-paper/30 group-hover:border-fragsa-paper flex items-center justify-center">
              <ArrowUp size={14} strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
