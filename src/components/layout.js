import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import './layout.css'
import Faq from './Faq'
import Contact from './Contact'

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
          position={section.position}
          inverted={section.inverted}
          key={key}
        />
      ))}
      <Faq content={faqs.faqs.content} />
      <Contact />
      <footer>
        <p>&copy; Copyright {new Date().getFullYear()}, Shootime.co.uk</p>
        <p>All Rights Reserved</p>
      </footer>
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
      position: 1,
      inverted: false,
    },
    {
      title: 'Matterport',
      content: [
        'Matterport is the standard for 3D space capture that transforms real-life spaces into immersive digital twin models. So much more than panoramic scans, Matterport empowers people to capture and connect rooms to create truly interactive 3D models of spaces which they can be used for many scopes in different sectors (Real Estate, 3D Photography, Retail, Travel & Hospitality, Insurance & Restoration, Facilities Management, Heritage, Architecture, Engineering & Construction).',
        'Request your Matterport survey contacting Shootime Ltd and we will be happy to discuss your needs and goals, making sure to use the finest equipment and techniques expected for every high-end projects.',
      ],
      image: 'image2',
      style: 'dark-section',
      position: 2,
      inverted: true,
    },
    {
      title: 'Domestic Energy Performance Certificates',
      content: [
        'Energy Performance Certificates (EPCs) are needed whenever a property is: built, sold and rented. UK Government regulation states you must order an EPC for potential buyers and tenants before you market your property to sell or rent. The EPC will confirm how energy-efficient your property is to date.',
        'Get in touch with one of our accredited energy assessors at Shootime Ltd to order the EPC for your home and receive recommendations how to improve your home energy rating.',
      ],
      image: 'image3',
      style: 'secondary-section',
      position: 3,
      inverted: false,
    },
  ],
}

export const faqs = {
  faqs: {
    content: [
      {
        question: 'HOW LONG DOES IT TAKE TO RECEIVE THE DIGITAL TWIN?',
        answer:
          'This is the biggest factor. Larger models take longer to process. A model with only 1 or 2 scans may finish in 30 minutes, while a model with 200+ scans may take 24 to 48 hours. Models with difficult geometry also require more time to process.',
      },
      {
        question: 'CAN YOU USE MATTERPORT OUTSIDE?',
        answer:
          'Of course we can but outside scanning must be requested prior our attendance since this will affect the equipment in use for scanning between the Matterport Pro2 or Pro3 camera.',
      },
      {
        question: 'HOW ACCURATE IS MATTERPORT?',
        answer: 'Matterport accuracy will depends from the camera choice:',
        list: [
          '360 cameras: no measurements available, only for visual tours',
          'Matterport: Pro2 accuracy within 1%',
          'Matterport: Pro3 (Lidar) accuracy +/- 20mm @10m',
          'Leica BLK360: G1 (Lidar-based camera) accuracy within 0.1%',
        ],
      },
    ],
  },
}
