import React from 'react'
import './ContactContainer.scss';
import {Animated} from "react-animated-css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const ContactContainer = () => {
    return (
      <Animated animationIn="fadeIn" isVisible={true}>
        <div className="contactContainer">
          <h2>Contacto</h2>
          <div className="divContainer">
            <div className="divMail">
              <EmailIcon htmlColor='#FDFFFC' fontSize='large'/>
              <p>lucasignaciogonzalez1999@gmail.com</p>
            </div>
            <div className='redes'>
              <a target="_blank" href="https://github.com/lucasigna"><GitHubIcon htmlColor='#FDFFFC' fontSize='large'/></a>
              <a target="_blank" href="https://www.linkedin.com/in/lucas-gonzalez-estudiante-ingenieria-electronica/"><LinkedInIcon htmlColor='#FDFFFC' fontSize='large'/></a>
            </div>
            <button><a target="_blank" href='https://drive.google.com/file/d/1bPsA6hg389fvEnqBnV0p2ZEG1uxHOt_S/view?usp=sharing' className="btnCV">Descargá mi CV</a></button>
          </div>
        </div>
      </Animated>
    )
}
