import React from 'react'
import './_insurancedata.scss';

export default function Insurancedata(props) {
    const {details} = props;
    const {uniqueId, text} = details
  return (
    <>
    <li className="d-flex align-items-center mb-3" key={uniqueId}>
    <img src="./images/check_circle.png" className="checkcirlce-image" alt="Checkcirlcle"/>
    <p className="para">{text}</p>
    </li>
    </>
  )
}
