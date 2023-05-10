import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {console.log(sections)}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>
      <Hero />
      {sections.sections.map((section, key) => (
        <Section
          title={section.title}
          content={section.content}
          imageSrc={section.image}
          style={section.style}
          key={key}
        />
      ))}
    </>
  )
}

export default Layout

export const sections = {
  sections: [
    {
      title: '360 Virtual Tours',
      content: [
        '360 virtual tours are created by stitching together single pictures to make one unique 360 image. Commonly used to boost the view experience for existing environments such real estates, retail and hospitality, 360 virtual tours provide a superior immersive way to virtually visit places. Viewers can use their mouse to rotate in all directions or go from one room to another. They can also zoom in on any area within the scene.',
        'A 360 virtual tour is a brilliant interactive way to virtually view a property. Get in touch with Shootime Ltd to shoot and realize your bespoke 360 Virtual Tour.',
      ],
      image: 'image1',
      style: 'light-section',
    },
    {
      title: 'Matterport',
      content: [
        'Matterport is the standard for 3D space capture that transforms real-life spaces into immersive digital twin models. So much more than panoramic scans, Matterport empowers people to capture and connect rooms to create truly interactive 3D models of spaces which they can be used for many scopes in different sectors (Real Estate, 3D Photography, Retail, Travel & Hospitality, Insurance & Restoration, Facilities Management, Heritage, Architecture, Engineering & Construction).',
        'Request your Matterport survey contacting Shootime Ltd and we will be happy to discuss your needs and goals, making sure to use the finest equipment and techniques expected for every high-end projects.',
      ],
      image: 'image2',
      style: 'dark-section',
    },
    {
      title: 'Domestic Energy Performance Certificates',
      content: [
        'Energy Performance Certificates (EPCs) are needed whenever a property is: built, sold and rented. UK Government regulation states you must order an EPC for potential buyers and tenants before you market your property to sell or rent. The EPC will confirm how energy-efficient your property is to date.',
        'Get in touch with one of our accredited energy assessors at Shootime Ltd to order the EPC for your home and receive recommendations how to improve your home energy rating.',
      ],
      image: 'image3',
      style: 'secondary-section',
    },
  ],
}
