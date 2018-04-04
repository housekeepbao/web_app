import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import'./Header.css';
import logoimg from './logo.jpg';
// The Header creates links that can be used to navigate
// between routes.
const pageHeader =  {
    position: "relative",
    width: "100%",
    zIndex: 1000,
    padding: 0,
    margin: 0,
    border: 0,
    color: "#425d74",
    boxShadow:"5px 1px #cfcece"
  };

const Header = () => (
    <header className="pageHeader header-sticky">
        <div className="pageHeaderTop">
            <div className="container">
                <div className="logo">
                    <img src={ logoimg}  width={80} height={80} alt=""></img>
                    <div className="shine"></div>
                </div>
                <div className="quote-button-wrap"><Link to={""} className="btn"><i className="icon icon-bell"></i>Login</Link ></div>
                <Link to="#" className="menu-toggle"><i className="icon-line-menu"></i><i className="icon-cancel"></i></Link >
            </div>
        </div>
        <div className="page-header-menu">
            <div className="container">
                <ul className="menu">
                    <li className="active"><Link to="/">首頁</Link></li>
                    <li><Link to="">關於我們</Link></li>
                    <li><Link to="">服務<span className="arrow"></span></Link>
                        <ul className="sub-menu">
                            <li><Link to="">套房清潔</Link></li>
                            <li><Link to="">家庭清潔</Link></li>
                            <li><Link to="">大掃除</Link></li>
                        </ul>
                    </li>
                    <li><Link to ="">常見問題</Link></li>
                    <li><Link to="">部落格<span className="arrow"></span></Link></li>
                    <li><Link to="">成為家事員</Link></li>	
                    <li><Link to="">聯絡我們</Link></li>	
                </ul>
            </div>
        </div>
    </header>
)

export default Header
