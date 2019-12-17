import React from 'react';
import './TextArea.scss';
// import { Label, Input } from 'reactstrap';


const TextArea = ({ label, value, onChange, namePlaceHolder }) => (


  <div className="form-field">
    <div>{label}</div>
    <textarea id="myTextArea" className="input" value={value} placeholder={namePlaceHolder} onChange={(event) => onChange(event.target.value)} />
  </div>
);


export default TextArea;
