import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/database';
import './ProductDetail.scss';


const ProductDetail = (props) => {
  const params = useParams();
  const [product, setProduct] = useState('');


  useEffect(() => {
    // const productId = props.match.params.id;
    const productId = params.id;

    getItem('products', productId).then((item) => {
      setProduct(item);
    });
  }, []);

  return (
    <div>
      <div className="product-detail-item">
        {/* <div>product: </div> */}
        <div className="image-detail"> <img src={product.pictureUrl} alt={product.product} /> </div>
        <div className="text-detail">
          <div className="product-detail">{product.product}</div>
          <div className="description1-detail">{product.description1}</div>
          <div className="refNum-detail">Ref: {product.refNum}</div>
          <div style={{ whiteSpace: 'pre-wrap' }} className="description2-detail">{product.description2}</div>
          <button className="button-back" onClick={() => props.history.push('/home')}>Back to Products</button>

        </div>
      </div>
    </div>
  );
};


export default ProductDetail;
