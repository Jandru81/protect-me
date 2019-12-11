import React from 'react';
import { Label, Input } from 'reactstrap';

const FormInput = ({ label, value, onChange, type = 'text', namePlaceHolder }) => {
  
  
  return (
    <div className="form-field">
      <Label>{label}</Label>
      <Input type={type} value={value} placeholder={namePlaceHolder} onChange={event => onChange(event.target.value)}/>
    </div>
  
  
  );
}
 
export default FormInput;

