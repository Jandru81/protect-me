import React from 'react';
import './pages/Home/Home'
import './App.css';
import Home from './pages/Home/Home';
import Search1 from './pages/Search1'
import AddPollutant from './pages/AddPollutant/AddPollutant';
import AddProduct from './pages/AddProduct/AddProduct';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import Search from './pages/search';

const pollutants = [];
const products = [];
const children = [];

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/addproduct"><AddProduct /></Route>
          <Route path="/addpollutant"><AddPollutant /></Route>
          <Route path="/productinfo"></Route>
        </Switch>
        <footer>footer</footer>
      </Router>
     {/* <Header />
      <Home />
      <Content />
      <AddPollutant pollutants = {pollutants} />
      <AddProduct products = {products} /> */}
      </div>
    )
}

const Content = () => {
  return (
    <div>
      <h1>here goes the content</h1>
      <div>protecció: </div>
      <div>productes: </div>
    </div>
  )
}

export default  App;

