import React from 'react'
import './style.css'

export default function BattleGround() {
    return (
        <>
            <section className="battleground-container d-flex justify-content-center align-items-center">
                <div class="battle-ground-details">
                    <h1 className="heading black-color-heading">Enter the Battle Ground</h1>
                    <p className="paragraph black-color-para">Test your investment skills by creating your own virtual portfolios and competing with other players.</p>
                    <p className="paragraph black-color-para">Participate in Arena with daily/weekly/monthly games.</p>
                    <button type="button" className="click-button">Get started</button>
                </div>
                <img src="./images/battle_ground.png" className="battleground-img" alt="Battleground" />
            </section>
        </>
    )
}
