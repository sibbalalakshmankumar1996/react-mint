import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from "react-slick";


import './style.css'


export default function Indices() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    return (
        <>
            <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
          <img src="./images/paisa.png" alt="5Paisa" />
          </div>
          <div>
          <img src="./images/paisa.png" alt="5Paisa" />
          </div>
          <div>
          <img src="./images/paisa.png" alt="5Paisa" />
          </div>
          <div>
          <img src="./images/paisa.png" alt="5Paisa" />
          </div>
          <div>
          <img src="./images/paisa.png" alt="5Paisa" />
          </div>
          <div>
          <img src="./images/paisa.png" alt="5Paisa" />
          </div>
        </Slider>
      </div>
        </>
    )
}
