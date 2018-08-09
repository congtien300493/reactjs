import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (    
      <div>
        <div><Header></Header></div>
        <div><Product></Product></div>
        <div><Footer></Footer></div>
      </div>
    );
  }
}

export default App;
