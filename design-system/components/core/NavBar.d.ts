import * as React from 'react';

export interface NavBarProps {
  brand?: string;
  links: {label: string;
  href: string;
  current?: boolean}[];
  lang?: 'EN'|'VI';
  onLang?: (l: string) => void;
  cta?: React.ReactNode;
}
export function NavBar(props: NavBarProps): JSX.Element;
