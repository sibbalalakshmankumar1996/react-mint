import React from 'react'
import './style.css'
export default function Financeapp() {
  return (
    <>
    <section className="finance-container d-flex justify-content-center align-items-center">
    <img src="./images/finance_app.png" className="financeapp-img" alt="Financeapp" />
    <div className="financeapp-details">
    <img src="./images/mint.png" className="ming-image" alt="Mint"/>
    <img src="./images/genie.png" className="ming-image" alt="Genie"/>
    <h1 className="heading white-color-heading">All-in-one Finance and Investment App</h1>
    <p className="paragraph white-color-para">MintGenie understands your investment needs and creates a personalized portfolio for your risk profile.</p>
    <p className="paragraph white-color-para">Join the community to Learn & Earn through the most convenient Finance and investment APP there is. Fullfilling your financial goals has never been easier!</p>
    <button type="button" className="store-button">
        <img src="./images/google_play_store_logo.png" alt="GooglePlay"/> 
        <span className="content-space">Google Play</span>
    </button>
    <button type="button" className="store-button">
        <img src="./images/apple_store_logo.png" alt="GooglePlay"/> 
        <span className="content-space">App Store</span>
    </button>
    </div>

    </section>
    </>
  )
}
