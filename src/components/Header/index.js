import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../Navbar'
import logo from '../../images/shootime3.svg'
import noSlogan from '../../images/no-slogan.svg'

import './index.scss'

const Header = ({ siteTitle, isIndex }) => (
  <header className="primary-header flex">
    <Link to="/">
      <img src={logo} alt={`${siteTitle} logo`} />
    </Link>

    <Navbar isIndex={isIndex} />
  </header>
)

export default Header
