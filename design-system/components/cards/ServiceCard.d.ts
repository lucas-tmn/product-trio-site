import * as React from 'react';

export interface ServiceCardProps {
  title: string;
  body: string;
  tags?: string[];
  href?: string;
}
export function ServiceCard(props: ServiceCardProps): JSX.Element;
