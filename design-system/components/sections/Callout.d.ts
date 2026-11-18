import * as React from 'react';

export interface CalloutProps {
  eyebrow: string;
  title: string;
  body?: string;
}
export function Callout(props: CalloutProps): JSX.Element;
