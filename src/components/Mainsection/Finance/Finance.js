import React from 'react'
import Logo from '../../Header/Logo/Logo';
import Heading from '../Heading/Heading';
import './_finance.scss';

export default function Finance() {
    return (
        <>
        <section className="finance-container">
        <div className="container mintgenie-container d-md-flex justify-content-around align-items-center pt-5 pb-5">
                <img src="./images/finance_app.png" className="financeapp-img" alt="Financeapp" />
                <div className="financeapp-details">
                    <Logo />
                    <Heading heading="All-in-one Finance and Investment App" cname="color-prop" />
                    <p className="finance-description">MintGenie understands your investment needs and creates a personalized portfolio for your risk profile.</p>
                    <p className="finance-description">Join the community to Learn & Earn through the most convenient Finance and investment APP there is. Fullfilling your financial goals has never been easier!</p>
                    <button type="button" className="store-button">
                        <img src="./images/google_play_store_logo.png" alt="GooglePlay" />
                        <span className="content-space">Google Play</span>
                    </button>
                    <button type="button" className="store-button">
                        <img src="./images/apple_store_logo.png" alt="GooglePlay" />
                        <span className="content-space">App Store</span>
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}
