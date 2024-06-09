import React from 'react'
import linkedin from '../../images/linkedin-icon.svg'
import instagram from '../../images/instagram-icon.svg'
import logo1 from '../../images/footer-iguide.png'
import logo2 from '../../images/footer-matterport.png'
import logo3 from '../../images/footer-elmhurst.png'
import logo4 from '../../images/footer-cng.png'

import './index.scss'

const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div className="footer-upper__left">
          <h3>Shootime</h3>
          <p>86-90 Paul Street, London, EC2A 4NE</p>
          <p>Company Number: 14429115</p>
          <div className="footer-upper__left-logos">
            <a
              href="https://www.linkedin.com/company/shootime-ltd/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn page" className="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/shootime_ltd"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram page" className="instagram" />
            </a>
          </div>
        </div>
        <div className="footer-upper__right">
          <div className="footer-upper__right-company">
            <h4>Company</h4>
            <p>
              <a href="/#360-virtual-tours">360 Virtual Tours</a>
            </p>
            <p>
              <a href="/#matterport">Matterport</a>
            </p>
            <p>
              <a href="/#depc">Domestic EPC</a>
            </p>
          </div>
          <div className="footer-upper__right-extra">
            <h4>Extra</h4>
            <p>
              <a href="/#about-and-faq">About & FAQ</a>
            </p>
            <p>
              <a href="/#contact">Contact</a>
            </p>
          </div>
          <div className="footer-upper__right-legal">
            <h4>Legal</h4>
            <p>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </p>
            <p>
              <a href="/privacy">Privacy Policy</a>
            </p>
            <p>
              <a href="/cookies">Cookies Policy</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <img src={logo1} alt="iGuide Logo" />
        <img src={logo2} alt="Matterport Logo" />
        <img src={logo3} alt="Elmhurst energy Logo" />
        <img
          src={logo4}
          alt="Consiglio Nazionale Geometri e Geometri Laureati Logo"
        />
      </div>
      <div className="footer-lower">
        <p>&copy; Copyright {new Date().getFullYear()}, Shootime.co.uk</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
