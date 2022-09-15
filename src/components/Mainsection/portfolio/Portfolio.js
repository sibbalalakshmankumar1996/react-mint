import React from 'react'
import Getbutton from '../Button/Getbutton';
import Heading from '../Heading/Heading';
import Brokerslick from './Brokerslick/Brokerslick';

import './_portfolio.scss';

export default function Portfolio() {
    return (
        <>
            <section className="container mintgenie-container d-md-flex align-items-center justify-content-center pt-5 pb-5">
                <div className="portfolio-details">
                    <Heading heading="Create Your Portfolio & Invest" />
                    <p className="para-details">Invest in Stocks, Mutual funds, ETFs and stock baskets. Track your investments in stocks and mutual funds.</p>
                    <Getbutton text="Get Started" />
                    
                    <Brokerslick />
                </div>
                <img src="./images/portfolio.png" className="img-fluid" alt="Portfolio" />
            </section>
        </> 
    )
}
