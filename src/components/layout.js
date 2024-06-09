import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import './layout.css'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'

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
          cases={section.cases}
          imageSrc={section.image}
          style={section.style}
          position={section.position}
          inverted={section.inverted}
          url={section.url}
          key={key}
        />
      ))}
      <Faq content={faqs.faqs.content} />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout

export const sections = {
  sections: [
    {
      title: 'iGUIDE',
      url: 'iguide',
      content: [
        'Fast, accurate and providing flexible file types (PDF and DWG), iGUIDE allows us to create precise floor plans and immersive 3D tours for real estate listings, construction projects, insurance claims, facility management, commercial units, hospitality and retail venues. With iGUIDE, no monthly subscription is required for 3D virtual tours. Virtual tours can be hosted on our iGUIDE server for online visualisation and real-time collaboration with your team. Alternatively, when an extra layer of privacy is required, we can provide the offline package of the virtual tours which you can host on your own local server/Hard Disk. With iGUIDE you own your data, ensuring adherence to strict privacy policies when required.',
      ],
      cases: [
        {
          name: 'Commercial building',
          url: 'https://youriguide.com/vS393GQWCVG8D1?pano=150&rotation=5.7712013236148945&elevation=-0.09348891079638744',
        },
        {
          name: 'Luxury Real Estate',
          url: 'https://youriguide.com/1805_this_way_home_dr_georgetown_ky',
        },
        {
          name: 'Construction site (Pre, Post and Staged)',
          url: 'https://youriguide.com/pre_and_post_construction',
        },
        {
          name: 'Insurance claim (Fire)',
          url: 'https://youriguide.com/i6qr7_1122_sample_road_kitchener_on?pano=456&rotation=0.4003933852048609&elevation=0.03532416470320378',
        },
        {
          name: 'Tourism (Museum)',
          url: 'https://youriguide.com/39_bygd_ynesveien_oslo_no_03_no',
        },
      ],
      image: 'image1',
      style: 'light-section',
      position: 1,
      inverted: false,
    },
    {
      title: 'Matterport',
      url: 'matterport',
      content: [
        'Matterport is the standard for 3D space capture that transforms real-life spaces into immersive digital twin models. So much more than panoramic scans, Matterport empowers people to capture and connect rooms to create truly interactive 3D models of spaces which they can be used for many scopes in different sectors (Real Estate, 3D Photography, Retail, Travel & Hospitality, Insurance & Restoration, Facilities Management, Heritage, Architecture, Engineering & Construction).',
        'Request your Matterport survey contacting Shootime Ltd and we will be happy to discuss your needs and goals, making sure to use the finest equipment and techniques expected for every high-end projects.',
      ],
      cases: [
        {
          name: 'Retail showroom',
          url: 'https://my.matterport.com/show/?m=6aqJ1qD1rYC',
        },
        {
          name: 'Real Estate marketing',
          url: 'https://my.matterport.com/show/?m=r9ozgDsKsko',
        },
        {
          name: 'Construction site',
          url: 'https://my.matterport.com/show/?m=EPH2w2WTS6s',
        },
      ],
      image: 'image2',
      style: 'dark-section',
      position: 2,
      inverted: true,
    },
    {
      title: 'Domestic Energy Performance Certificates',
      url: 'depc',
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
        question: 'Who are we?',
        answer:
          'London based company, Shootime Ltd is specialised in 360 photography, 3D digital twins and EPC. The company has a team of professionals with a strong background in photography construction, architectural survey and project management.',
      },
      {
        question:
          'Do you carry out surveys and digital scans outside of normal business hours?',
        answer:
          'At Shootime we understand flexibility is everything for our clients and we can survey and scan during week-ends or outside of normal working hours (Mon-Fri, 9.00-17.00).',
      },
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
      {
        question: 'Is there any fee to keep my model active?',
        answer:
          'Yes, the digital twin is hosted on Matterport servers and there is a small monthly fee to keep the digital twins active.',
      },
      {
        question:
          'I don’t need my digital twin for few months, can I temporary archive it?',
        answer:
          'Yes, we can archive your digital twin for you if you don’t need it for a certain time and we can reactive the digital twin again for a small fee. For example, you can have your property scanned for insurance purpose or before handing the property to a tenant to prove how was the condition of your property before any damage. In this way you will not incur in any monthly hosting fee while not keeping visually active the digital twin.',
      },
      {
        question: 'Can people walk around while scanning?',
        answer:
          'We will need a space free from people since this will affect the final result of the digital twin.',
      },
      {
        question: 'Can I add notes or labels within the digital twin?',
        answer:
          'Yes, you can add notes, labels, external links (documents, videos or websites) within the digital twins. These are called “’Mattertags’’. For example, once we have created the digital twin of your commercial or residential property you could add Mattertags to create your own digital interactive O&amp;M manual at the end of the construction project; a list of actions or instructions to be completed and shared with your maintenance team; a list of notes added from the security team to improve the physical security aspect of the building; and infinite other options.',
      },
      {
        question: 'How much Matterport scan cost?',
        answer:
          'The cost depends mainly from the camera you want us to use and the total sqm of the property to scan.',
      },
      {
        question: 'What is an EPC?',
        answer:
          'An EPC gives a property an energy efficiency rating from A (most efficient) to G (least efficient).',
      },
      {
        question: 'When do you need an EPC?',
        answer:
          'EPCs became a legal requirement in England, Wales and Northern Ireland in 2008. The regulations set by the Department of Communities and Local Government (DCLG) require an EPC to be commissioned before a building is put on the market or it is rented. Your property’s EPC needs to be available as soon as you start to market your property for sale or rent. It will inform people how energy efficient the property is and will cover any potential savings on fuel payments.',
      },
      {
        question: 'How long does it take to complete an EPC?',
        answer:
          'One of our assessors will visit your property once agreed by email day and time slot for access. After completing the survey, the assessor will take approximately 48h to complete the EPC if no others information are required to be collected post-survey. Payment is required up-front the survey.',
      },
      {
        question: 'What is needed to complete an EPC?',
        answer:
          'In order to carry out the EPC, the assessor will need to carry out a survey of the property to gather the required information. As he goes around the property, he will need to take multiple photos to gather evidence to support the data entered into the software. Following the visit, your EPC is created using all the measurements and evidence gathered on site.',
      },
      {
        question:
          'What information will the assessor collect during the site survey?',
        answer:
          'The accredited assessor will take measurements of all levels of the property. This will allow them to sketch a plan for each level, including area calculations, heat loss perimeters, the location of party walls, internal room layouts, sheltered and alternative walls, all extensions, conservatories and roof- rooms, any excluded/thermally separated areas etc. He will take photographs of elevations of the property, showing doors, openings, extensions, conservatories, insulation levels, main and secondary heating systems (including radiators and boilers) as well as any other feature of the property, such as wall constructions, photovoltaics and any other system that&#39;s present. The photographs will also document any access issues, such as furniture obstructions or locked cupboards.',
      },
      {
        question:
          'What information will the property owner must provide to the assessor?',
        answer:
          'The property owner should send prior the assessor visit any information that can help the assessor to collect data as accurate as possible including: year of built along a proof such Title register or similar; certification/declaration from the builder for any building works related to improve the energy efficiency of the property along with specs of the material (for example insulation type installed within the walls and roof; Fensa Certificate for doors and windows or any proof such installation certificate for windows and doors installed after 2002; technical specs of heating system and renewable energy systems.',
      },
      {
        question:
          'Can my new EPC rating be lower compared to the previous certificate if I have changed nothing to my property?',
        answer:
          'This is a common situation when a new EPC certificate has a lower rating compare to the previous certificate. This is absolutely normal due to building regulations, construction techniques and material performances continually changing.',
      },
      {
        question: 'How long is the EPC valid for?',
        answer:
          'An EPC is valid for 10 years and can be used multiple times during this period. The EPC will expire after 10 years and a new EPC (valid for the next 10 years) should be produced if the property is marketed for sale or rent at that time.',
      },
    ],
  },
}
