import React from 'react'
import './FormalEducationItem.scss';

export const FormalEducationItem = ({title, place, time}) => {
  return (
    <div className="formalEducationItem">
        <p>{title}</p>
        <p>{place}</p>
        <p>{time}</p>
    </div>
  )
}
