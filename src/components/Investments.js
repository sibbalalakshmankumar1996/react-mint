import React from 'react'
import './style.css'

export default function Investments() {
    return (
        <>
            <section className="bg-container d-flex justify-content-center align-items-center">
                <img src="./images/investments.png" className="investments-img" alt="imvestments" />
                <div className="investment-details">
                    <h1 className="heading white-color-heading">New to investing?</h1>
                    <p className="paragraph white-color-para">Jump into the simulator environment and learn investing without risking your hard earning money.</p>
                    <button type="button" className="click-button">Get started</button>
                </div>
            </section>
        </>
    )
}
