import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

class App extends Component {


  constructor(props) {
    super(props);
    this.state={
      productsState:[
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
          status:true
        },
      ],
      inActive:true
    }
    
  }
  
  onSetState=()=>{
    if(this.state.productsState){
      this.setState({
        inActive:false
      });
      alert(this.state.inActive);
    }else{
      this.setState({
        inActive:true
      })
      alert(this.state.inActive);
    }
  }

  getValue = ()=>{
   // console.log(this.refs);
    console.log(this.refs.name.value);
  }

  onClick() {
    console.log('Đây là trang của tôi!');
  }
  render() {
   /*  var products=[
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
        status:true
      },
    ]; */

    var element = this.state.productsState.map((product,index)=>{
      var result='';
      if(product.status){
        result =<Product key={product.maSP} name={product.name} prince={product.prince} status={product.status} ></Product>;
      }
      return result;
    });

    var tableElement = this.state.productsState.map((product,index)=>{
      var result='';
      if(product.status){
        result =<tr>
        <td>{product.maSP}</td>
        <td>{product.name}</td>
        <td>{product.prince}</td>
      </tr>
      }
      return result;
    })

    return (
      <div className="App">

      <div className="col-md-12">     
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm Sản Phẩm</h3>
        </div>
        <div className="panel-body">
              <div >
                <label>Tên Sản Phẩm</label>
                <input type="text" className="form-control" ref="name"/>
              </div>                                
              <div>
                <button  className="btn btn-primary" onClick={ this.getValue }>Lưu</button>
              </div>      
         
        </div>
      </div>      
      </div> 
      <div className="col-md-12">     
          {element}      
      </div>  
      <div className="col-md-12">     
          <button type="button" className="btn btn-default" onClick={this.onClick}>Click Me!</button>        
      </div>
      <div className="col-md-12">
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {tableElement}
          </tbody>
        </table>
        <div className="col-md-12">     
          <button type="button" className="btn btn-default" onClick={this.onSetState}>setState</button>        
      </div>
      </div>
      
         
      </div>
    );
  }
}

export default App;
