import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

class App extends Component {
  render() {
    var products=[
      {
        maSP:'1',
        name:'Apple Inphone 6',
        prince:'16.000.000',
        status:true
      },
      {
        maSP:'2',
        name:'Apple Inphone 7 plus',
        prince:'21.000.000',
        status:true
      },
      {
        maSP:'3',
        name:'Samsung Galaxy S7',
        prince:'15.000.000',
        status:false
      },
    ];

    var element = products.map((product,index)=>{
      if(product.status){
        return  <Product key={product.maSP} name={product.name} prince={product.prince} status={product.status} ></Product>
      }
    });

    return (
      <div className="App">
          {element}
      </div>
    );
  }
}

export default App;
