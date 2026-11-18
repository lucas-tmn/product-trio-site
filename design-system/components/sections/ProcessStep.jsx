import React from 'react';

export function ProcessStep({n,title,body}){
  return <div className="ds-step"><span className="ds-step__n">{n}</span><h3 className="ds-h4">{title}</h3><p className="ds-body-s" style={{color:'var(--color-text-secondary)'}}>{body}</p></div>;
}
