import React from 'react';

export function Field({label,id,type='text',options=[],hint,error,required,placeholder,disabled}){
  const d=[hint&&id+'-h',error&&id+'-e'].filter(Boolean).join(' ')||undefined;
  const p={id,className:'ds-input',required,disabled,placeholder,'aria-invalid':error?'true':undefined,'aria-describedby':d};
  return <div className="ds-field">
    <label className="ds-label" htmlFor={id}>{label}{required?' *':''}</label>
    {type==='textarea'?<textarea {...p}/>:type==='select'?<select {...p}>{options.map(o=><option key={o}>{o}</option>)}</select>:<input type={type} {...p}/>}
    {hint&&<span id={id+'-h'} className="ds-hint">{hint}</span>}
    {error&&<span id={id+'-e'} className="ds-error" role="alert">{error}</span>}
  </div>;
}
