import React from 'react';
import './_getbutton.scss';



export default function Getbutton(props) {
    const {text, cname} = props
  return (
    <button type="button" className={`click-button ${cname}`}>{text}</button>
  )
}
