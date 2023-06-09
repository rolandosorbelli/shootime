import React, { useState } from 'react'
import { document } from 'browser-monads'
import { motion } from 'framer-motion'

import './index.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const primaryNav = document.querySelector('.primary-navigation')
  const navToggle = document.querySelector('.mobile-nav-toggle')

  navToggle &&
    navToggle.addEventListener('click', () => {
      const visibility = primaryNav.getAttribute('data-visible')

      if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
        setIsOpen(true)
      } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
        setIsOpen(false)
      }
    })

  const motionVariants = {
    onHover: { color: '#e25643' },
  }

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation flex"
        >
          <li className="active">
            <motion.a
              variants={motionVariants}
              whileHover={!isOpen && 'onHover'}
              href="#section-1"
            >
              360 Virtual Tours
            </motion.a>
          </li>
          <li className="active">
            <motion.a
              variants={motionVariants}
              whileHover={!isOpen && 'onHover'}
              href="#section-2"
            >
              Matterport
            </motion.a>
          </li>
          <li className="active">
            <motion.a
              variants={motionVariants}
              whileHover={!isOpen && 'onHover'}
              href="#section-3"
            >
              Domestic EPC
            </motion.a>
          </li>
          <li className="active">
            <motion.a
              variants={motionVariants}
              whileHover={!isOpen && 'onHover'}
              href="#section-4"
            >
              About & FAQ
            </motion.a>
          </li>
          <li className="active">
            <motion.a
              variants={motionVariants}
              whileHover={!isOpen && 'onHover'}
              href="#section-5"
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
