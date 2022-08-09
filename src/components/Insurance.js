import React from 'react'
import './style.css'
export default function Insurance() {
  return (
    <>
    <section class="insurance-container d-flex justify-content-center align-items-center">
        <div className="insurance-details">
        <h1 className="heading black-color-heading">Insurance</h1>
        <div className="mb-3">
            <img src="./images/check_circle.png" className="checkcirlce-image" alt="Checkcirlcle"/>
            <p className="d-inline paragraph black-color-para">Stay safe against medical liabilities</p>
        </div>
        <div className="mb-3">
            <img src="./images/check_circle.png" className="checkcirlce-image" alt="Checkcirlcle"/>
            <p className="d-inline paragraph black-color-para">Get the best quotes from 8 partners</p>
        </div>
        <div className="mb-3">
            <img src="./images/check_circle.png" className="checkcirlce-image" alt="Checkcirlcle"/>
            <p className="d-inline paragraph black-color-para">Ensure complete peace of mind</p>
        </div>
        <div className="mb-4">
            <img src="./images/check_circle.png" className="checkcirlce-image" alt="Checkcirlcle"/>
            <p className="d-inline paragraph black-color-para">Get complete coverage of hospitalization</p>
        </div>
        <button type="button" className="click-button">Get Plans</button>
        <div className="mt-3">
            <span className="sub-text">Powered by</span>
            <img src="./images/rfl.png" alt="RFL" />
        </div>
        </div>
        <img src="./images/insurance.png" className="insurance-image" alt="Insurance" />

    </section>
    </>
  )
}
