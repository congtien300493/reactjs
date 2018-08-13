import React, { Component } from 'react';

class Product extends Component {

    muaNgay=()=>{
        alert(`${this.props.name}`);
    }
    render() {
        return (
            <div>
                
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img alt=""></img>
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.prince} vnd
                            </p>
                            <p>
                                <a  className="btn btn-primary" onClick={this.muaNgay}>Mua Ngay</a> 
                                <a  className="btn btn-default">Thêm Vào Giỏ Hàng</a>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Product;
