import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllRealTime, getItem, getAllByArray, getItemByField } from '../../services/database';
import './Search1.scss';


const Search1 = ({ history }) => {
  const [searchPol, setSearchPol] = useState('');
  const [proteccion, setProteccion] = useState('');
  const [resultPol, setResultPol] = useState([]);
  const [productreco, setProductreco] = useState('');
  const [fileUploadPercent, setFileUploadPercent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // search pollutant protection by id (15sGkKREleMugd61AGAk) --> get one document:
    const pollutant = await getItemByField('pollutants', 'nameEs', searchPol);

    setProteccion(pollutant.proteccion);
    // search products by pollutant protection --> ['A', 'P3']:

    if (pollutant.proteccion) {
      const result = await getAllByArray('products', pollutant.proteccion, 'proteccion');
      return setResultPol(result);
    }
    return console.log('no hay');
  };

  const handleDetail = (id) => {
    history.push(`product/${id}`);
  };

  return (
    <div>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input placeHolder="Introduce a Pollutant..." className="input " name="search" value={searchPol} onChange={(e) => setSearchPol(e.target.value)} setSearchPollu />
        </div>
        <div className="results">
          {/* <div className="pollutant-result">Pollutant:<span>{searchPol}</span></div> */}
          <div className="protection-result">You Need Protection:    <span>{proteccion}</span></div>
        </div>
        {/* {!!resultPol.length && <pre>{JSON.stringify(resultPol, null, 3)}</pre>} */}
        <div className="product-result">You Need This Product:
          {resultPol.map((el, index) => (
            <div className="product-result-item" key={index}>
              <div className="product-result-data">
                <div>product: </div>
                <div className="product-result-name">{el.product}</div>
                <div className="product-result-refNum">{el.refNum}</div>
              </div>
              <div className="product-result-image"> <img src={el.pictureUrl} alt={el.product} /> </div>
              <button type="button" onClick={() => handleDetail(el.id)}>Detail</button>
            </div>
          ))}
        </div>
        {/* <Button>Search</Button> */}
      </form>


      {/* <section className="chat-area">
       <div id="messages" className="messages">
          {messages.length === 0 && <div>Escribe algo mano</div>}
          {messages.map((m, i) => (
            <div key={m.timestamp} className={`messages-item ${isNewMessage && i === messages.length - 1 ? 'new-message' : ''}`}>
              <div>{m.date} - {m.time}</div>
              <div>{m.message || <img src={m.file} alt="" />}</div>
            </div>
          ))}
        </div>
        <div className="new-message-area">
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="button" onClick={handleSendMessage}>Send</button>
          <input type="file" onChange={handleUploadImage} />
        </div>
        <div>{fileUploadPercent}</div>
      </section> */}
    </div>
  );
};

export default Search1;
