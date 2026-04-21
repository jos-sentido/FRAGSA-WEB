import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Rutas que arrancan con hero oscuro (logo/links en blanco cuando aún no hay scroll)
  const onDarkHero = location.pathname === '/';
  const transparent = !scrolled && !isOpen;
  const lightMode = transparent && onDarkHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const containerCls = transparent
    ? 'bg-transparent border-b border-transparent py-6'
    : 'bg-fragsa-paper/95 backdrop-blur-md border-b border-fragsa-line py-3';

  const logoSrc = lightMode ? '/brand/logo-fragsa-white.png' : '/brand/logo-fragsa-color.png';

  const linkBase = 'relative text-[11px] uppercase tracking-widest-xl font-semibold transition-colors';
  const linkIdle = lightMode ? 'text-fragsa-paper/75 hover:text-fragsa-paper' : 'text-fragsa-graphite hover:text-fragsa-navy';
  const linkActive = lightMode ? 'text-fragsa-paper' : 'text-fragsa-navy';
  const underline = lightMode ? 'bg-fragsa-paper' : 'bg-fragsa-blue';

  const ctaCls = lightMode
    ? 'inline-flex items-center gap-2 border-[1.5px] border-fragsa-paper text-fragsa-paper px-5 py-3 text-[11px] uppercase tracking-widest-xl font-semibold hover:bg-fragsa-paper hover:text-fragsa-navy transition-colors'
    : 'inline-flex items-center gap-2 border-[1.5px] border-fragsa-navy text-fragsa-navy px-5 py-3 text-[11px] uppercase tracking-widest-xl font-semibold hover:bg-fragsa-navy hover:text-fragsa-paper transition-colors';

  const mobileBtnColor = lightMode ? 'text-fragsa-paper' : 'text-fragsa-navy';

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${containerCls}`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoSrc} alt="FRAGSA — Grupo Integral" className="h-10 md:h-11 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className={`${linkBase} ${location.pathname === link.path ? linkActive : linkIdle}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className={`absolute left-0 -bottom-2 h-px w-6 ${underline} fade-in`}></span>
                )}
              </RouterLink>
            ))}
            <Link to="/contacto" className={ctaCls}>Contáctanos</Link>
          </div>

          {/* Mobile button */}
          <button
            className={`md:hidden relative z-50 ${mobileBtnColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-fragsa-paper z-40 flex flex-col items-center justify-start pt-28 pb-10 px-6 space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <RouterLink
            key={link.path}
            to={link.path}
            className="font-display text-2xl font-semibold uppercase tracking-widest-xl text-fragsa-navy"
          >
            {link.label}
          </RouterLink>
        ))}
        <div className="w-12 h-px bg-fragsa-line my-6"></div>
        <Link
          to="/contacto"
          className="px-7 py-4 border-[1.5px] border-fragsa-navy text-fragsa-navy text-[11px] uppercase tracking-widest-xl font-semibold"
        >
          Contáctanos
        </Link>
      </div>
    </>
  );
};

export default Navbar;
