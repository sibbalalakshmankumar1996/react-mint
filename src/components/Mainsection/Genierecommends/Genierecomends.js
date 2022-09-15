import React from 'react';
import Getbutton from '../Button/Getbutton';
import Heading from '../Heading/Heading';
import './_genierecommends.scss';


export default function Genierecomends() {
    return (
        <>
        <section className="genie-container">
        <div className="container mintgenie-container d-md-flex justify-content-center align-items-center pt-5 pb-5">
                <img src="./images/genie_recommends.png" className="img-fluid" alt="Profile" />
                <div class="genie-details">
                    <Heading heading="Genie Recommends" />
                    <p className="genie-description">Get profile based recommendations in stocks, Mutual funds, ETFs, & Stock baskets from the best robo advisor - MintGenie</p>
                    <Getbutton text="Get Your Risk Profile" cname="font"/>
                </div>
            </div>
        </section>
        </>
    )
}
