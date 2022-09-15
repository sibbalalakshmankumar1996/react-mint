import React from 'react';
import Getbutton from '../Button/Getbutton';
import Heading from '../Heading/Heading';
import './_insurance.scss';
import Insurancedata from './Insurancedata/Insurancedata';

const insuranceData = [
    {
        uniqueId: 1,
        text: "Stay safe against medical liabilities",
    },
    {
        uniqueId: 2,
        text: "Get the best quotes from 8 partners",
    },
    {
        uniqueId: 3,
        text: "Ensure complete peace of mind",
    },
    {
        uniqueId: 4,
        text: "Get complete coverage of hospitilization",
    },
]

export default function Insurance() {
    return (
        <>
            <section className="insurance-container">
                <div class="container mintgenie-container d-md-flex justify-content-around align-items-center pt-5 pb-5">
                    <div>
                        <Heading heading="Insurance" />
                        <ul className="list-unstyled mt-4">
                            {insuranceData.map((data) => (
                                <Insurancedata details={data} />
                            ))}
                        </ul>
                        <Getbutton text="Get Plans" cname="font" />
                        <div className="mt-3">
                            <span className="sub-text">Powered by</span>
                            <img src="./images/rfl.png" alt="RFL" />
                        </div>
                    </div>
                    <img src="./images/insurance.png" className="img-fluid" alt="Insurance" />

                </div>

            </section>
        </>
    )
}
