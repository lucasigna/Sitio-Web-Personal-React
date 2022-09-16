import React from 'react'
import './CoursesItem.scss';

export const CoursesItem = ({title,placeAndTime, credential}) => {
  return (
    <div className="coursesItem">
        <p>{title}</p>
        <p>{placeAndTime}</p>
        <p><a href={credential} target="_blank">Ver credencial</a></p>
    </div>
  )
}
