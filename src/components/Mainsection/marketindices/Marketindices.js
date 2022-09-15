import React from 'react'
import './_marketIndices.scss';

import Userdata from './Userdata/Userdata';

const investmentData = [
    {
        uniqueId: 1,
        name: "Sensex",
        number: '32,424.10',
        percentge: '223.51 (0.69%)',
    },
    {
        uniqueId: 2,
        name: "Nifty 50",
        number: '32,424.10',
        percentge: '-223.51 (-0.69%)',
    },
    {
        uniqueId: 3,
        name: "Nifty Bank",
        number: '32,424.10',
        percentge: '223.51 (-0.69%)',
    },
    {
        uniqueId: 4,
        name: "Nifty IT",
        number: '32,424.10',
        percentge: '223.51 (-0.69%)',
    },
    {
        uniqueId: 5,
        name: "BSE SmallCap",
        number: '32,424.10',
        percentge: '-223.51 (-0.69%)',
    },
    {
        uniqueId: 6,
        name: "BSE MidCap",
        number: '32,424.10',
        percentge: '223.51 (-0.69%)',
    },
    {
        uniqueId: 7,
        name: "Nifty Auto",
        number: '32,424.10',
        percentge: '223.51 (-0.69%)',
    },
    {
        uniqueId: 8,
        name: "BSE CapGoods",
        number: '32,424.10',
        percentge: '-223.51 (-0.69%)',
    },

]


export default function Marketindices() {
    return (
        <>
            <section className="container">
                <h3 className="market-text">Market Indices</h3>
                <ul className="boxes-list">
                    {investmentData.map((eachItem) => (
                        <Userdata userDetails={eachItem} />
                    ))}
                </ul>
            </section>
        </>
    )
}
