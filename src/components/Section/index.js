import React from 'react'

import './index.scss'

const ImageDivider = ({ title, content, imageSrc }) => {
  console.log(imageSrc)
  return (
    <div className="section-container">
      <div className={`background ${imageSrc}`}></div>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ImageDivider
