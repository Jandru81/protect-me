import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { getAllRealTime, getItem } from '../../services/database';
import './Search1.scss';
import pollutantDict from '../../services/pollutantDict';


const Search1 = () => {
  const [searchPol, setSearchPol] = useState('');
  const [proteccion, setProteccion] = useState('');
  const [resultPol, setResultPol] = useState([]);
  const [fileUploadPercent, setFileUploadPercent] = useState('');


  useEffect(() => {
    //   const searchPol = getItem('pollutants', nameEs);
    //   setSearchPol(searchPol);

    // getAllRealTime({
    //   collection: 'pollutants',
    //   filters: { field: 'nameEs', condition: '==', value: 'Alquitrán' },
    //   order: 'timestamp',
    //   callback: (collectionData) => {
    //     const results = [];
    //     collectionData.forEach((document) => {
    //       const data = document.data();
    //       results.push(data);
    //     });
    //     setResultPol(results);
    //     console.log('setResultPol: ', setResultPol);
    //   }
    // });
  }, []);

  const getPollutantByName = async () => {
    const pollutantID = pollutantDict[searchPol];

    const pollutant = await getItem('pollutants', pollutantID);
    return pollutant;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // search pollutant protection by id (15sGkKREleMugd61AGAk) --> get one document:
    const pollutant = await getPollutantByName();

    setProteccion(pollutant.proteccion);
    // search products by pollutant protection --> ['A', 'P3']:
    // getPollutantByProtection('products', ['A', 'P3']);
  };


  return (
    <div>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Search Pollutant</label>
          <input name="search" value={searchPol} onChange={(e) => setSearchPol(e.target.value)} setSearchPollu />
        </div>
        <div>pollutant: {searchPol}</div>
        <div>protection: {proteccion}</div>
        <Button>Search</Button>
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
