import React from 'react'
import { CoursesItem } from './CoursesItem';

export const CoursesList = () => {
  return (
    <div className="divEducationList">
        <CoursesItem title="Desarrollo Web" placeAndTime="Coderhouse | Junio 2021" credential="https://www.coderhouse.com/certificados/60d6162c903a3001e78ad01b"/>
        <CoursesItem title="JavaScript" placeAndTime="Coderhouse | Agosto 2021" credential="https://www.coderhouse.com/certificados/61341c7a27d2f603e9831cdd"/>
        <CoursesItem title="React" placeAndTime="Coderhouse | Octubre 2021" credential="https://www.coderhouse.com/certificados/6192b7557d53800d23159896"/>
        <CoursesItem title="Curso Básico de Python" placeAndTime="Platzi | Septiembre 2022" credential="https://platzi.com/p/lucasgonzalez1999/curso/1937-python/diploma/detalle/"/>
    </div>
  )
}
