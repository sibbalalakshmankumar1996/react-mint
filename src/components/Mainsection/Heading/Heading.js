import React from 'react'
import './_heading.scss';

export default function Heading(props) {
  const {heading, cname} = props
    //console.log(props);
  return (
      <h2 className={`title ${cname}`}>{heading}</h2>
  )
}
