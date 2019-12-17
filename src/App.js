import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import './App.css';
import AddPollutant from './pages/AddPollutant/AddPollutant';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProtectInfo from './pages/ProtecInfo';
import HeaderTest from './components/Header/HeaderTest';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { registerAuthObserver } from './services/auth';
import { connect, useSelector } from 'react-redux';
import { getItem } from './services/database';
import { setUser } from './redux/actions/userActions';

// import Search from './pages/search';

function App({ setUserRedux }) {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const cancelObserver = registerAuthObserver(async (user) => {
      console.log('TCL: cancelObserver -> user', user);
      if (user) {
        const profile = await getItem('profiles', user.uid);
        console.log('TCL: cancelObserver -> profile', profile);
        if (profile) {
          setUserRedux(profile);
        } else {
          console.log('todavía se está registrando');
        }
      } else {
        setUserRedux(null);
      }
      setIsLoading(false);
    });

    return () => {
      cancelObserver();
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  // const defaultRoute = user
  // ? <Route path="/" component={Home} />
  // : <Route path="/" component={Login} />;


  const isLogged = user !== null;

  return (
    <div className="App" data-test="component-app">
      <Router>
        <HeaderTest />
        <Switch>
          {isLogged && <Route path="/home" exact component={Home} />}
          {!isLogged && <Route path="/signup" component={Signup} />}
          {!isLogged && <Route path="/login" component={Login} />}
          {/* {defaultRoute} */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/product/:id" component={ProductDetail} />
          {user && <Route path="/addproduct" component={AddProduct} />}
          {isLogged && <Route path="/addpollutant" component={AddPollutant} />}
          {isLogged && <Route path="/productinfo" component={ProtectInfo} />}
        </Switch>
        {/* <footer>footer</footer> */}
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUserRedux: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(App);

// const Content = () => (
//   <div>
//     <h1>here goes the content</h1>
//     <div>protecció: </div>
//     <div>productes: </div>
//   </div>
// );

// export default App;
