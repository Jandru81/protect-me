// import React, { useState, useEffect } from "react";
// import Button from "../../components/Button/Button"
// import { getAllRealTime } from "../../services/database";
// import "./search.scss";

// function Search({ pollutants = [] }) {
//   const [searchPollu, setSearchPollu] = useState("");
//   const [result, setResult] = useState ([]);

//   const handleSearch = (event) => {setSearchPollu(event.target.value)};
//   event.preventDefault();

//   useEffect(() => {
//     (async () => {
//       const res = await getAllRealTime('pollutants', 
//       filters: {field:'nameEs', condition:'==', value: nameEs} );
//          console.log(pollutants);
//     })();
//   }, []);

//   return (
//     <form className="search-form" onSubmit={handleSearch}>
//       <div>
//         <label>Search Pollutant</label>
//         <input name="search" value={searchPollu} onChange={setSearchPollu}setSearchPollu/>
//           </div>
//       }
//       <Button>Search</Button>
//     </form>
//   );
// }

// export default Search;
