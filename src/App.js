import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import ProduuctList from './Component/ProductList';
import Cart from './Component/Cart/Cart';
import Details from './Component/Details';
import Default from './Component/Default';
import Modal  from './Component/Modal'
class App extends Component
{
  render()
  {
    return(
      <React.Fragment>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={ProduuctList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
          <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
