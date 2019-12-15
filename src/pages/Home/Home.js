import React, { useState, useEffect } from 'react';
import './Home.scss';
import { getAll } from '../../services/database';
import Search1 from '../../components/Search1/Search1';

function Home() {
  const [result, setResults] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getAll('products');
      console.log('res: ', res);
      // const json = await res.json();
      // setResults(json)
    })();
  }, []);

  return (
    <div className="Home" data-test="component-home">
      <div className="logo">Protect<span>Me</span></div>

      <Search1 />

    </div>

  );
}


export default Home;
