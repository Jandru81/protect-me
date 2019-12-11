import React from "react";
import { Label, Input } from 'reactstrap';


const FormSelect = ({
  label,
  onChange,
  type = "select",
}) => {
  return (
    <div className="form-field">
      <Label>{label}</Label>
      {/* <Input
        type={type}
        value={value}
        placeholder={namePlaceHolder}
        onChange={event => onChange(event.target.value)}
      /> */}
      <Input type={type}>
        <option>FFP1</option>
        <option>FFP2</option>
        <option>FFP3</option>
        <option>P1</option>
        <option>P2</option>
        <option>P3</option>
        <option>A</option>
        <option>ABE</option>
        <option>ABEK</option>
      </Input>
    </div>
  );
};


export default FormSelect;