import React from 'react'
import { document } from 'browser-monads'

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
            <a href="#section-1">360 Virtual Tours</a>
          </li>
          <li className="active">
            <a href="#section-2">Matterport</a>
          </li>
          <li className="active">
            <a href="#section-3">Domestic EPC</a>
          </li>
          <li className="active">
            <a href="#section-4">About & FAQ</a>
          </li>
          <li className="active">
            <a href="#section-5">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
