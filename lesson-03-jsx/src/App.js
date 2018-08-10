import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      
      <div className="row">
        <div className="col-md-12 ">
            <Header></Header>
        </div>
        
        <div className="col-md-12">
             <Table></Table>
        </div>
        <div className="col-md-12">
             <Footer></Footer>
        </div>
      </div>
      
    );
  }
}

export default App;
