import React, { useState } from 'react';
import './UploadImage.scss';
import { getAll, addItem } from '../../services/database';
import uploadFile from '../../services/storage/uploadFile';
import AddProduct from '../../pages/AddProduct/AddProduct;'


const handleUploadImage = async (event) => {
  const [fileUploadPercent, setFileUploadPercent] = useState('');
  const file = event.target.files[0];
  const downloadURL = await uploadFile(file, setFileUploadPercent);
  // const roomId = products.params.id;
  const result = await addItem(
    'products',
    { products.id, file: downloadURL, timestamp: +(new Date()) }
  );
  if (result) {
    setFileUploadPercent('');
  }


  return (
    <div>
      <input type="file" onChange={handleUploadImage} />
      <button type="button" onClick={handleSendMessage}>Send</button>

    </div>
  );
};

export default UploadImage;
