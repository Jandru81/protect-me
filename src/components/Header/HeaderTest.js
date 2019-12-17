import React from 'react';
// import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';
import './HeaderTest.scss';
import { useSelector } from 'react-redux';

const HeaderTest = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    logout();
    history.push('/');
  };


  return (

    <div className="nav-options">
      {/* // <Nav> */}
      <ul className="nav-list">
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/addproduct">Add Product</Link></li>
        <li> <Link to="/addpollutant">Add Pollutant</Link></li>
        <li><Link to="/productinfo">Protection Info</Link></li>

        {user
          ? <li>{user.name} <button onClick={handleLogout}>Logout</button></li>
          : (
            <>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}

      </ul>

      {/* </Nav> */}
    </div>
  );
};

export default withRouter(HeaderTest);


// export default function Header(children) {
//   return (
//     <div>

//       This is the header

//     </div>
//   );
// }
