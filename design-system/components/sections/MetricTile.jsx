import React from 'react';

export function MetricTile({value,label}){
  return <div className="ds-stat"><span className="ds-metric">{value}</span><span className="ds-stat__label">{label}</span></div>;
}
