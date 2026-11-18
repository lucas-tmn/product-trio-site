import React from 'react';

export function ServiceCard({title,body,tags=[],href}){
  const T=href?'a':'article';
  return <T className="ds-card" href={href}><h3 className="ds-h3">{title}</h3><p className="ds-body-s">{body}</p><div className="ds-card__tags">{tags.map(t=><span key={t} className="ds-chip">{t}</span>)}</div></T>;
}
