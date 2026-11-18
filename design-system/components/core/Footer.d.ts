import * as React from 'react';

export interface FooterProps {
  brand?: string;
  tagline?: string;
  columns: {title: string;
  links: {label: string;
  href: string}[]}[];
  legal?: string;
}
export function Footer(props: FooterProps): JSX.Element;
