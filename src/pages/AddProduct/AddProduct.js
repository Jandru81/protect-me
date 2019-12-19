import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { addItem } from '../../services/database';
import './AddProduct.scss';
import { withRouter } from 'react-router-dom';
import FormSelect from '../../components/FormSelect';
import UploadImage from '../../components/UploadImage/UploadImage';
import constants from '../../utils/constants';
import TextArea from './TextArea/TextArea';


const AddProduct = ({ products }) => {
  const [newPro, setNewPro] = useState({ product: '', refNum: 0, proteccion: [], pictureUrl: '', description1: '', description2: '' });
  const [protSelected, setProtSelected] = useState([]);
  const [pictureUrl, setPictureUrl] = useState('');


  const createProduct = async (event) => {
    event.preventDefault();

    newPro.proteccion = protSelected;
    newPro.pictureUrl = pictureUrl;

    const result = await addItem('products', newPro);
  };

  const handleCheckBox = (prot, isChecked) => {
    if (isChecked) {
      const protections = [...protSelected, prot];

      setProtSelected(protections);
    } else {
      const protections = protSelected.filter((el) => el !== prot);
      setProtSelected(protections);
    }
  };

  return (

    <div className="forms" data-test="component-AddProduct">
      <h1>ADD PRODUCT</h1>
      <form onSubmit={createProduct}>
        <div className="product-name">
          <FormInput
            label="Product name"
            value={newPro.product}
            onChange={(value) => setNewPro({ ...newPro, product: value })}
          />
        </div>
        <div className="reference-number">
          <FormInput
            label="Reference Number"
            value={newPro.refNum}
            onChange={(value) => setNewPro({ ...newPro, refNum: value })}
          />
        </div>
        <div className="description-1">
          <FormInput
            label="Tittle"
            value={newPro.description1}
            onChange={(value) => setNewPro({ ...newPro, description1: value })}
          />
        </div>
        <div className="description-2">
          <TextArea
            label="Description"
            value={newPro.description2}
            onChange={(value) => setNewPro({ ...newPro, description2: value })}
          />
        </div>

        <form onSubmit={createProduct}>

          {/* <FormSelect label="Proteccion Type" value={newPol.proteccion} onChange={(value) => setNewPol({ ...newPol, proteccion: value })} /> */}
          <checkbox className="checkbox" onChange={(event) => handleCheckBox(event.target.value, event.target.checked)}>
            <p className="protection">Protection</p>
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
          <div className="upload-image">Upload Image<UploadImage setPictureUrl={setPictureUrl} /></div>
          <div>
            <button className="button-add-product" onClick={createProduct}>ADD Product</button>
          </div>
        </form>
      </form>
    </div>
  );
};

export default AddProduct;
