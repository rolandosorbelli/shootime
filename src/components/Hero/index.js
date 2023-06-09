import React from 'react'
import buttonArrow from '../../images/hero-button-icon.png'
import scrollDown from '../../images/scroll-down.svg'

import './index.scss'

const Hero = () => {
  return (
    <div className="hero-container">
      <>
        <video playsInline autoPlay muted loop id="bgvid">
          <source
            src="https://shootime.s3.eu-west-2.amazonaws.com/videobg.mp4"
            type="video/mp4"
          />
        </video>
      </>
      <div className="hero-container__content">
        <h1>We make your world 360</h1>
        <p>
          London based company, Shootime Ltd is specialised in 360 photography,
          3D digital twins and EPC.
        </p>
        <p>
          Established in 2022 the company has a team of professionals with a
          strong background in photography, construction, architectural survey
          and project management.
        </p>
        <button>
          <a href="mailto:studio@shootime.co.uk?subject=Quote%20request">
            GET A QUOTE
          </a>
          <img src={buttonArrow}></img>
        </button>
      </div>

      {/* <a class="ct-btn-scroll" href="#section-1">
        <img alt="Arrow Down Icon" src={scrollDown} />
      </a> */}
    </div>
  )
}

export default Hero
