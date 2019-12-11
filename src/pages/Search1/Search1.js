// import React, { useState, useEffect } from "react";
//  import Button from "../../components/Button/Button"
// import { getAllRealTime, getItem } from "../../services/database";
// import { Link } from 'react-router-dom';
//  import "./Search1.scss";



// const Search1 = ({ pollutants, products  }) => {
//     const [searchPol, setSearchPol] = useState('');
//     const [resultPol, setResultPol] = useState([]);
//     const [fileUploadPercent, setFileUploadPercent] = useState('');
    
    
  
//     useEffect(() => {
//       const searchPol = getItem('pollutants', nameEs);
//       setSearchPol(searchPol);
  
//       getAllRealTime({
//         collection: 'pollutants',
//         filters: { field: 'nameEs', condition: '==', value: nameEs },
//         callback: (collectionData) => {
//           const results = [];
//           collectionData.forEach((document) => {
//             const data = document.data();
//             results.push(data);
//           });
//           setResultPol(results);
//         }
//       });
  
//       console.log("nameEs")     
//     }, [])
  
    
  
  
//     return (
//         "Sarch1"

//     //   <div>
//     //     <Link to="/">Volver al foro</Link>
//     //     <h1>Room: {room.name}</h1>
//     //     <section className="chat-area">
//     //       <div id="messages" className="messages">
//     //         {messages.length === 0 && <div>Escribe algo mano</div>}
//     //         {messages.map((m, i) => (
//     //           <div key={m.timestamp} className={`messages-item ${isNewMessage && i===messages.length - 1 ? 'new-message': ''}`}>
//     //             <div>{m.date} - {m.time}</div>
//     //             <div>{m.message || <img src={m.file} alt="" />}</div>
//     //           </div>
//     //         ))}
//     //       </div>
//     //       <div className="new-message-area">
//     //         <textarea value={message} onChange={e => setMessage(e.target.value)} />
//     //         <button type="button" onClick={handleSendMessage}>Send</button>
//     //         <input type="file" onChange={handleUploadImage} />
//     //       </div>
//     //       <div>{fileUploadPercent}</div>
//     //     </section>
//     //   </div>
//     );
//   };
  
//   export default Search1;