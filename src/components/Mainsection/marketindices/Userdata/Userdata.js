import React from 'react'
import './_userdata.scss'

export default function Userdata(props) {
    const { userDetails} = props;
    const {uniqueId, name, number, percentge } = userDetails;
    const percentageValue = userDetails.percentge.slice(0,4);
    const integerValue = parseInt(percentageValue);
    
    return (
        <>
        {integerValue > 0? <li className="box green-box" key={uniqueId}>
              <p className="box-name">{name} <span className="icon-green_polygon"></span></p>
              <h5 className="indices-number">{number}</h5>
              <h6 className="indices-percentage profit">{percentge}</h6>
            </li> : <li className="box red-box" key={uniqueId}>
              <p className="box-name">{name} <span className="icon-red_polygon"></span></p>
              <h5 className="indices-number">{number}</h5>
              <h6 className="indices-percentage loss">{percentge}</h6>
            </li> }
        </>

    )
    
}
