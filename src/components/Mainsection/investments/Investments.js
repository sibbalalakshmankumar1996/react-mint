import React from 'react';
import Getbutton from '../Button/Getbutton';
import Heading from '../Heading/Heading';
import './_investments.scss';


export default function Investments() {
    return (
        <>
        <section className="investmentcontainer">
        <div className="container mintgenie-container d-md-flex align-items-center justify-content-center pt-5 pb-5">
                <img src="./images/investments.png" className="img-fluid" alt="imvestments" />
                <div className="investment-details">
                    <Heading heading="New to investment?" cname="color-prop" />
                    <p className="investment-description">Jump into the simulator environment and learn investing without risking your hard earning money.</p>
                    <Getbutton text="Get Started" />
                </div>
            </div>
        </section>
        </>
    )
}
