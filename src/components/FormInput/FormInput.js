import React from 'react';
// import { Label, Input } from 'reactstrap';

const FormInput = ({ label, value, onChange, type = 'text', namePlaceHolder }) => (
    <div className="form-field">
      <div>{label}</div>
      <input type={type} value={value} placeholder={namePlaceHolder} onChange={event => onChange(event.target.value)}/>
    </div>
  
  
  );

export default FormInput;
