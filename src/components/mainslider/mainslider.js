import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import housekeepbaobanner from './housekeepbao-banner.jpg';
import Slide from './slide'
require('./style.scss')

class mainslider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            settingsVisible: false,
            autoplay: false,
            text: ['test1','test2','test3']
          }
    };

    renderSlides = () => this.state.text.map((curr, i) => <Slide key={i} H2_text={this.state.text[i]} />)
    //renderSlides = () => <Slide  H2_text={"TestTest"}/>
    render(){
        const slider_style_01 ={
            backgroundImage: `url(${housekeepbaobanner})`,
        };
        const { settingsVisible, autoplay } = this.state
        return (
            <div className="slider-wrapper"
                style={{
                    transform: `translateX(765px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                { this.renderSlides() }
            </div>
        );
    }

}
export default mainslider;