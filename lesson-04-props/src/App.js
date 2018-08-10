import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product name="Apple Inphone 6" prince="16.000.000"></Product>
        <Product name="Apple Inphone 7 plus" prince="21.000.000"></Product>
      </div>
    );
  }
}

export default App;
