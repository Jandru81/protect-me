import React from 'react';
//import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import '../Header/HeaderTest.scss'

const HeaderTest = (props) => {
  
  return (
    <div className="nav-options">
     {/* // <Nav> */}
      <ul className="nav-list">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/addproduct">Add Product</Link></li>
            <li> <Link to="/addpollutant">Add Pollutant</Link></li>
            <li><Link to="/productinfo">Protection Info</Link></li>
</ul>
      
      {/* </Nav> */}
    </div>
  );
}

export default withRouter(HeaderTest);









// export default function Header(children) {
//   return (
//     <div>
      
//       This is the header
      
//     </div>
//   );
// }
