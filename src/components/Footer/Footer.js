import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import logoimg from './logo.jpg';

const Footer = () => (
    <footer >
		<div className="page-footer-phone"><span>聯絡方式:</span> <span className="phone-number">800-123-4567</span></div>
		<div className="footer-copyright">© 2017 Cleaner Service.</div>	
    </footer>
)

export default Footer