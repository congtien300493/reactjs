import React, { Component } from 'react';
//import logo from './logo.svg';
import Form from './components/Form'
import './App.css';

class App extends Component {
  render() {
    return (
        
        <div className="container">
          
          <div className="row">
            <div className="col-md-8">
                <Form></Form>
            </div>
          </div>
          
        </div>
        
    );
  }
}

export default App;
