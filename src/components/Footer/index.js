import React from 'react'

import './index.scss'

const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div className="footer-upper__left">
          <h3>Shootime</h3>
          <p>86-90 Paul Street, London, EC2A 4NE</p>
          <p>Company Number: 14429115</p>
        </div>
        <div className="footer-upper__right">
          <div className="footer-upper__right-company">
            <h4>Company</h4>
            <p>
              <a href="#section-1">360 Virtual Tours</a>
            </p>
            <p>
              <a href="#section-2">Matterport</a>
            </p>
            <p>
              <a href="#section-3">Domestic EPC</a>
            </p>
          </div>
          <div className="footer-upper__right-extra">
            <h4>Extra</h4>
            <p>
              <a href="#section-4">About & FAQ</a>
            </p>
            <p>
              <a href="#section-5">Contact</a>
            </p>
          </div>
          <div className="footer-upper__right-legal">
            <h4>Legal</h4>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Cookies Policy</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <p>&copy; Copyright {new Date().getFullYear()}, Shootime.co.uk</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
