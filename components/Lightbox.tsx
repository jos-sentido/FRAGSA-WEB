import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  title: string;
  category?: string;
  startIndex?: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, title, category, startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const total = images.length;

  const go = useCallback(
    (dir: number) => setIndex(i => (i + dir + total) % total),
    [total]
  );

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose]);

  // Portal into the React root (#root) rather than <body>: this escapes any
  // transformed ancestor (e.g. the <Reveal> wrapper, which would otherwise
  // trap `position: fixed`) while staying inside React's event-delegation
  // root so clicks on the controls still fire.
  const portalTarget = (typeof document !== 'undefined' && document.getElementById('root')) || document.body;
  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-fragsa-ink/95 backdrop-blur-sm flex flex-col fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería · ${title}`}
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 md:px-8 py-4 text-fragsa-paper shrink-0"
        onClick={e => e.stopPropagation()}
      >
        <div className="min-w-0">
          {category && (
            <div className="text-[10px] uppercase tracking-widest-xl text-fragsa-blue font-medium">
              {category}
            </div>
          )}
          <div className="font-display font-extrabold uppercase tracking-[0.02em] text-base md:text-lg truncate">
            {title}
          </div>
        </div>
        <div className="flex items-center gap-5 pl-4">
          <span className="text-xs uppercase tracking-widest-xl text-fragsa-steel tabular-nums whitespace-nowrap">
            {index + 1} / {total}
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar galería"
            className="w-10 h-10 rounded-full border border-fragsa-paper/30 flex items-center justify-center hover:bg-fragsa-paper/10 transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Stage */}
      <div
        className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-16"
        onClick={e => e.stopPropagation()}
      >
        {total > 1 && (
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-2 md:left-5 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full border border-fragsa-paper/30 text-fragsa-paper flex items-center justify-center hover:bg-fragsa-paper/10 transition-colors"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
        )}

        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} — foto ${index + 1}`}
          className="max-h-full max-w-full object-contain fade-in select-none"
          draggable={false}
        />

        {total > 1 && (
          <button
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="absolute right-2 md:right-5 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full border border-fragsa-paper/30 text-fragsa-paper flex items-center justify-center hover:bg-fragsa-paper/10 transition-colors"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div
          className="shrink-0 px-4 md:px-8 py-4 overflow-x-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex gap-2 justify-start md:justify-center min-w-min">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`relative shrink-0 w-16 h-12 md:w-20 md:h-14 overflow-hidden transition-all ${
                  i === index ? 'ring-2 ring-fragsa-blue opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>,
    portalTarget
  );
};

export default Lightbox;
