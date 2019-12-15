import React from 'react';
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

// import Search from './pages/search';

const pollutants = [];
const products = [];
const children = [];

function App() {
  return (
    <div className="App" data-test="component-app">
      <Router>
        <HeaderTest />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/addpollutant" component={AddPollutant} />
          <Route path="/productinfo" component={ProtectInfo} />
        </Switch>
        {/* <footer>footer</footer> */}
      </Router>
    </div>
  );
}

// const Content = () => (
//   <div>
//     <h1>here goes the content</h1>
//     <div>protecció: </div>
//     <div>productes: </div>
//   </div>
// );

export default App;
