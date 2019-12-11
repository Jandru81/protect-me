import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { addItem } from '../../services/database';
import useGetAll from '../../components/UseGetAll/UseGetAll';
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AddPollutant.scss';
import FormSelect from '../../components/FormSelect';

const AddPollutant = ({ pollutants }) => {
  const [addPol, fetchPol] = useGetAll('pollutants');
  const [newPol, setNewPol] = useState({ nameES:'', casNumber: 0, proteccion: '' });

  const createPollutant = async (event) => {
    event.preventDefault();
    const result = await addItem('pollutants', newPol);
    // if (result) {
    //   fetchPol();
    // }
  }

  const enterPol = (id) => {
    pollutants.push(`/pollutants/${id}`);
  }


  if (newPol === pollutants) {
    return <div>This Pollutant already exist</div>
  }

  return ( 
    <>
      <h1>ADD POLLUTANT</h1>
      
      <hr />
      <div>
        <form onSubmit={createPollutant}>
          <FormInput label="Pollutant name" value={newPol.nameES} onChange={value => setNewPol({ ...newPol, nameES: value })} />
          <FormInput label="CAS Number" value={newPol.casNumber} onChange={value => setNewPol({ ...newPol, casNumber: value })} />
          <FormSelect label="Proteccion Type"  />
 
          <div>
            <button onClick = {createPollutant}>Add Pollutant</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(AddPollutant)