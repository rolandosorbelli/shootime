import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../Navbar'
import logo from '../../images/shootime2.svg'
import noSlogan from '../../images/no-slogan.svg'

import './index.scss'

const Header = ({ siteTitle }) => (
  <header className="primary-header flex">
    <Link to="/">
      <img src={logo} alt={`${siteTitle} logo`} />
    </Link>

    <Navbar />
  </header>
)

export default Header
