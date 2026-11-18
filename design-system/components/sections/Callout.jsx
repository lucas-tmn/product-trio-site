import React from 'react';

export function Callout({eyebrow,title,body}){
  return <div className="ds-callout"><span className="ds-callout__mark" aria-hidden="true"/><div><span className="ds-eyebrow">{eyebrow}</span><h3 className="ds-h3" style={{margin:'6px 0'}}>{title}</h3>{body&&<p className="ds-body-s" style={{color:'#3a3326'}}>{body}</p>}</div></div>;
}
