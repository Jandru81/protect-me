import React from 'react';
//import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  
  return (
    <div>
      <Nav>
        
        <NavItem>
        <NavLink> <Link to="/">Home</Link> </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>  <Link to="/addproduct">Add Product</Link></NavLink>
        </NavItem>
        <NavItem>
        <NavLink>   <Link to="/addpollutant">Add Pollutant</Link></NavLink>
        </NavItem>
        <NavItem>
        <NavLink>  <Link to="/productinfo">Proteccion Info</Link></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default withRouter(Header);









// export default function Header(children) {
//   return (
//     <div>
      
//       This is the header
      
//     </div>
//   );
// }
