import React from 'react';
import Getbutton from '../Button/Getbutton';
import Heading from '../Heading/Heading';

import './_battelground.scss';

export default function Battleground() {
    return (
        <>
            <section className="container mintgenie-container d-md-flex justify-content-center align-items-center pt-5 pb-5">
                <div class="battle-ground-details">
                    <Heading heading="Enter the Battle Ground" />
                    <p className="para-details">Test your investment skills by creating your own virtual portfolios and competing with other players.</p>
                    <p className="para-details">Participate in Arena with daily/weekly/monthly games.</p>
                    <Getbutton text="Get Started" cname="font" />
                </div>
                <img src="./images/battle_ground.png" className="img-fluid" alt="Battleground" />
            </section>
        </>
    )
}
