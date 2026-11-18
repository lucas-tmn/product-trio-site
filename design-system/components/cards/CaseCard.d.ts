import * as React from 'react';

export interface CaseCardProps {
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  owner: string;
  href?: string;
}
export function CaseCard(props: CaseCardProps): JSX.Element;
