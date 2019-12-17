import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getAllByArray, getItemByField } from '../../services/database';
import './Search1.scss';

const Search1 = () => {
  const history = useHistory();
  const [searchPol, setSearchPol] = useState('');
  const [proteccion, setProteccion] = useState('');
  const [resultPol, setResultPol] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // search pollutant protection by id (15sGkKREleMugd61AGAk) --> get one document:
    const pollutant = await getItemByField('pollutants', 'nameEs', searchPol);
    // const casNumber = await getItemByField('pollutants', 'casNumber', searchPol);

    setProteccion(pollutant.proteccion);

    // search products by pollutant protection --> ['A', 'P3']:

    if (pollutant.proteccion) {
      const result = await getAllByArray(
        'products',
        pollutant.proteccion,
        'proteccion'
      );
      return setResultPol(result);
    }
    return (<p>no</p>);
  };

  const handleDetail = (id) => {
    history.push(`product/${id}`);
  };

  return (
    <div data-test="component-Search1">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            placeHolder="Introduce a Pollutant..."
            className="input "
            name="search"
            value={searchPol}
            onChange={(e) => setSearchPol(e.target.value)}
            setSearchPollu
            data-test="input-box"
          />
        </div>
        <div className="results">
          <div className="protection-result">
            You Need Protection: <span>{proteccion}</span>
          </div>
        </div>

        <div className="product-result">
          {resultPol.map((el, index) => (
            <div className="product-result-item" key={index}>
              <div className="product-result-data">
                <div className="product-result-name">{el.product}</div>
                <div className="product-result-proteccion">{el.proteccion}</div>
                <div className="product-result-refNum">Ref:{el.refNum}</div>
              </div>
              <div className="product-result-image">
                {' '}
                <img src={el.pictureUrl} alt={el.product} />{' '}
              </div>
              <button
                className="product-result-button"
                type="button"
                onClick={() => handleDetail(el.id)}
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Search1;
