import React, { useState, useEffect } from 'react';
import AddProduct from '../../pages/AddProduct/AddProduct';
import { getItem } from '../../services/database';


const ProductDetail = (props) => {
  const [product, setProduct] = useState('');

  useEffect(() => {
    const productId = props.match.params.id;

    getItem('products', productId).then((item) => {
      setProduct(item);
    });
  }, []);

  return (
    <div>
      <div className="product-result-item">
        <div>product: </div>
        <div>{product.product}</div>
        <div>{product.refNum}</div>
        <div>{product.pictureUrl}</div>
        <button onClick={() => props.history.push('/')}>go home</button>
      </div>
    </div>
  );
};


export default ProductDetail;
