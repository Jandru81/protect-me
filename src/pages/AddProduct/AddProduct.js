import React, { useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import { addItem } from '../../services/database';
import useGetAll from '../../components/UseGetAll/UseGetAll';
import './AddProduct.scss';
import { withRouter } from "react-router-dom";

const AddProduct = ({ products }) => {
  const [addPro, fetchPro] = useGetAll('products');
  const [newPro, setNewPro] = useState({ product:'', refNum: 0, proteccion: '', picture: '' });

  const createProduct = async (event) => {
    event.preventDefault();
    const result = await addItem('product', newPro);
    // if (result) {
    //   fetchPol();
    // }
  }


  const enterPro = (id) => {
  
    products.push(`/products/${id}`);
  }


  if (newPro === products) {
    return <div>This Pollutant already exist</div>
  }

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
      <div>
        <form onSubmit={createProduct}>
          <FormInput label="Product name" value={newPro.product} onChange={value => setNewPro({ ...newPro, product: value })} />
          <FormInput label="Reference Number" value={newPro.refNum} onChange={value => setNewPro({ ...newPro, refNum: value })} />
          <FormInput label="Proteccion Type" value={newPro.proteccion} onChange={value => setNewPro({ ...newPro, proteccion: value })} />
          <FormInput label="Picture" value={newPro.picture} onChange={value => setNewPro({ ...newPro, picture: value })} />
   
          <div>
            <button>Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(AddProduct)