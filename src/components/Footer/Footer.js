import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';


const Footer = () => (
    <footer class="page-footer">
        <div class="page-footer-menu">
			<div class="container">
				<ul class="menu">
					<li><Link href="index.html">首頁</Link></li>
					<li><Link href="about.html">關於我們</Link></li>
					<li><Link href="services.html">我們的服務</Link></li>
					<li><Link href="faq.html">常見問題</Link></li>
					<li><Link href="blog-posts.html">部落格</Link></li>
					<li><Link href="contact.html">聯絡我們</Link></li>
				</ul>
				<div class="footer-ribbon">
					<img src="images/footer-ribbon.png" ></img>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="page-footer-bot">
				<div class="logo">
					<Link href="index.html"><img src="images/logo/logo-middle.png" alt=""></img></Link>
				</div>
				<div class="page-footer-phone"><span>聯絡方式:</span> <span class="phone-number">800-123-4567</span></div>
				<div class="page-footer-shedule"><i class="icon icon-clock"></i>早上8:00 - 晚上10:00<br>星期一到星期天</br></div>
				<div>
					<ul class="social-list">
						<li><Link href="#"><i class="icon-google-plus-logo"></i></Link></li>
						<li><Link href="#"><i class="icon-facebook-logo"></i></Link></li>
						<li><Link href="#"><i class="icon-twitter-logo"></i></Link></li>
						<li><Link href="#"><i class="icon-instagram-logo"></i></Link></li>
					</ul>
				</div>
			</div>
			<div class="footer-copyright">© 2017 Cleaner Service.</div>
			<div class="backToTop js-backToTop">
				<i class="icon icon-right-arrow"></i>
			</div>
		</div>
    </footer>
)

export default Footer