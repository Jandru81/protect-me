import React from 'react';
import Home from './pages/Home/Home';
import './App.css';

import Search1 from './components/Search1/Search1';
import AddPollutant from './pages/AddPollutant/AddPollutant';
import AddProduct from './pages/AddProduct/AddProduct';
import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="App">
      <Router>
        <HeaderTest />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/addproduct"><AddProduct /></Route>
          <Route path="/addpollutant"><AddPollutant /></Route>
          <Route path="/productinfo"><ProtectInfo /></Route>
        </Switch>
        {/* <footer>footer</footer> */}
      </Router>
      {/* <Header />
      <Home />
      <Content />
      <AddPollutant pollutants = {pollutants} />
      <AddProduct products = {products} /> */}
    </div>
  );
}

const Content = () => (
  <div>
      <h1>here goes the content</h1>
      <div>protecció: </div>
      <div>productes: </div>
    </div>
);

export default App;
