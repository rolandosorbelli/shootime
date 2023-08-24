import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './index.scss'

const ImageDivider = ({
  title,
  content,
  imageSrc,
  style,
  position,
  inverted,
  url,
}) => {
  const control = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '200px',
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  const textVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  }

  return (
    <div className={`section-container ${inverted ? 'inverted' : ''}`} id={url}>
      <div className={`background ${imageSrc}`}></div>
      <div className={`section-text ${style}`}>
        <motion.h2 animate={control} variants={textVariant} initial="hidden">
          {title}
        </motion.h2>
        {content?.map((paraghraph, key) => (
          <motion.p
            key={key}
            ref={ref}
            animate={control}
            variants={textVariant}
            initial="hidden"
          >
            {paraghraph}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

export default ImageDivider
