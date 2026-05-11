import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Fade + slight slide-up at page change.
 * 280ms out → 380ms in. Skips animation if user prefers reduced motion.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [displayed, setDisplayed] = useState(children);
  const [stage, setStage] = useState<'in' | 'out'>('in');
  const lastPath = useRef(pathname);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (pathname === lastPath.current) {
      setDisplayed(children);
      return;
    }
    if (prefersReducedMotion) {
      lastPath.current = pathname;
      setDisplayed(children);
      return;
    }
    setStage('out');
    const timeout = setTimeout(() => {
      lastPath.current = pathname;
      setDisplayed(children);
      setStage('in');
    }, 280);
    return () => clearTimeout(timeout);
  }, [pathname, children, prefersReducedMotion]);

  return (
    <div
      style={{
        opacity: stage === 'in' ? 1 : 0,
        transform: stage === 'in' ? 'translateY(0)' : 'translateY(12px)',
        transition: prefersReducedMotion
          ? 'none'
          : stage === 'in'
          ? 'opacity 380ms cubic-bezier(0.16, 1, 0.3, 1), transform 380ms cubic-bezier(0.16, 1, 0.3, 1)'
          : 'opacity 240ms ease-out, transform 240ms ease-out',
      }}
    >
      {displayed}
    </div>
  );
};

export default PageTransition;
