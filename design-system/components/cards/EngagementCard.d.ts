import * as React from 'react';

export interface EngagementCardProps {
  name: string;
  summary: string;
  from?: string;
  items: string[];
  cta: string;
  href?: string;
  featured?: boolean;
}
export function EngagementCard(props: EngagementCardProps): JSX.Element;
