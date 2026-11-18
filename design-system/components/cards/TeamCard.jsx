import React from 'react';

export function TeamCard({name,role,bio,photo,linkedin}){
  const ini=name.replace(/[\[\]]/g,'').split(' ').map(w=>w[0]).slice(0,2).join('');
  return <article className="ds-team"><div className="ds-portrait">{photo?<img src={photo} alt={'Portrait of '+name}/>:<span className="ds-portrait__initials" aria-hidden="true">{ini}</span>}</div>
  <div><h3 className="ds-h4">{name}</h3><div className="ds-team__role">{role}</div></div>
  <p className="ds-body-s" style={{color:'var(--color-text-secondary)',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{bio}</p>
  {linkedin&&<a className="ds-link" href={linkedin} aria-label={'LinkedIn profile of '+name}>LinkedIn ↗</a>}</article>;
}
