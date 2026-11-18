import React from 'react';

export function NavBar({brand='[Team Name]',links=[],lang='EN',onLang,cta}){
  const [open,setOpen]=React.useState(false);
  return <header className="ds-nav"><div className="ds-container">
    <div className="ds-nav__row">
      <a className="ds-logo" href="/"><span className="ds-logo__slot" aria-hidden="true"/>{brand}</a>
      <nav aria-label="Primary"><ul className="ds-nav__links">{links.map(l=><li key={l.href}><a className="ds-nav__link" href={l.href} aria-current={l.current?'page':undefined}>{l.label}</a></li>)}</ul></nav>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div className="ds-lang" role="group" aria-label="Language">{['EN','VI'].map(x=><button key={x} aria-pressed={lang===x} onClick={()=>onLang&&onLang(x)}>{x}</button>)}</div>
        {cta}
        <button className="ds-menu-btn" aria-expanded={open} aria-controls="m-menu" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
      </div>
    </div>
    <div id="m-menu" className={'ds-mobile-menu'+(open?' is-open':'')}>{links.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</div>
  </div></header>;
}
