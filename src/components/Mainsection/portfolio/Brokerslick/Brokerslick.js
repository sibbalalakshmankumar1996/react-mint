import React from 'react'

import './_brokerslick.scss';

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Brokerslick() {
    const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
    <p className="brokers-text">Available Brokers</p>
            <div className="slick-div">
              <Slider {...settings}>
                <div className="brokers-list shadow-sm">
                  <img src="./images/paisa.png" className="img-fluid" alt="5Paisa" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/angle_one.png" className="img-fluid" alt="Angleone" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/axis_direct.png" className="img-fluid" alt="Axisdirect" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/grow.png" alt="Grow" className="img-fluid" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/hdfc_sec.png" className="img-fluid" alt="Hdfcsec" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/kotak_sec.png" className="img-fluid" alt="Kotak" />
                </div>
              </Slider>
            </div>
    
    </>
  )
}
