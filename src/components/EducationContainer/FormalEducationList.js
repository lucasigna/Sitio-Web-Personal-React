import React from 'react'
import { FormalEducationItem } from './FormalEducationItem'

export const FormalEducationList = () => {
  return (
    <div className="divEducationList">
        <FormalEducationItem title="Ingeniería Electrónica" place="Universidad Tecnológica Nacional" time="2019 - Actualidad"/>
        <FormalEducationItem title="Técnico Electromecánico" place="Instituto Industrial Luis A. Huergo" time="2013 - 2018"/>
    </div>
  )
}
