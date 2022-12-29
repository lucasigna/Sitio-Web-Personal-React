import React from 'react'
import { PortfolioItem } from './PortfolioItem'

export const PortfolioList = () => {
  return (
    <div className="divPortfolioList">
        <PortfolioItem title="Medidor de temperatura y humedad" tools="ESP32, MICROPYTHON, REACT, FIREBASE" image="dht11" description="Proyecto personal que muestra en una página web los datos medidos por un DHT11, estos datos los envía un ESP32 hacia una base de datos." linkGithub="https://github.com/lucasigna/Medidor-DHT11-ESP32" linkWebsite="https://github.com/lucasigna/Medidor-DHT11-ESP32"/>
        <PortfolioItem title="Medidor de distancia" tools="ESP32, MICROPYTHON" image="medidor" description="Proyecto personal que muestra en un display LCD la distancia medida por un sensor ultrasónico." linkGithub="https://github.com/lucasigna/medidor_de_distancia" linkWebsite="https://github.com/lucasigna/medidor_de_distancia"/>
        <PortfolioItem title="InfoMap" tools="REACT" image="infomap" description="Sitio web de mapas interactivos en el cual se puede obtener información sobre todos los países del mundo." linkGithub="https://github.com/lucasigna/InfoMap" linkWebsite="https://infomap.vercel.app/"/>
        <PortfolioItem title="Rick and Morty Web" tools="HTML, CSS, JS" image="rick_and_morty" description="Sitio web con todos los datos de la serie Rick and Morty" linkGithub="https://github.com/lucasigna/Rick-and-Morty-Web-Info" linkWebsite="https://rick-and-morty-info.vercel.app/"/>
        <PortfolioItem title="Crypto API" tools="REACT" image="crypto" description="Sitio web para obtener datos actualizados sobre criptoactivos" linkGithub="https://github.com/lucasigna/Crypto-API" linkWebsite="http://cryptocurrency-api-nine.vercel.app/"/>
        <PortfolioItem title="Datos sobre COVID" tools="HTML, CSS, JS" image="covid" description="Página que muestra datos de Covid-19" linkGithub="https://github.com/lucasigna/Datos-Covid-API" linkWebsite="https://datos-covid-api.vercel.app/"/>
        <PortfolioItem title="GeoQuiz" tools="HTML, CSS, JS" image="geoquiz" description="Sitio web de adivinanzas sobre geografía" linkGithub="https://github.com/lucasigna/GeoQuiz" linkWebsite="http://geoquiz-one.vercel.app/"/>
        <PortfolioItem title="Conversor de unidades" tools="HTML, CSS, JS" image="conversor" description="Proyecto final del curso de JavaScript de Coderhouse" linkGithub="https://github.com/lucasigna/Proyecto-Final-Javascript" linkWebsite="http://conversor-de-unidades-plum.vercel.app/"/>
        <PortfolioItem title="Hamburguesería ficticia" tools="HTML, CSS, JS" image="hamburguesa" description="Proyecto final del curso de Desarrollo Web de Coderhouse" linkGithub="https://github.com/lucasigna/proyecto-final-coderhouse" linkWebsite="https://lucasigna.github.io/proyecto-final-coderhouse/"/>
    </div>
  )
}
