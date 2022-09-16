import React from 'react'
import './AboutMeContainer.scss';
import {Animated} from "react-animated-css";

export const AboutMeContainer = () => {
  return (
    <Animated animationIn="fadeIn" isVisible={true}>
      <div className="divAboutMeContainer">
          <img src={require('../../assets/foto_cv.png')} className="aboutMe_img"/>
          <h2 className="aboutMe_h2">Lucas Ignacio González</h2>
          <p className="aboutMe_p">Tengo 23 años y estoy casi en 4to año de Ingeniería Electrónica en UTN FRA. Estoy interesado en desenvolverme en el rubro de electrónica, robótica, domótica, inmótica, IoT, entre otros. Me interesa combinar la electrónica con la programación y poder desarrollar productos con esas bases. Trabajé como desarrollador web y tengo experiencia en haber programado con Javascript y C#. Además por interés personal, y por la universidad y colegio, he programado en varios lenguajes como C, Python, C++, Java, Dart, entre otros. Tengo algunas bases de haber estudiado por mi cuenta bases de datos SQL y NoSQL como las son MariaDB, SQLite3, MongoDB, etc. <br/><br/>Aspiro en el futuro desarrollar emprendimientos tecnológicos que aporten valor a la sociedad.</p>
          <div className="divAboutMeTags">
              <p>C</p>
              <p>Python</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Visual Studio Code</p>
              <p>KiCad</p>
              <p>Proteus 8</p>
              <p>Git</p>
              <p>Arduino</p>
          </div>
      </div>
    </Animated>
  )
}
