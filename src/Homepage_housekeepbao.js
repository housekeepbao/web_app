import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import'./css/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './images/logo/logo.jpg';
import Mainslider from './components/mainslider/mainslider';
import DemoCarousel from './components/mainslider/carsouel';
import Mainblock from './components/homecompnents/main_block';
import {
  getFromStorage,
  setInStorage,
} from './utils/storage';

class Homepage_housekeepbao extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    };
    addCount = () => {
        const newCount = this.state.count += 1;
        this.setState({count:newCount});
    }
    render(){
        return (
            <div>
                <Header/>
                <DemoCarousel/>
                <Mainblock/>
                <main>
                    <div className="mytest">
                        <h1>{this.state.count}</h1>
                        <button onClick={this.addCount}>add count</button>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Homepage_housekeepbao;