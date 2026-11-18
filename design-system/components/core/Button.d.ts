import * as React from 'react';

export interface ButtonProps {
  variant?: 'primary'|'secondary'|'on-dark'|'ghost-dark';
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
