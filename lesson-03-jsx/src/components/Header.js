import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
             
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" >Trang chủ</a>
                    <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Quản Lý Học Sinh</a>
                    </li>
                    </ul>
                </nav>    
           
        );
    }
}

export default Header;