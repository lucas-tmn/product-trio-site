import * as React from 'react';

export interface FieldProps {
  label: string;
  id: string;
  type?: 'text'|'email'|'textarea'|'select';
  options?: string[];
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}
export function Field(props: FieldProps): JSX.Element;
