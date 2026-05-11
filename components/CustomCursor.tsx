import React, { useEffect, useRef, useState } from 'react';

/**
 * Minimal cursor: small dark dot + outer ring that grows on hover over
 * interactive elements. Hidden on touch devices and when prefers-reduced-motion.
 */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduceMotion) return;
    setEnabled(true);

    let rafId = 0;
    let tx = 0, ty = 0;          // dot target
    let rx = 0, ry = 0;          // ring target (lags slightly)

    const update = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!rafId) loop();
    };

    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
      }
      // Smooth follow for ring
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      }
      const dist = Math.hypot(tx - rx, ty - ry);
      if (dist > 0.3) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = 0;
      }
    };

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return setHovering(false);
      const interactive = el.closest('a, button, [role="button"], [data-cursor="hover"]');
      setHovering(!!interactive);
    };

    window.addEventListener('mousemove', update, { passive: true });
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', update);
      window.removeEventListener('mouseover', checkHover);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#1B2B4A',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid #1B2B4A',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
          transition: 'width 200ms ease, height 200ms ease, border-color 200ms ease, opacity 200ms ease',
          willChange: 'transform',
          ...(hovering
            ? { width: 56, height: 56, marginLeft: -12, marginTop: -12, opacity: 0.7 }
            : { opacity: 1 }),
        }}
      />
    </>
  );
};

export default CustomCursor;
