import React from 'react'

import './index.scss'

const ImageDivider = ({
  title,
  content,
  imageSrc,
  style,
  position,
  inverted,
}) => {
  console.log(content)
  return (
    <div
      className={`section-container ${inverted ? 'inverted' : ''}`}
      id={`section-${position}`}
    >
      <div className={`background ${imageSrc}`}></div>
      <div className={`section-text ${style}`}>
        <h2>{title}</h2>
        {content?.map((paraghraph, key) => (
          <p key={key}>{paraghraph}</p>
        ))}
      </div>
    </div>
  )
}

export default ImageDivider
