import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './index.scss'

const Navbar = () => {
  const [toggled, setToggled] = useState(false)

  const motionVariants = {
    onHover: { color: '#e25643' },
  }

  const navMotion = {
    visible: {
      opacity: 1,

      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  }

  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
  }

  const navLinks = [
    { name: '360 Virtual Tours', href: '#section-1', id: 'section-1' },
    { name: 'Matterport', href: '#section-2', id: 'section-2' },
    { name: 'Domestic EPC', href: '#section-3', id: 'section-3' },
    { name: 'About & FAQ', href: '#section-4', id: 'section-4' },
    { name: 'Contact', href: '#section-5', id: 'section-5' },
  ]

  const NavLinks = ({ isMobile, className }) => (
    <div className={className}>
      {navLinks.map(({ name, href, id }) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          href={href}
          onClick={() => isMobile && setToggled((prevToggle) => !prevToggle)}
        >
          {name}
        </motion.a>
      ))}
    </div>
  )

  return (
    <>
      <nav className="flex items-center justify-between">
        {/* Nav Items animating in  */}
        {toggled && (
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="fixed right-0 top-0 z-100 flex h-screen w-full md:w-1/2 flex-col items-center justify-center bg-[#e25742] primary-navigation"
          >
            <NavLinks
              className="flex flex-col gap-24 text-lg"
              isMobile={true}
            />
          </motion.div>
        )}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.35 }}
          className="hidden lg:flex lg:items-center lg:justify-center primary-navigation"
        >
          <NavLinks className="flex gap-12" isMobile={false} />
        </motion.div>

        {/* Hamburger Toggle */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.35 }}
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="burger z-50 cursor-pointer space-y-1.5 lg:hidden"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="line-1 block h-0.5 w-8 bg-black"
          />

          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="line-2 block h-0.5 w-6 bg-black"
          />
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 24,
            }}
            className="line-3 block h-0.5 w-4 bg-black"
          />
        </motion.div>
      </nav>
    </>
  )
}

export default Navbar
