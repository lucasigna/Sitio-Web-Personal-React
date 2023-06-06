import React, { useState } from 'react'
import { CoursesItem } from './CoursesItem';
import { useEffect } from 'react';
import { getCourses } from '../../firebase';
import { CircularProgress, Skeleton } from '@mui/material';

export const CoursesList = () => {

  const [data, setData] = useState(null)

  useEffect( () => {
    getCourses(setData)
  },[])

  return (
    <div className="divEducationList">
        {!data && Array.from({ length: 20 }).map((_, index) => <Skeleton key={index} style={{margin: '10px', borderRadius: '20px'}} variant="rounded" width={Math.floor(Math.random() * (251 - 180)) + 180} height={93} />)}
        {data && Object.values(data).map( (course) => <CoursesItem title={course.title} placeAndTime={`${course.place} | ${course.date}`} credential={course.credentialLink}/>)}
    </div>
  )
}
