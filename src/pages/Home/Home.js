import React, {useState, useEffect} from 'react';
import '../Home/Home.scss'
import { getAll } from '../../services/database';

// function Home() {
//   const [result, setResults] = useState(null);
//   useEffect(() => {
//     (async () => {
//       const res = await getAll('pollutants');
//       console.log('res: ', res);
//       // const json = await res.json();
//       // setResults(json)

//     })()
//   }, [])

//     return (
//       <div className="Home">
//         Home sweet home
//       </div>
      
//     );
//   }
  

  function Home() {
    const [result, setResults] = useState(null);
    useEffect(() => {
      (async () => {
        const res = await getAll('products');
        console.log('res: ', res);
        // const json = await res.json();
        // setResults(json)
  
      })()
    }, [])
  
      return (
        <div className="Home">
          Home sweet home
        </div>
        
      );
    }
  
  
  
  
  
  export default Home;