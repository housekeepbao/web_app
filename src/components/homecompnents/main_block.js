import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';



class Mainblock extends Component {
    render(){
        return (
            <div className="block fullwidth-bg inset-85 bg-cover" style ={{backgroundImage: 'url('+require("./block-bg-2.jpg")+')',height:'auto'}} >
                <div className="container">
                    <h2 className="text-center h-lg">為何選擇我們?</h2>
                    <div className="divider-lg"></div>
                    <div className="row feature-wrapper">
                        <div className="col-sm-6">
                            <div className="feature-text">
                                <h5>更貼近您的需求</h5>
                                <p className="font-sm">依據你的需求，我們將為您篩選並媒合合適的潔客，重視每一次的服務</p>
                            </div>
                                                        
                            <div className="feature-text">
                                <h5>更多的付款功能</h5>
                                <p className="font-sm">提供更多的付款功能，讓您與潔客都有其他選擇</p>
                            </div>
                        </div>		
                        <div className="col-sm-6">
                            <div className="feature-text">
                                <h5>我們的承諾</h5>
                                <p className="font-sm">更加透明的潔客資訊讓每次服務都是良好的體驗，只提供最好的潔客</p>
                            </div>
                            <div className="feature-text">
                                <h5>更棒的價格</h5>
                                <p className="font-sm">依照您的需求，提供不同價格的服務</p>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
        );
    }
}

export default Mainblock