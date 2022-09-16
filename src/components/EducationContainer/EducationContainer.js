import React from 'react'
import { CoursesList } from './CoursesList';
import './EducationContainer.scss';
import { FormalEducationList } from './FormalEducationList';
import {Animated} from "react-animated-css";

export const EducationContainer = () => {
  return (
    <Animated animationIn="fadeIn" isVisible={true}>
        <div className="divEducation">
            <h2>Formación</h2>
            <FormalEducationList/>
        </div>
        <div className="divEducation">
            <h2>Cursos/Certificados</h2>
            <CoursesList/>
        </div>
    </Animated>
  )
}
