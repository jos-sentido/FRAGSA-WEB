import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  /** If true, also scale from 0.96 to 1 on enter. */
  scale?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', as: Tag = 'div', scale = false }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      className={`reveal ${visible ? 'is-visible' : ''} ${scale ? 'reveal-scale' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Reveal;
