import React from 'react'
import './AboutMeContainer.scss';
import {Animated} from "react-animated-css";

export const AboutMeContainer = () => {
  return (
    <Animated animationIn="fadeIn" isVisible={true}>
      <div className="divAboutMeContainer">
          <img src={require('../../assets/foto_cv.png')} className="aboutMe_img"/>
          <h2 className="aboutMe_h2">Lucas Ignacio González</h2>
          <p className="aboutMe_p">Tengo 23 años y estoy casi en 4to año de Ingeniería Electrónica en UTN FRA. Estoy interesado en desenvolverme en el rubro de electrónica, robótica, domótica, inmótica, IoT, entre otros. Me interesa combinar la electrónica con la programación y poder desarrollar productos con esas bases. Tengo conocimientos generales de programación y experiencia laboral como desarrollador web con React. Desde los 18 años me fui interesando en la programación y aprendí de forma autodidacta a programar en JavaScript, Python, C, entre otros. Actualmente me encuentro continuando mi aprendizaje en sistemas embebidos, IOT y Backend. <br/><br/>Aspiro en el futuro desarrollar emprendimientos tecnológicos que aporten valor a la sociedad.</p>
          <div className="divAboutMeTags">
              <p>C</p>
              <p>Python</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>ESP32</p>
              <p>MicroPython</p>
              <p>Firebase</p>
              <p>React</p>
              <p>CSS</p>
              <p>Visual Studio Code</p>
              <p>KiCad</p>
              <p>Proteus 8</p>
              <p>Git</p>
              <p>Arduino</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Electron.js</p>
          </div>
      </div>
    </Animated>
  )
}
