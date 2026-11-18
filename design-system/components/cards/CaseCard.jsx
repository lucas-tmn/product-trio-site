import React from 'react';

export function CaseCard({industry,title,metric,metricLabel,owner,href}){
  const T=href?'a':'article';
  return <T className="ds-card ds-card--case" href={href}><span className="ds-eyebrow">{industry}</span><h3 className="ds-h3">{title}</h3>
  <div className="ds-stat"><span className="ds-metric">{metric}</span><span className="ds-stat__label">{metricLabel}</span></div>
  <div className="ds-card--case__owner">{owner}</div></T>;
}
