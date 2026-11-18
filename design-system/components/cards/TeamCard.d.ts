import * as React from 'react';

export interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}
export function TeamCard(props: TeamCardProps): JSX.Element;
