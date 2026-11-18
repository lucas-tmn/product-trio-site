import * as React from 'react';

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
