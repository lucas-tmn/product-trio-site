import React from 'react';

export function CtaBand({title,body,primary,secondary}){
  return <div data-band="navy" className="ds-band ds-cta"><div style={{maxWidth:'52ch'}}><h2 className="ds-h2">{title}</h2>{body&&<p className="ds-body-l" style={{marginTop:12}}>{body}</p>}</div>
  <div className="ds-cta__actions"><a className="ds-btn ds-btn--on-dark" href={primary.href}>{primary.label}</a>{secondary&&<a className="ds-btn ds-btn--ghost-dark" href={secondary.href}>{secondary.label}</a>}</div></div>;
}
