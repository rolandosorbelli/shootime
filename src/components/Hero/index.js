import React from 'react'

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
      <h1>We make your world 360</h1>
      <p>
        London based company, Shootime Ltd is specialised in 360 photography, 3D
        digital twins and EPC.
      </p>
      <p>
        Established in 2022 the company has a team of professionals with a
        strong background in photography, construction, architectural survey and
        project management.
      </p>
      <button>GET A QUOTE</button>
    </div>
  )
}

export default Hero
