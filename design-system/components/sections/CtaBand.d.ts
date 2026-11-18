import * as React from 'react';

export interface CtaBandProps {
  title: string;
  body?: string;
  primary: {label: string;
  href: string};
  secondary?: {label: string;
  href: string};
}
export function CtaBand(props: CtaBandProps): JSX.Element;
