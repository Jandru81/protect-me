import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import { addItem } from '../../services/database';
import useGetAll from '../../components/UseGetAll/UseGetAll';
import './AddPollutant.scss';
import FormSelect from '../../components/FormSelect';

const AddPollutant = ({ pollutants }) => {
  const [addPol, fetchPol] = useGetAll('pollutants');
  const [newPol, setNewPol] = useState({ nameES: '', casNumber: 0, proteccion: '' });
  const [protSelected, setProtSelected] = useState([]);


  const createPollutant = async (event) => {
    event.preventDefault();

    newPol.proteccion = protSelected;

    const result = await addItem('pollutants', newPol);
    console.log('result: ', result);
  };

  const handleCheckBox = (prot, isChecked) => {
    if (isChecked) {
      const protections = [...protSelected, prot];
      console.log('protections: ', protections);

      setProtSelected(protections);
    } else {
      const protections = protSelected.filter((el) => el !== prot);
      console.log('protections: ', protections);
      setProtSelected(protections);
    }
  };


  return (
    <>
      <h1>ADD POLLUTANT</h1>


      <div>
        <form onSubmit={createPollutant}>
          <div className="pollutant">
            <FormInput label="Pollutant Name" value={newPol.nameES} onChange={(value) => setNewPol({ ...newPol, nameES: value })} />
          </div>
          <div className="reference-number">
            <FormInput label="CAS Number" value={newPol.casNumber} onChange={(value) => setNewPol({ ...newPol, casNumber: value })} />
          </div>
          {/* <FormSelect label="Proteccion Type" value={newPol.proteccion} onChange={(value) => setNewPol({ ...newPol, proteccion: value })} /> */}
          <checkbox className="checkbox" onChange={(event) => handleCheckBox(event.target.value, event.target.checked)}>
            <div className="protection">Protection</div>
            <input type="checkbox" value="FFP1" /> FFP1
            <input type="checkbox" value="FFP2" /> FFP2
            <input type="checkbox" value="FFP3" /> FFP3
            <input type="checkbox" value="P1" /> P1
            <input type="checkbox" value="P2" /> P2
            <input type="checkbox" value="P3" /> P3
            <input type="checkbox" value="A" /> A
            <input type="checkbox" value="ABE" /> ABE
            <input type="checkbox" value="ABEK" /> ABEK
          </checkbox>
          <div>
            <button className="button-add-pollutant" onClick={createPollutant}>ADD Pollutant</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(AddPollutant);
