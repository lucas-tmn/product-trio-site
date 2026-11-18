import * as React from 'react';

export interface ChipProps {
  label: string;
  outline?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
export function Chip(props: ChipProps): JSX.Element;
