import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import logoimg from './logo.jpg';

const Footer = () => (
    <footer className="page-footer" >
      <div className="container">
        <div className="page-footer-bot">
          <div className="logo">
            <Link to=""><img src={ logoimg}  width={80} height={80} alt=""></img></Link>
          </div>
          <div className="page-footer-phone"><span>聯絡方式:</span> <span className="phone-number">800-123-4567</span></div>
          <div className="footer-copyright">© 2017 Cleaner Service.</div>
          <div class="backToTop js-backToTop">
            <i class="icon icon-right-arrow"></i>
          </div>
        </div>	
      </div>	
    </footer>
)

export default Footer