import React from 'react'

import './index.scss'

const Navbar = () => {
  const primaryNav = document.querySelector('.primary-navigation')
  const navToggle = document.querySelector('.mobile-nav-toggle')

  navToggle &&
    navToggle.addEventListener('click', () => {
      const visibility = primaryNav.getAttribute('data-visible')

      if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
      } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
      }
    })

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
            <a href="/">360 Virtual Tours</a>
          </li>
          <li className="active">
            <a href="/">3D Scanning</a>
          </li>
          <li className="active">
            <a href="/">Domestic EPC</a>
          </li>
          <li className="active">
            <a href="/">Commercial Photograpghy</a>
          </li>
          <li className="active">
            <a href="/">About</a>
          </li>
          <li className="active">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
