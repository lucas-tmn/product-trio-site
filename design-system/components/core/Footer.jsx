import React from 'react';

export function Footer({brand='[Team Name]',tagline,columns=[],legal}){
  return <footer className="ds-footer"><div className="ds-container">
    <div className="ds-footer__grid">
      <div><div className="ds-logo"><span className="ds-logo__slot" aria-hidden="true"/>{brand}</div>{tagline&&<p className="ds-body-s" style={{maxWidth:'36ch',color:'var(--color-text-secondary)'}}>{tagline}</p>}</div>
      {columns.map(c=><nav key={c.title} aria-label={c.title}><div className="ds-eyebrow" style={{marginBottom:8}}>{c.title}</div>{c.links.map(l=><div key={l.href}><a href={l.href}>{l.label}</a></div>)}</nav>)}
    </div>
    <div className="ds-footer__legal ds-caption"><span>{legal}</span></div>
  </div></footer>;
}
