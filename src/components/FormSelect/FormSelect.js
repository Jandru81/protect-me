import React from 'react';
// import { Label, Input } from 'reactstrap';


const FormSelect = ({
  label,
  onChange,
  type = 'checkbox'
}) => (
  <div className="form-field">
    <div>{label}</div>
    {/* <Input
        type={type}
        value={value}
        placeholder={namePlaceHolder}
        onChange={event => onChange(event.target.value)}
      /> */}
    <checkbox onChange={(event) => onChange(event.target.value)}>
      <option>FFP1</option>
      <option>FFP2</option>
      <option>FFP3</option>
      <option>P1</option>
      <option>P2</option>
      <option>P3</option>
      <option>A</option>
      <option>ABE</option>
      <option>ABEK</option>
    </checkbox>
  </div>
);


export default FormSelect;
