import React from 'react'
import './PortfolioContainer.scss';
import {Animated} from "react-animated-css";
import { PortfolioList } from './PortfolioList';

export const PortfolioContainer = () => {
      return (
        <Animated animationIn="fadeIn" isVisible={true}>
          <div className="portfolioContainer">
            <h2>Portfolio</h2>
            <PortfolioList/>
          </div>
        </Animated>
      )
}
