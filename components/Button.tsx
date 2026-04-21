import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'light-primary' | 'light-secondary';

interface BaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
}
interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  target?: string;
  rel?: string;
}
interface ButtonElProps extends BaseProps {
  onClick: () => void;
  to?: never;
  href?: never;
  type?: 'button' | 'submit';
}

type Props = LinkProps | AnchorProps | ButtonElProps;

const BASE = 'inline-flex items-center justify-center gap-3 px-7 py-4 text-[11px] uppercase tracking-widest-xl font-semibold transition-all duration-300';

const VARIANTS: Record<ButtonVariant, string> = {
  'primary':         `${BASE} bg-fragsa-navy text-fragsa-paper hover:bg-fragsa-blue`,
  'secondary':       `${BASE} border-[1.5px] border-fragsa-navy text-fragsa-navy hover:bg-fragsa-navy hover:text-fragsa-paper`,
  'light-primary':   `${BASE} bg-fragsa-paper text-fragsa-navy hover:bg-fragsa-blue hover:text-fragsa-paper`,
  'light-secondary': `${BASE} border-[1.5px] border-fragsa-paper text-fragsa-paper hover:bg-fragsa-paper hover:text-fragsa-navy`,
};

const Button: React.FC<Props> = (props) => {
  const { children, variant = 'primary', withArrow = false, className = '' } = props;
  const classes = `${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={16} strokeWidth={1.5} />}
    </>
  );

  if ('to' in props && props.to) {
    return <Link to={props.to} className={classes}>{inner}</Link>;
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} target={(props as AnchorProps).target} rel={(props as AnchorProps).rel} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={(props as ButtonElProps).type ?? 'button'} onClick={(props as ButtonElProps).onClick} className={classes}>
      {inner}
    </button>
  );
};

export default Button;
