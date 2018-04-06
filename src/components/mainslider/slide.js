import React from 'react'
import houskeepbaobanner from './housekeepbao-banner.jpg'

const Slide = ({ H2_text}) => {
  const styles = {
    backgroundImage: `url(${houskeepbaobanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: '100%',
    width:'100%',
    height: '400px'
  }
  return <div className="slide" style={styles}>
                <div className="slide-content center">
                    <div className="vert-wrap container">
                        <div className="vert">
                            <div className="container">
                                <h2 data-animation="zoomIn" data-animation-delay="0.5s">{ H2_text}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Slide