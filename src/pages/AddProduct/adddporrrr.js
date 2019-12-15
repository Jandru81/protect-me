import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { addItem } from '../../services/database';
import './AddProduct.scss';
import { withRouter } from 'react-router-dom';
import FormSelect from '../../components/FormSelect';
import UploadImage from '../../components/UploadImage/UploadImage';
import constants from '../../utils/constants';


const AddProduct = ({ products }) => {
  const IMAGE_PATH = 'https://firebasestorage.googleapis.com/v0/b/polluntants-web-browser.appspot.com/o/images%';
  const [newPro, setNewPro] = useState({ product: '', refNum: 0, proteccion: '', pictureUrl: { IMAGE_PATH } });
  const [protSelected, setProtSelected] = useState([]);
  const createProduct = async (event) => {
    event.preventDefault();
    // newPro.proteccion = protSelected;


    console.log('newPro: ', newPro);
    const result = await addItem('products', newPro);


    // if (result) {
    //   fetchPol();
    // }
  };


  const enterPro = (id) => {
    products.push(`/products/${id}`);

    return setNewPro('');
  };


  // if (newPro === products) {
  //   return <div>This Pollutant already exist</div>;
  // }

  return (
    <>
      <h1>ADD PRODUCT</h1>
      {/* <div className="product-list">
        {products.map(r => (
          <div role="button" onClick={() => enterPro(r.id)} key={r.id} className="product-list-item">
            <h3>{r.name}</h3>
            <div>Product Name: {r.product}</div>
            <div>Reference Number: {r.refNum}</div>
            <div>Proteccion: {r.proteccion}</div>
            <div>Picture: {r.picture}</div>
          </div>
        ))}
      </div> */}
      <hr />
      <div className="forms">
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

          <div className="proteccion-type">
            <FormSelect
              label="Proteccion Type"
              value={newPro.proteccion}
              onChange={(value) => setNewPro({ ...newPro, proteccion: value })}
            />

            {/* const protections = [...protSelected];
              //   //hacer un array y mirar si se repite el elemento */}
          </div>
          <div className="product-picture"><FormInput label="Picture" value={newPro.picture} onChange={(value) => setNewPro({ ...newPro, picture: value })} /></div>
          <div><UploadImage /></div>

          <div>
            <button onClick={createProduct}>Add Product</button>

          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(AddProduct);
