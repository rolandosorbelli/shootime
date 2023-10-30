import React from 'react'
import buttonArrow from '../../images/hero-button-icon.png'

import './index.scss'

const Hero = () => {
  return (
    <div className="hero-container">
      <>
        <video playsInline autoPlay muted loop id="bgvid">
          <source
            src="https://shootime.s3.eu-west-2.amazonaws.com/videobg-3.mp4"
            type="video/mp4"
          />
        </video>
      </>
      <div className="hero-container__content">
        <h1>We make your world 360</h1>
        <button>
          <a href="#contact">GET A QUOTE</a>
          <img src={buttonArrow}></img>
        </button>
      </div>
    </div>
  )
}

export default Hero
