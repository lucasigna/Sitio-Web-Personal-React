import React from 'react'
import './ExperienceContainer.scss';
import {Animated} from "react-animated-css";

export const ExperienceContainer = () => {
  return (
    <Animated animationIn="fadeIn" isVisible={true}>
      <div className="experienceContainer">
          <h2>Experiencia</h2>
          <div>
              <p>Analista de Ingeniería y Soporte Técnico</p>
              <p>Akribis</p>
              <p>Marzo 2023 - Mayo 2023</p>
              <p>Tareas:<br></br>-Reparación de equipos de medición de temperatura, humedad, presión, etc. (Dataloggers)<br></br>-Soporte remoto a clientes<br></br>-Interacción con proveedores</p>
          </div>
          <div>
              <p>Desarrollador de Software</p>
              <p>Arkano Software</p>
              <p>Octubre 2021 - Mayo 2022</p>
              <p>Encargado de desarrollo y mantenimiento. Tecnologías: React, Javascript, .NET, C#, Power Apps, Teams Apps, Power Automate, SQL Server.</p>
          </div>
      </div>
    </Animated>
  )
}
