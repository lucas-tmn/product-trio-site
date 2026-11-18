import React from 'react';

export function EngagementCard({name,summary,from,items=[],cta,href='#contact',featured}){
  return <article className={'ds-card'+(featured?' ds-card--feature':'')}><h3 className="ds-h3">{name}</h3><p className="ds-body-s">{summary}</p>
  {from&&<div><span className="ds-caption">Starting from</span><div className="ds-card__price">{from}</div></div>}
  <ul className="ds-card__list">{items.map(i=><li key={i}>{i}</li>)}</ul>
  <a className={'ds-btn '+(featured?'ds-btn--primary':'ds-btn--secondary')} href={href} style={{marginTop:'auto'}}>{cta}</a></article>;
}
