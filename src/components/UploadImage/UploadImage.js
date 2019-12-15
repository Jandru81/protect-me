import React, { useState } from 'react';
import './UploadImage.scss';
import uploadFile from '../../services/storageUpload';

function UploadImage({ setPictureUrl }) {
  const [fileUploadPercent, setFileUploadPercent] = useState();

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const downloadURL = await uploadFile(file, setFileUploadPercent);
    setPictureUrl(downloadURL);
  };
  return (
    <div>
      <input type="file" onChange={handleUploadImage} />
      <p>{fileUploadPercent}</p>
    </div>
  );
}

export default UploadImage;
