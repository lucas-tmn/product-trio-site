import React from 'react';

export function SectionHeader({eyebrow,title,lead,id}){
  return <div className="ds-sechead"><span className="ds-eyebrow">{eyebrow}</span><h2 id={id} className="ds-h2">{title}</h2>{lead&&<p className="ds-body-l">{lead}</p>}</div>;
}
