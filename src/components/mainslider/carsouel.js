import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import housekeepbaobanner from './housekeepbao-banner.jpg';
// npm install react-responsive-carousel --save

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
class DemoCarousel extends Component {
    render() {
        const slider_style ={
            fontSize: '40px',
            lineHeight: '1.08em',
            fontWeight: '24',
            color: '#fff',
            textTransform: 'none',
            textShadow: '0 1px 1px rgba(0, 0, 0, 0.55)',
            textAlign:'center',
        };
        const slider_style_01 ={
            backgroundImage: `url(${housekeepbaobanner})`,
        };
        return (
            <Carousel showArrows={true}>
                <div >
                    <img src={housekeepbaobanner} />
                    <p className="legend" style={slider_style}>家事寶只專注為您的家事清潔</p>
                </div>
                <div>
                    <img src={housekeepbaobanner} />
                    <p className="legend" style={slider_style} >清潔交給家事寶享受生活交給你們</p>
                </div>
                <div>
                    <img src={housekeepbaobanner} />
                    <p className="legend" style={slider_style} >當清潔遇上家事寶1小時內到府服務</p>
                </div>
                
            </Carousel>
        );
    }
}

export default DemoCarousel;