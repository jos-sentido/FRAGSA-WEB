import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  /** String like "30+", "04", "300+", "14+", "$1,600M MXN" */
  value: string;
  /** Duration in ms */
  duration?: number;
  className?: string;
}

// Parse a string into prefix + numeric + suffix.
// Returns null if no numeric portion found.
function parse(value: string): { prefix: string; num: number; suffix: string; integerOnly: boolean; padded: number } | null {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const num = parseFloat(numStr.replace(/,/g, ''));
  if (isNaN(num)) return null;
  const integerOnly = !numStr.includes('.');
  // If original has leading zeros, keep that width
  const padded = numStr.length === 2 && numStr.startsWith('0') ? 2 : 0;
  return { prefix, num, suffix, integerOnly, padded };
}

function formatNumber(n: number, integerOnly: boolean, padded: number): string {
  const rounded = integerOnly ? Math.round(n) : Math.round(n * 10) / 10;
  let str = integerOnly ? String(rounded) : rounded.toFixed(1);
  // Re-add thousands separator if number >= 1000
  if (rounded >= 1000) {
    const [intPart, decPart] = str.split('.');
    str = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (decPart ? '.' + decPart : '');
  }
  if (padded === 2 && str.length === 1) str = '0' + str;
  return str;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 1400, className }) => {
  const parsed = parse(value);
  const [current, setCurrent] = useState<number>(parsed ? 0 : NaN);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!parsed) return;
    if (prefersReducedMotion) {
      setCurrent(parsed.num);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setCurrent(parsed.num * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [parsed, duration, prefersReducedMotion]);

  if (!parsed) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {formatNumber(current, parsed.integerOnly, parsed.padded)}
      {parsed.suffix}
    </span>
  );
};

export default Counter;
