import React from 'react';

export function Chip({label,outline,selected,onClick}){
  if(onClick)return <button className="ds-pill" aria-pressed={!!selected} onClick={onClick}>{label}</button>;
  return <span className={'ds-chip'+(outline?' ds-chip--outline':'')}>{label}</span>;
}
