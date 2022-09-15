import React from 'react'
import Userdata from './Userdata'
import Slider from 'react-slick'
import Hambourg from './Hambourg'
import Logo from './Logo'
import Navigation from './Navigation'
import Search from './Search'
import Notofication from './Notofication'
import Signin from './Signin'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



import './style.css'

const investmentData = [
  {
    uniqueId: 1,
    name: "Sensex",
    number: '32,424.10',
    percentge: '223.51 (0.69%)',
  },
  {
    uniqueId: 2,
    name: "Nifty 50",
    number: '32,424.10',
    percentge: '-223.51 (-0.69%)',
  },
  {
    uniqueId: 3,
    name: "Nifty Bank",
    number: '32,424.10',
    percentge: '223.51 (-0.69%)',
  },
  {
    uniqueId: 4,
    name: "Nifty IT",
    number: '32,424.10',
    percentge: '223.51 (-0.69%)',
  },
  {
    uniqueId: 5,
    name: "BSE SmallCap",
    number: '32,424.10',
    percentge: '-223.51 (-0.69%)',
  },
  {
    uniqueId: 6,
    name: "BSE MidCap",
    number: '32,424.10',
    percentge: '223.51 (-0.69%)',
  },
  {
    uniqueId: 7,
    name: "Nifty Auto",
    number: '32,424.10',
    percentge: '223.51 (-0.69%)',
  },
  {
    uniqueId: 8,
    name: "BSE CapGoods",
    number: '32,424.10',
    percentge: '-223.51 (-0.69%)',
  },

]

export default function Headersection() {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <section className="header-section">
        <div className="header-top shadow-sm">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-sm-9">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <Hambourg />
                  <Logo/>
                  <Navigation />
                </nav>
              </div>
              <div className="col-sm-3">
                <div>
                  <Search />
                  <Notofication />
                  <Signin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="market-text">Market Indices</p>
          <ul className="list-unstyled d-flex">
            {investmentData.map((eachItem) => (
              <Userdata userDetails={eachItem} />
            ))}
          </ul>
        </div>
        <section className="header-bottom pt-4 pb-4 d-flex justify-content-center align-items-center">
          <div className="battle-ground-details">
            <div>
              <h1 className="heading black-color-heading">Create Your Portfolio & Invest</h1>
              <p className="paragraph black-color-para">Invest in Stocks, Mutual funds, ETFs and stock baskets. Track your investments in stocks and mutual funds.</p>
              <button type="button" className="click-button">Get started</button>
            </div>
            <p clssName="brokers-text mt-5">Available Brokers</p>
            <div className="slick-div">
              <Slider {...settings}>
                <div className="brokers-list shadow-sm">
                  <img src="./images/paisa.png" className="brokers-image" alt="5Paisa" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/angle_one.png" className="brokers-image" alt="Angleone" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/axis_direct.png" className="brokers-image" alt="Axisdirect" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/grow.png" alt="Grow" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/hdfc_sec.png" className="brokers-image" alt="Hdfcsec" />
                </div>
                <div className="brokers-list shadow-sm">
                  <img src="./images/kotak_sec.png" className="brokers-image" alt="Kotak" />
                </div>

              </Slider>
            </div>
            </div>
          <img src="./images/portfolio.png" className="portfolip-image" alt="Portfolio" />
        </section>
      </section>
    </>
  )
}
