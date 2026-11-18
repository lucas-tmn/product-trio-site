import React from 'react';

export function Button({variant='primary',href,disabled,children,onClick,...rest}){
  const cls='ds-btn ds-btn--'+variant;
  if(href&&!disabled)return <a className={cls} href={href} {...rest}>{children}</a>;
  return <button className={cls} disabled={disabled} onClick={onClick} {...rest}>{children}</button>;
}
