import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../Navbar'
import logo from '../../images/shootime2.svg'

import './index.scss'

const Header = ({ siteTitle }) => (
  <header className="primary-header flex">
    <Link to="/">
      <img src={logo} alt="example" />
    </Link>

    <Navbar />
  </header>
)

export default Header
